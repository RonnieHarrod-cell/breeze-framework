
// Middleware chain handler
// Add custom middleware functions to this array
const middlewares = [];

module.exports = async function middleware(req, res) {
	for (const fn of middlewares) {
		await fn(req, res);
		if (res.writableEnded) break;
	}
};

// To add middleware: require this file and push to middlewares array
module.exports.middlewares = middlewares;
