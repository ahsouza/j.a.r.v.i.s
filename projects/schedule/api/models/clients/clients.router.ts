import * as restify from 'restify'
import {ModelRouter} from '../../config/model-router'
import {Client} from './clients.model'

class ClientsRouter extends ModelRouter<Client> {

	constructor(){
		super(Client)
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

export const clientsRouter = new ClientsRouter()