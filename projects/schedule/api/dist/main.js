"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_1 = require("./routes/users");
const server = new server_1.Server();
server.bootstrap([users_1.usersRouter]).then(server => {
    console.log('Server API is listening on:', server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
