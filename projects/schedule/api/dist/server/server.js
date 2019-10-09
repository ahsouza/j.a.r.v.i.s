"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const mongoose = require("mongoose");
const env_1 = require("../config/env");
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
                // PLUGINS
                this.application.use(restify.plugins.bodyParser());
                this.application.use(restify.plugins.queryParser());
                // ROUTES
                for (let router of routers) {
                    router.applyRoutes(this.application);
                }
                this.application.listen(env_1.environment.server.port, () => {
                    resolve(this.application);
                });
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
