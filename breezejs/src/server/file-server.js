
// Static file serving logic
const path = require('path');
const fs = require('fs');

const mimeTypes = {
	'.js': 'application/javascript',
	'.css': 'text/css',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.svg': 'image/svg+xml',
	'.ico': 'image/x-icon',
	'.html': 'text/html',
};

module.exports = function fileServer(req, res) {
	let filePath = req.url.startsWith('/public/')
		? path.join(process.cwd(), req.url)
		: path.join(process.cwd(), 'public', req.url);
	if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
		res.statusCode = 404;
		return res.end('Not Found');
	}
	const ext = path.extname(filePath);
	res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
	fs.createReadStream(filePath).pipe(res);
};
