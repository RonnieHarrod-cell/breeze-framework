
// Rollup config
const path = require('path');
const rollup = require('rollup');

async function build() {
	const bundle = await rollup.rollup({
		input: path.join(process.cwd(), 'src/client/runtime.js'),
		output: {
			file: path.join(process.cwd(), 'public/client.js'),
			format: 'esm',
			sourcemap: true,
		},
	});
	await bundle.write({
		file: path.join(process.cwd(), 'public/client.js'),
		format: 'esm',
		sourcemap: true,
	});
	console.log('Rollup build complete.');
}

if (require.main === module) build();
