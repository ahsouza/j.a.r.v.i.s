import * as restify from 'restify'
import {ModelRouter} from '../../config/model-router'
import {Task} from './tasks.model'
import {NotFoundError} from 'restify-errors'
import {authenticate} from '../../security/auth'
import {authorize} from '../../security/authy'

class TasksRouter extends ModelRouter<Task> {

	constructor(){
		super(Task)
		this.on('beforeRender', document=> {})
	}

	protected prepareOne(query: mongoose.DocumentQuery<Task,Task>): mongoose.DocumentQuery<Task,Task> {
		
		return query.populate('task')
	}


  applyRoutes(application: restify.Server){

  	application.get(`${this.basePath}`, [authorize('admin'), this.findAll])
  	application.get(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.findById ])
		application.post(`${this.basePath}`, [authorize('admin'), this.save])
		application.put(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.replace ])
		application.patch(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.update ])
		application.del(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.del ])

  }
}

export const tasksRouter = new TasksRouter()