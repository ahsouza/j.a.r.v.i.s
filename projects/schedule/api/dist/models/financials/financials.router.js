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
        application.get('/financials', this.findAll);
        application.get('/financials/:id', [this.validateId, this.findById]);
        application.post('/financials', this.save);
        application.put('/financials/:id', [this.validateId, this.replace]);
        application.patch('/financials/:id', [this.validateId, this.update]);
        application.del('/financials/:id', [this.validateId, this.del]);
    }
}
exports.financialsRouter = new FinancialsRouter();
