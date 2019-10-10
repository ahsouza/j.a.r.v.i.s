"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../../config/router");
const tasks_model_1 = require("./tasks.model");
const restify_errors_1 = require("restify-errors");
class TasksRouter extends router_1.Router {
    constructor() {
        super();
        this.on('beforeRender', document => { });
    }
    applyRoutes(application) {
        application.get('/tasks', (req, res, next) => {
            tasks_model_1.Task.find()
                .then(this.render(res, next))
                .catch(next);
        });
        application.get('/tasks/:id', (req, res, next) => {
            tasks_model_1.Task.findById(req.params.id)
                .then(this.render(res, next))
                .catch(next);
        });
        application.post('/tasks', (req, res, next) => {
            let task = new tasks_model_1.Task(req.body);
            task.save()
                .then(this.render(res, next))
                .catch(next);
        });
        application.put('/tasks/:id', (req, res, next) => {
            const options = { runValidators: true, overwrite: true };
            tasks_model_1.Task.update({ _id: req.params.id }, req.body, options)
                .exec().then(result => {
                if (result.n) {
                    return tasks_model_1.Task.findById(req.params.id);
                }
                else {
                    throw new restify_errors_1.NotFoundError('Documento não encontrado');
                }
            }).then(this.render(res, next))
                .catch(next);
        });
        application.patch('/tasks/:id', (req, res, next) => {
            const options = { runValidators: true, new: true };
            tasks_model_1.Task.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(res, next))
                .catch(next);
        });
        application.del('/tasks/:id', (req, res, next) => {
            tasks_model_1.Task.remove({ _id: req.params.id }).exec().then((cmdResult) => {
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
exports.tasksRouter = new TasksRouter();
