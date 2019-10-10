"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../config/model-router");
const tasks_model_1 = require("./tasks.model");
class TasksRouter extends model_router_1.ModelRouter {
    constructor() {
        super(tasks_model_1.Task);
        this.on('beforeRender', document => { });
    }
    applyRoutes(application) {
        application.get('/tasks', this.findAll);
        application.get('/tasks/:id', [this.validateId, this.findById]);
        application.post('/tasks', this.save);
        application.put('/tasks/:id', [this.validateId, this.replace]);
        application.patch('/tasks/:id', [this.validateId, this.update]);
        application.del('/tasks/:id', [this.validateId, this.del]);
    }
}
exports.tasksRouter = new TasksRouter();
