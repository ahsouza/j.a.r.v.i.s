"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../config/model-router");
const projects_model_1 = require("./projects.model");
class ProjectsRouter extends model_router_1.ModelRouter {
    constructor() {
        super(projects_model_1.Project);
        this.on('beforeRender', document => { });
    }
    applyRoutes(application) {
        application.get('/projects', this.findAll);
        application.get('/projects/:id', [this.validateId, this.findById]);
        application.post('/projects', this.save);
        application.put('/projects/:id', [this.validateId, this.replace]);
        application.patch('/projects/:id', [this.validateId, this.update]);
        application.del('/projects/:id', [this.validateId, this.del]);
    }
}
exports.projectsRouter = new ProjectsRouter();
