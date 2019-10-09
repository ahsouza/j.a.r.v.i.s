"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../config/router");
class UsersRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/users', (req, res, next) => {
            res.json({ message: 'Lista de usuários' });
        });
    }
}
exports.usersRouter = new UsersRouter();
