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

  	application.get('/financials', this.findAll)
  	application.get('/financials/:id', [ this.validateId, this.findById ])
		application.post('/financials', this.save)
		application.put('/financials/:id', [ this.validateId, this.replace ])
		application.patch('/financials/:id', [ this.validateId, this.update ])
		application.del('/financials/:id', [ this.validateId, this.del ])

  }
}

export const financialsRouter = new FinancialsRouter()