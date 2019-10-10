import * as restify from 'restify'
import {ModelRouter} from '../../config/model-router'
import {Financial} from './financials.model'
import {NotFoundError} from 'restify-errors'

class FinancialsRouter extends ModelRouter<Financial> {

	constructor(){
		super(Financial)
		this.on('beforeRender', document=> {})
	}

  applyRoutes(application: restify.Server){

  	application.get(`${this.basePath}`, this.findAll)
  	application.get(`${this.basePath}/:id`, [ this.validateId, this.findById ])
		application.post(`${this.basePath}`, this.save)
		application.put(`${this.basePath}/:id`, [ this.validateId, this.replace ])
		application.patch(`${this.basePath}/:id`, [ this.validateId, this.update ])
		application.del(`${this.basePath}/:id`, [ this.validateId, this.del ])

  }
}

export const financialsRouter = new FinancialsRouter()