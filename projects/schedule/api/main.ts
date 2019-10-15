import {Server} from './server/server'
import {usersRouter} from './users/users.router'
import {clientsRouter} from './models/clients/clients.router'
import {financialsRouter} from './models/financials/financials.router'
import {projectsRouter} from './models/projects/projects.router'
import {tasksRouter} from './models/tasks/tasks.router'

const server = new Server()

server.bootstrap([usersRouter, clientsRouter, financialsRouter, projectsRouter, tasksRouter])
  .then(server => {
      console.log('Server API is listening on:', server.application.address())
    })
    .catch(error => {
      console.log('Server failed to start')
      console.error(error)
      process.exit(1)
    })