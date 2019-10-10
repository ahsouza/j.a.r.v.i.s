import * as restify from 'restify'
import {Router} from '../../config/router'
import {Task} from './tasks.model'
import {NotFoundError} from 'restify-errors'

class TasksRouter extends Router {

  applyRoutes(application: restify.Server){

  	application.get('/tasks', (req, res, next) =>{
			Task.find()
			  .then(this.render(res, next))
			  .catch(next)
  	})

  	application.get('/tasks/:id', (req, res, next) => {
			Task.findById(req.params.id)
				.then(this.render(res, next))
				.catch(next)
		})
		
		application.post('/tasks', (req, res, next)=> {
			let task = new Task(req.body)
			task.save()
				.then(this.render(res, next))
				.catch(next)
		})

		application.put('/tasks/:id', (req, res, next) => {
			const options = {runValidators: true, overwrite: true}
			Task.update({_id: req.params.id}, req.body, options)
				.exec().then(result => {
					if(result.n) {
						return Task.findById(req.params.id)
					}else {
						throw new NotFoundError('Documento não encontrado')
					}
				}).then(this.render(res, next))
				  .catch(next)
		})

		application.patch('/tasks/:id', (req, res, next)=> {
			const options = {runValidators: true, new: true}
			Task.findByIdAndUpdate(req.params.id, req.body, options)
				.then(this.render(res, next))
				.catch(next)
		})

		application.del('/tasks/:id', (req, res, next) => {
			Task.remove({_id: req.params.id}).exec().then((cmdResult: any) => {
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

export const tasksRouter = new TasksRouter()