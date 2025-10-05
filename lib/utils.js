const path = require("path");

function parseBody(req, cb) {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
        const raw = Buffer.concat(chunks).toString();
        req.body = {};
        const ct = req.headers['content-type'] || '';
        if (ct.includes('application/json')) {
            try {
                req.body = JSON.parse(raw || '{}');
            } catch {
                req.body = {};
            }
        }
        cb();
    });
}

function mime(filePath) {
    const ext = path.extname(filePath);
    const map = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.json': 'application/json'
    };
    return map[ext] || 'application/octet-stream';
}

function notFound(res) {
    res.statusCode = 404;
    res.end('404 Not Found');
}

function finalError(err, res) {
    res.statusCode = err.status || 500;
    res.end(err.message || 'Internal Server Error');
}

module.exports = { parseBody, mime, notFound, finalError };