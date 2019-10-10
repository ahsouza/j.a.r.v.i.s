"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../config/model-router");
const projects_model_1 = require("./projects.model");
class ProjectsRouter extends model_router_1.ModelRouter {
    constructor() {
        super(projects_model_1.Project);
        this.on('beforeRender', document => { });
    }
    prepareOne(query) {
        return query.populate('client', 'firstName')
            .populate('task');
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
exports.projectsRouter = new ProjectsRouter();
