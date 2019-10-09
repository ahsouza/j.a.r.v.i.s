"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const env_1 = require("../config/env");
class Server {
    initRoutes() {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'api',
                    version: '1.0.0'
                });
                this.application.use(restify.plugins.queryParser());
                this.application.listen(env_1.environment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootstrap() {
        return this.initRoutes().then(() => this);
    }
}
exports.Server = Server;