import * as restify from 'restify'
import {ModelRouter} from '../config/model-router'
import {User} from './users.model'
import {authenticate} from '../security/auth'
import {authorize} from '../security/authy'
import {NotFoundError} from 'restify-errors'


class UsersRouter extends ModelRouter<User> {

	constructor(){
		super(User)
		this.on('beforeRender', document=> {
			document.password = undefined
		})
	}

	findByEmail = (req, resp, next)=>{
    if(req.query.email){
      User.findByEmail(req.query.email)
		  .then(user => user ? [user] : [])
          .then(this.renderAll(resp, next, {
                pageSize: this.pageSize,
                url: req.url
              }))
          .catch(next)
    }else{
      next()
    }
	}
	
  applyRoutes(application: restify.Server){

		application.post(`${this.basePath}/auth`, authenticate)
		application.get(`${this.basePath}`, [authorize('admin'), this.findAll])
  	application.get(`${this.basePath}/:id`, [this.validateId, this.findById ])
		application.post(`${this.basePath}`, this.save)
		application.put(`${this.basePath}/:id`, [ this.validateId, this.replace ])
		application.patch(`${this.basePath}/:id`, [ this.validateId, this.update ])
		application.del(`${this.basePath}/:id`, [ this.validateId, this.del ])
		
  }
}

export const usersRouter = new UsersRouter()