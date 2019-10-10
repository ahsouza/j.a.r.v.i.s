"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../../config/router");
const projects_model_1 = require("./projects.model");
const restify_errors_1 = require("restify-errors");
class ProjectsRouter extends router_1.Router {
    constructor() {
        super();
        this.on('beforeRender', document => { });
    }
    applyRoutes(application) {
        application.get('/projects', (req, res, next) => {
            projects_model_1.Project.find()
                .then(this.render(res, next))
                .catch(next);
        });
        application.get('/projects/:id', (req, res, next) => {
            projects_model_1.Project.findById(req.params.id)
                .then(this.render(res, next))
                .catch(next);
        });
        application.post('/projects', (req, res, next) => {
            let project = new projects_model_1.Project(req.body);
            project.save()
                .then(this.render(res, next))
                .catch(next);
        });
        application.put('/projects/:id', (req, res, next) => {
            const options = { runValidators: true, overwrite: true };
            projects_model_1.Project.update({ _id: req.params.id }, req.body, options)
                .exec().then(result => {
                if (result.n) {
                    return projects_model_1.Project.findById(req.params.id);
                }
                else {
                    throw new restify_errors_1.NotFoundError('Documento não encontrado');
                }
            }).then(this.render(res, next))
                .catch(next);
        });
        application.patch('/projects/:id', (req, res, next) => {
            const options = { runValidators: true, new: true };
            projects_model_1.Project.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(res, next))
                .catch(next);
        });
        application.del('/projects/:id', (req, res, next) => {
            projects_model_1.Project.remove({ _id: req.params.id }).exec().then((cmdResult) => {
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
exports.projectsRouter = new ProjectsRouter();
