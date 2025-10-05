
// SSR and hydration logic
const template = require('./template');

module.exports = function ssr(req, res, page) {
	let html = '';
	try {
		html = page();
	} catch (e) {
		res.statusCode = 500;
		return res.end('SSR Error: ' + e.message);
	}
	const fullHtml = template(html);
	res.setHeader('Content-Type', 'text/html');
	res.end(fullHtml);
};
