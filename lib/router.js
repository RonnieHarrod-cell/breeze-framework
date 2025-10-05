const url = require('url');

class Router {
    constructor() {
        this.routes = [];
    }

    register(method, path, handler) {
        const keys = [];
        const regex = this.pathToRegex(path, keys);
        this.routes.push({ method, path, regex, keys, handler });
    }

    handle(req, res, notFound) {
        const parsed = url.parse(req.url, true);
        for (const route of this.routes) {
            if (req.method == route.method) {
                const match = parsed.pathname.match(route.regex);
                if (match) {
                    req.params = {};
                    route.keys.forEach((k, i) => (req.params[k] = match[i + 1]));
                    return route.handler(req, res);
                }
            }
        }
        notFound(res);
    }

    pathToRegex(path, keys) {
        const parts = path.replace(/\//g, '\\/').replace(/:(\w+)/g, (_, key) => {
            keys.push(key);
            return '([^/]+)';
        });
        return new RegExp(`^${parts}$`);
    }
}

module.exports = { Router };