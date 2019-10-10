"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../../config/router");
const clients_model_1 = require("./clients.model");
const restify_errors_1 = require("restify-errors");
class ClientsRouter extends router_1.Router {
    constructor() {
        super();
        this.on('beforeRender', document => { });
    }
    applyRoutes(application) {
        application.get('/clients', (req, res, next) => {
            clients_model_1.Client.find()
                .then(this.render(res, next))
                .catch(next);
        });
        application.get('/clients/:id', (req, res, next) => {
            clients_model_1.Client.findById(req.params.id)
                .then(this.render(res, next))
                .catch(next);
        });
        application.post('/clients', (req, res, next) => {
            let client = new clients_model_1.Client(req.body);
            client.save()
                .then(this.render(res, next))
                .catch(next);
        });
        application.put('/clients/:id', (req, res, next) => {
            const options = { runValidators: true, overwrite: true };
            clients_model_1.Client.update({ _id: req.params.id }, req.body, options)
                .exec().then(result => {
                if (result.n) {
                    return clients_model_1.Client.findById(req.params.id);
                }
                else {
                    throw new restify_errors_1.NotFoundError('Documento não encontrado');
                }
            }).then(this.render(res, next))
                .catch(next);
        });
        application.patch('/clients/:id', (req, res, next) => {
            const options = { runValidators: true, new: true };
            clients_model_1.Client.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(res, next))
                .catch(next);
        });
        application.del('/clients/:id', (req, res, next) => {
            clients_model_1.Client.remove({ _id: req.params.id }).exec().then((cmdResult) => {
                if (cmdResult.result.n) {
                    res.send(204);
                    return next();
                }
                else {
                    throw new restify_errors_1.NotFoundError('Documento não encontrado');
                }
                return next();
            }).catch(next);
        });
    }
}
exports.clientsRouter = new ClientsRouter();
