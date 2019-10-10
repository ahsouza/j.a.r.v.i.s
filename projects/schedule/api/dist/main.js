"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_router_1 = require("./users/users.router");
const clients_router_1 = require("./models/clients/clients.router");
const financials_router_1 = require("./models/financials/financials.router");
const projects_router_1 = require("./models/projects/projects.router");
const tasks_router_1 = require("./models/tasks/tasks.router");
const server = new server_1.Server();
server.bootstrap([users_router_1.usersRouter, clients_router_1.clientsRouter, financials_router_1.financialsRouter, projects_router_1.projectsRouter, tasks_router_1.tasksRouter]).then(server => {
    console.log('Server API is listening on:', server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
