import {Server} from './server/server'
import {usersRouter} from './routes/users'

const server = new Server()

server.bootstrap([usersRouter]).then(server => {
    console.log('Server API is listening on:', server.application.address())
  }).catch(error => {
    console.log('Server failed to start')
    console.error(error)
    process.exit(1)
})