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

  	application.get('/tasks', this.findAll)
  	application.get('/tasks/:id', [ this.validateId, this.findById ])
		application.post('/tasks', this.save)
		application.put('/tasks/:id', [ this.validateId, this.replace ])
		application.patch('/tasks/:id', [ this.validateId, this.update ])
		application.del('/tasks/:id', [ this.validateId, this.del ])

  }
}

export const tasksRouter = new TasksRouter()