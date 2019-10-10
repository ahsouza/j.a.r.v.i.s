import * as restify from 'restify'
import {ModelRouter} from '../../config/model-router'
import {Task} from './tasks.model'
import {NotFoundError} from 'restify-errors'

class TasksRouter extends ModelRouter<Task> {

	constructor(){
		super(Task)
		this.on('beforeRender', document=> {})
	}

	protected prepareOne(query: mongoose.DocumentQuery<Task,Task>): mongoose.DocumentQuery<Task,Task> {
		
		return query.populate('task')
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

export const tasksRouter = new TasksRouter()