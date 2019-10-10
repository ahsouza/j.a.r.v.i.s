import * as restify from 'restify'
import {Router} from '../../config/router'
import {Financial} from './financials.model'
import {NotFoundError} from 'restify-errors'

class FinancialsRouter extends Router {

  constructor(){
		super()
		this.on('beforeRender', document=> {})
	}

  applyRoutes(application: restify.Server){

  	application.get('/financials', (req, res, next) =>{
			Financial.find()
			  .then(this.render(res, next))
			  .catch(next)
  	})

  	application.get('/financials/:id', (req, res, next) => {
			Financial.findById(req.params.id)
				.then(this.render(res, next))
				.catch(next)
		})
		
		application.post('/financials', (req, res, next)=> {
			let financial = new Financial(req.body)
			financial.save()
				.then(this.render(res, next))
				.catch(next)
		})

		application.put('/financials/:id', (req, res, next) => {
			const options = {runValidators: true, overwrite: true}
			Financial.update({_id: req.params.id}, req.body, options)
				.exec().then(result => {
					if(result.n) {
						return Financial.findById(req.params.id)
					}else {
						throw new NotFoundError('Documento não encontrado')
					}
				}).then(this.render(res, next))
				  .catch(next)
		})

		application.patch('/financials/:id', (req, res, next)=> {
			const options = {runValidators: true, new: true}
			Financial.findByIdAndUpdate(req.params.id, req.body, options)
				.then(this.render(res, next))
				.catch(next)
		})

		application.del('/financials/:id', (req, res, next) => {
			Financial.remove({_id: req.params.id}).exec().then((cmdResult: any) => {
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

export const financialsRouter = new FinancialsRouter()