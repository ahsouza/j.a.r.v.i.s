import * as restify from 'restify'
import * as mongoose from 'mongoose'
import * as corsMiddleware from 'restify-cors-middleware'
import {environment} from '../config/env'
import {Router} from '../config/router' 
import {mergePatchBodyParser} from './merge-patch-parser'
import {handleError} from './error.handler'

export class Server {
  
  application: restify.Server

  initializeDb(): mongoose.MongooseThenable{
    (<any>mongoose).Promise = global.Promise
    return mongoose.connect(environment.db.url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  }

  initRoutes(routers: Router[]): Promise<any>{
    return new Promise((resolve, reject) => {
      try {

        this.application = restify.createServer({
          name: 'api',
          version: '1.0.0'
        })

        const corsOptions: corsMiddleware.Options = {
          preflightMaxAge: 10,
          origins: ['*'],
          exposeHeaders: ['x-custom-header'],
          allowHeaders: ['authorization']
        }
        const cors: corsMiddleware.CorsMiddleware = corsMiddleware(corsOptions)

        this.application.pre(cors.preflight)
        

        // PLUGINS
        this.application.use(cors.actual)
        this.application.use(restify.plugins.bodyParser())
        this.application.use(restify.plugins.queryParser())
        this.application.use(mergePatchBodyParser)

        // ROUTES
        for (let router of routers) {
          router.applyRoutes(this.application)
        }

        this.application.listen(environment.server.port, ()=> {
          resolve(this.application)
        })

        // EVENTS
        this.application.on('restifyError', handleError)



      }catch(error) {
        reject(error)
      }

    })
  }

  bootstrap(routers: Router[] = []): Promise<Server> {
    
    return this.initializeDb().then(() => 
      this.initRoutes(routers).then(() => this))

  }	
}