import * as restify from 'restify'

export abstract class Router {
  abstract applyRoutes(application: restify.Server)

  render(res: restify.Response, next: restify.Next) {
    return (document) => {
      if(document){
        res.json(document)
      } else {
        res.send(404)
      }

      return next()
    }
  }
}