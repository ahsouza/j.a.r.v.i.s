"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../config/model-router");
const tasks_model_1 = require("./tasks.model");
class TasksRouter extends model_router_1.ModelRouter {
    constructor() {
        super(tasks_model_1.Task);
        this.on('beforeRender', document => { });
    }
    prepareOne(query) {
        return query.populate('task');
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
exports.tasksRouter = new TasksRouter();
