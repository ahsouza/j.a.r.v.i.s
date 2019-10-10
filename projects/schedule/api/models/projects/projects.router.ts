import * as restify from 'restify'
import {ModelRouter} from '../../config/model-router'
import {Project} from './projects.model'
import {NotFoundError} from 'restify-errors'

class ProjectsRouter extends ModelRouter<Project> {

	constructor(){
		super(Project)
		this.on('beforeRender', document=> {})
	}
	
	protected prepareOne(query: mongoose.DocumentQuery<Project,Project>): mongoose.DocumentQuery<Project,Project> {
		
		return query.populate('client', 'firstName')
								.populate('task')
	}

  applyRoutes(application: restify.Server){

  	application.get('/projects', this.findAll)
  	application.get('/projects/:id', [ this.validateId, this.findById ])
		application.post('/projects', this.save)
		application.put('/projects/:id', [ this.validateId, this.replace ])
		application.patch('/projects/:id', [ this.validateId, this.update ])
		application.del('/projects/:id', [ this.validateId, this.del ])

  }
}

export const projectsRouter = new ProjectsRouter()