import * as restify from 'restify'
import * as jwt from 'jsonwebtoken'
import {User} from '../users/users.model'
import {NotAuthorizedError} from 'restify-errors'
import {env} from '../config/env'

export const authenticate: restify.RequestHandler = (req, res, next)=> {
  const {email, password} = req.body

  User.findByEmail(email, '+password')
    .then(user => {
      if(user && user.matches(password)) {

        const token = jwt.sign({ sub: user.email, iss: 'api'}, env.security.apiSecret)
        
        res.json({name: user.name, email: user.email, accessToken: token})

        return next(false)

      } else {
        alert('Usuário invalido!')
        return next(new NotAuthorizedError('Invalid Credentials'))
      }
    }).catch(next)

}