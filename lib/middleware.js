const fs = require('fs');
const path = require('path');
const mime = require('./utils').mime;

function staticDir(baseDir) {
    return (req, res, next) => {
        const filePath = path.join(baseDir, req.url);
        if (!filePath.startsWith(baseDir)) return next();

        fs.stat(filePath, (err, stat) => {
            if (err || !stat.isFile()) return next();
            res.setHeader('Content-Type', mime(filePath));
            fs.createReadStream(filePath).pipe(res);
        });
    };
}

function logger() {
    return (req, res, next) => {
        console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
        next();
    };
}

module.exports = { staticDir, logger };