import * as restify from 'restify'
import * as mongoose from 'mongoose'
import {environment} from '../config/env'
import {Router} from '../config/router' 
import {mergePatchBodyParser} from './merge-patch-parser'


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
        // PLUGINS
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