import * as restify from 'restify'
import {ModelRouter} from '../../config/model-router'
import {Client} from './clients.model'
import {NotFoundError} from 'restify-errors'

class ClientsRouter extends ModelRouter<Client> {

	constructor(){
		super(Client)
		this.on('beforeRender', document=> {
			document.password = undefined
		})
	}

  applyRoutes(application: restify.Server){

  	application.get('/clients', this.findAll)
  	application.get('/clients/:id', [ this.validateId, this.findById ])
		application.post('/clients', this.save)
		application.put('/clients/:id', [ this.validateId, this.replace ])
		application.patch('/clients/:id', [ this.validateId, this.update ])
		application.del('/clients/:id', [ this.validateId, this.del ])

  }
}

export const clientsRouter = new ClientsRouter()