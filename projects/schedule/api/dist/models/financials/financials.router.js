"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../../config/router");
const financials_model_1 = require("./financials.model");
const restify_errors_1 = require("restify-errors");
class FinancialsRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/financials', (req, res, next) => {
            financials_model_1.Financial.find()
                .then(this.render(res, next))
                .catch(next);
        });
        application.get('/financials/:id', (req, res, next) => {
            financials_model_1.Financial.findById(req.params.id)
                .then(this.render(res, next))
                .catch(next);
        });
        application.post('/financials', (req, res, next) => {
            let financial = new financials_model_1.Financial(req.body);
            financial.save()
                .then(this.render(res, next))
                .catch(next);
        });
        application.put('/users/:id', (req, res, next) => {
            const options = { runValidators: true, overwrite: true };
            financials_model_1.Financial.update({ _id: req.params.id }, req.body, options)
                .exec().then(result => {
                if (result.n) {
                    return financials_model_1.Financial.findById(req.params.id);
                }
                else {
                    throw new restify_errors_1.NotFoundError('Documento não encontrado');
                }
            }).then(this.render(res, next))
                .catch(next);
        });
        application.patch('/users/:id', (req, res, next) => {
            const options = { runValidators: true, new: true };
            financials_model_1.Financial.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(res, next))
                .catch(next);
        });
        application.del('/users/:id', (req, res, next) => {
            financials_model_1.Financial.remove({ _id: req.params.id }).exec().then((cmdResult) => {
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
exports.financialsRouter = new FinancialsRouter();
