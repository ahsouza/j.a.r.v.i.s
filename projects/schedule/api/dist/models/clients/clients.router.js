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
        application.get('/clients', this.findAll);
        application.get('/clients/:id', [this.validateId, this.findById]);
        application.post('/clients', this.save);
        application.put('/clients/:id', [this.validateId, this.replace]);
        application.patch('/clients/:id', [this.validateId, this.update]);
        application.del('/clients/:id', [this.validateId, this.del]);
    }
}
exports.clientsRouter = new ClientsRouter();
