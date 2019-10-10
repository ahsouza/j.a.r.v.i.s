import * as restify from 'restify'
import {Router} from '../../config/router'
import {Project} from './projects.model'
import {NotFoundError} from 'restify-errors'

class ProjectsRouter extends Router {

  applyRoutes(application: restify.Server){

  	application.get('/projects', (req, res, next) =>{
			Project.find()
			  .then(this.render(res, next))
			  .catch(next)
  	})

  	application.get('/projects/:id', (req, res, next) => {
			Project.findById(req.params.id)
				.then(this.render(res, next))
				.catch(next)
		})
		
		application.post('/projects', (req, res, next)=> {
			let project = new Project(req.body)
			project.save()
				.then(this.render(res, next))
				.catch(next)
		})

		application.put('/projects/:id', (req, res, next) => {
			const options = {runValidators: true, overwrite: true}
			Project.update({_id: req.params.id}, req.body, options)
				.exec().then(result => {
					if(result.n) {
						return Project.findById(req.params.id)
					}else {
						throw new NotFoundError('Documento não encontrado')
					}
				}).then(this.render(res, next))
				  .catch(next)
		})

		application.patch('/projects/:id', (req, res, next)=> {
			const options = {runValidators: true, new: true}
			Project.findByIdAndUpdate(req.params.id, req.body, options)
				.then(this.render(res, next))
				.catch(next)
		})

		application.del('/projects/:id', (req, res, next) => {
			Project.remove({_id: req.params.id}).exec().then((cmdResult: any) => {
				if(cmdResult.result.n) {
					res.send(204)

					return next()
				} else {
					throw new NotFoundError('Documento não encontrado')
				}

				return next()
			}).catch(next)
		})

  }
}

export const projectsRouter = new ProjectsRouter()