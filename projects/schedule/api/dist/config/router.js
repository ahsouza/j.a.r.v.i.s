"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Router {
    render(res, next) {
        return (document) => {
            if (document) {
                res.json(document);
            }
            else {
                res.send(404);
            }
            return next();
        };
    }
}
exports.Router = Router;
