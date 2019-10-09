import * as restify from 'restify'
import {Router} from '../config/router'

class UsersRouter extends Router {
  applyRoutes(application: restify.Server){

  	application.get('/users', (req, res, next) =>{
  	  res.json({message: 'Lista de usuários'})
  	})

  }
}

export const usersRouter = new UsersRouter()