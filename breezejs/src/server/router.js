
// Custom routing system
const path = require('path');
const fs = require('fs');

// Loads a page module from /pages
function loadPage(route) {
	let pagePath = route === '/' ? '/index.js' : route + '.js';
	const absPath = path.join(process.cwd(), 'pages', pagePath);
	if (fs.existsSync(absPath)) {
		return require(absPath);
	}
	return null;
}

module.exports = function router(req, res, ssr) {
	const url = req.url.split('?')[0];
	const page = loadPage(url === '/' ? '/' : url);
	if (page) {
		return ssr(req, res, page);
	} else {
		res.statusCode = 404;
		res.end('Page Not Found');
	}
};
