"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const mongoose = require("mongoose");
const corsMiddleware = require("restify-cors-middleware");
const env_1 = require("../config/env");
const merge_patch_parser_1 = require("./merge-patch-parser");
const error_handler_1 = require("./error.handler");
class Server {
    initializeDb() {
        mongoose.Promise = global.Promise;
        return mongoose.connect(env_1.environment.db.url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    }
    initRoutes(routers) {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'api',
                    version: '1.0.0'
                });
                const corsOptions = {
                    preflightMaxAge: 10,
                    origins: ['*'],
                    exposeHeaders: ['x-custom-header'],
                    allowHeaders: ['authorization']
                };
                const cors = corsMiddleware(corsOptions);
                this.application.pre(cors.preflight);
                // PLUGINS
                this.application.use(cors.actual);
                this.application.use(restify.plugins.bodyParser());
                this.application.use(restify.plugins.queryParser());
                this.application.use(merge_patch_parser_1.mergePatchBodyParser);
                // ROUTES
                for (let router of routers) {
                    router.applyRoutes(this.application);
                }
                this.application.listen(env_1.environment.server.port, () => {
                    resolve(this.application);
                });
                // EVENTS
                this.application.on('restifyError', error_handler_1.handleError);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootstrap(routers = []) {
        return this.initializeDb().then(() => this.initRoutes(routers).then(() => this));
    }
}
exports.Server = Server;
