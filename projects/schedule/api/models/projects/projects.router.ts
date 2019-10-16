import * as restify from 'restify'
import {ModelRouter} from '../../config/model-router'
import {Project} from './projects.model'
import {NotFoundError} from 'restify-errors'
import {authenticate} from '../../security/auth'
import {authorize} from '../../security/authy'

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

  	application.get(`${this.basePath}`, [authorize('admin', 'user'), this.findAll])
  	application.get(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.findById ])
		application.post(`${this.basePath}`, [authorize('admin'), this.save])
		application.put(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.replace ])
		application.patch(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.update ])
		application.del(`${this.basePath}/:id`, [authorize('admin'), this.validateId, this.del ])

  }
}

export const projectsRouter = new ProjectsRouter()