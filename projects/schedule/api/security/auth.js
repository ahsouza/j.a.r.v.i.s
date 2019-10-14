import * as restify from 'restify'
import {User} from '../users/users.model'
import {NotAuthorizedError} from 'restify-errors'

export const authenticate: restify.RequestHandler = (req, res, next) => {
  const {email, password} = req.body
  User.findByEmail(email, '+password')
    .then(user => {
      if(user && user.matches(password)) {

      } else {
        alert('Usuário invalido!')
        return next(new NotAuthorizedError('Invalid Credentials'))
      }
    }).catch(next)

}