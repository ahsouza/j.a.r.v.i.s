import * as restify from 'restify'
import {ForbiddenError} from 'restify-errors'

export const authorize: (...profiles: string[]) => restify.RequestHandler = (...profiles) => {
  return (req, res, next) => {
    if(req.authenticated !== undefined && req.authenticated.hasAny(...profiles)) {
      console.log('Permitido com sucesso!')
      next()
    } else {
      next(new ForbiddenError('Permissão negada!'))
    }
  }
}