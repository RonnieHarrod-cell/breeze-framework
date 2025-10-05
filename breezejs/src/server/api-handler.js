
// Handles /api/*.js endpoints
const path = require('path');
const fs = require('fs');

module.exports = function apiHandler(req, res) {
	const url = req.url.replace(/^\/api\//, '');
	const apiPath = path.join(process.cwd(), 'api', url.split('?')[0] + '.js');
	if (fs.existsSync(apiPath)) {
		const handler = require(apiPath);
		return handler(req, res);
	} else {
		res.statusCode = 404;
		res.end('API Not Found');
	}
};
