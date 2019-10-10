import * as restify from 'restify'
import {Router} from '../../config/router'
import {Client} from './clients.model'
import {NotFoundError} from 'restify-errors'

class ClientsRouter extends Router {

  applyRoutes(application: restify.Server){

  	application.get('/clients', (req, res, next) =>{
			Client.find()
			  .then(this.render(res, next))
			  .catch(next)
  	})

  	application.get('/clients/:id', (req, res, next) => {
			Client.findById(req.params.id)
				.then(this.render(res, next))
				.catch(next)
		})
		
		application.post('/clients', (req, res, next)=> {
			let client = new Client(req.body)
			client.save()
				.then(this.render(res, next))
				.catch(next)
		})

		application.put('/clients/:id', (req, res, next) => {
			const options = {runValidators: true, overwrite: true}
			Client.update({_id: req.params.id}, req.body, options)
				.exec().then(result => {
					if(result.n) {
						return Client.findById(req.params.id)
					}else {
						throw new NotFoundError('Documento não encontrado')
					}
				}).then(this.render(res, next))
				  .catch(next)
		})

		application.patch('/clients/:id', (req, res, next)=> {
			const options = {runValidators: true, new: true}
			Client.findByIdAndUpdate(req.params.id, req.body, options)
				.then(this.render(res, next))
				.catch(next)
		})

		application.del('/clients/:id', (req, res, next) => {
			Client.remove({_id: req.params.id}).exec().then((cmdResult: any) => {
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

export const clientsRouter = new ClientsRouter()