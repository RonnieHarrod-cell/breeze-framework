
// Chokidar file watcher
const chokidar = require('chokidar');
const { exec } = require('child_process');

const watcher = chokidar.watch(['src/client', 'pages', 'api'], {
	ignoreInitial: true,
});

watcher.on('all', (event, path) => {
	console.log(`[watcher] ${event}: ${path}`);
	exec('node src/bundler/rollup.config.js', (err, stdout, stderr) => {
		if (err) console.error(stderr);
		else console.log(stdout);
	});
});
