"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../config/model-router");
const clients_model_1 = require("./clients.model");
class ClientsRouter extends model_router_1.ModelRouter {
    constructor() {
        super(clients_model_1.Client);
        this.on('beforeRender', document => {
            document.password = undefined;
        });
    }
    applyRoutes(application) {
        application.get(`${this.basePath}`, this.findAll);
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]);
        application.post(`${this.basePath}`, this.save);
        application.put(`${this.basePath}/:id`, [this.validateId, this.replace]);
        application.patch(`${this.basePath}/:id`, [this.validateId, this.update]);
        application.del(`${this.basePath}/:id`, [this.validateId, this.del]);
    }
}
exports.clientsRouter = new ClientsRouter();
