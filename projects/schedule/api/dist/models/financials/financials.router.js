"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../config/model-router");
const financials_model_1 = require("./financials.model");
class FinancialsRouter extends model_router_1.ModelRouter {
    constructor() {
        super(financials_model_1.Financial);
        this.on('beforeRender', document => { });
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
exports.financialsRouter = new FinancialsRouter();
