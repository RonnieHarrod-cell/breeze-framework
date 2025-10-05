
// Native HTTP server entry point
// Handles routing, middleware, API, SSR, static files
const http = require('http');
const path = require('path');
const fs = require('fs');
const router = require('./router');
const middleware = require('./middleware');
const apiHandler = require('./api-handler');
const fileServer = require('./file-server');
const ssr = require('./ssr');

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
	// Middleware chain
	await middleware(req, res);

	// API routes
	if (req.url.startsWith('/api/')) {
		return apiHandler(req, res);
	}

	// Static files
	if (req.url.startsWith('/public/') || req.url.match(/\.(js|css|png|jpg|svg|ico)$/)) {
		return fileServer(req, res);
	}

	// Page routes (SSR)
	return router(req, res, ssr);
});

server.listen(PORT, () => {
	console.log(`BreezeJS server running at http://localhost:${PORT}`);
});
