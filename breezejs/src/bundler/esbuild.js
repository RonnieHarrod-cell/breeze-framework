
// esbuild integration
const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
	entryPoints: [path.join(process.cwd(), 'src/client/runtime.js')],
	bundle: true,
	outfile: path.join(process.cwd(), 'public/client.js'),
	minify: true,
	sourcemap: true,
	format: 'esm',
}).then(() => {
	console.log('esbuild build complete.');
}).catch((e) => {
	console.error('esbuild error:', e);
});
