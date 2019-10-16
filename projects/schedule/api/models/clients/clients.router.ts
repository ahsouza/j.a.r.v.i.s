import * as restify from 'restify'
import {ModelRouter} from '../../config/model-router'
import {Client} from './clients.model'
import {authenticate} from '../../security/auth'
import {authorize} from '../../security/authy'

class ClientsRouter extends ModelRouter<Client> {

	constructor(){
		super(Client)
	}

  applyRoutes(application: restify.Server){

  	application.get(`${this.basePath}`, [authorize('user', 'admin'),this.findAll])
  	application.get(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.findById ])
		application.post(`${this.basePath}`, [authorize('admin'), this.save])
		application.put(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.replace ])
		application.patch(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.update ])
		application.del(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.del ])

  }
}

export const clientsRouter = new ClientsRouter()