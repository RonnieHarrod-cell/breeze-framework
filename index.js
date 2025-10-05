const http = require("http");
const { Router } = require('./lib/router');
const { parseBody, finalError, notFound } = require("./lib/utils");

function createApp() {
    const router = new Router();
    const middlewares = [];

    const app = (req, res) => {
        parseBody(req, () => {
            let i = 0;
            const next = (err) => {
                if (err) return finalError(err, res);
                if (i < middlewares.length) {
                    const mw = middlewares[i++];
                    return mw(req, res, next);
                }
                router.handle(req, res, notFound);
            };
            next();
        });
    };

    app.use = (fn) => middlewares.push(fn);
    app.get = (path, handler) => router.register('GET', path, handler);
    app.post = (path, handler) => router.register('POST', path, handler);
    app.put = (path, handler) => router.register('PUT', path, handler);
    app.delete = (path, handler) => router.register('DELETE', path, handler);

    app.listen = (port, cb) => {
        const server = http.createServer(app);
        server.listen(port, cb);
        return server;
    };

    return app;
}

module.exports = { createApp };