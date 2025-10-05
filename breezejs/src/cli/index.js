
// CLI entry point
const { spawn } = require('child_process');
const path = require('path');

const cmd = process.argv[2];

if (cmd === 'dev') {
	// Start dev server with watcher and hot reload
	require('../bundler/watcher');
	require('../bundler/hot-reload');
	require('../server/server');
} else if (cmd === 'build') {
	// Run Rollup and esbuild for production build
	require('../bundler/rollup.config');
	require('../bundler/esbuild');
	console.log('Build complete.');
} else if (cmd === 'start') {
	// Start production server
	require('../server/server');
} else {
	console.log('Usage: npm run dev | build | start');
}
