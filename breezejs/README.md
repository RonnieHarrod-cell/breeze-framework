
# BreezeJS

BreezeJS is a minimal fullstack JavaScript framework inspired by Next.js, built from scratch using only Node.js native http, custom routing, SSR, and a lightweight reactive core. It is designed for learning, hacking, and rapid prototyping.

## Features

- Native Node.js HTTP server (no Express)
- File-based routing for pages (`/pages`) and API (`/api`)
- Custom middleware chain
- Custom template engine and SSR
- Lightweight client-side hydration and reactivity
- Bundling with Rollup + esbuild
- Hot reload via WebSocket and chokidar
- Custom CLI for dev/build/start

## Getting Started

1. **Install dependencies:**
	 ```bash
	 npm install
	 ```
2. **Development mode (with hot reload):**
	 ```bash
	 npm run dev
	 ```
3. **Production build:**
	 ```bash
	 npm run build
	 ```
4. **Start production server:**
	 ```bash
	 npm start
	 ```

## Project Structure

- `/src/server` — Core server, router, middleware, SSR, template
- `/src/client` — Hydration, reactivity, hot reload client
- `/src/cli` — CLI entry and commands
- `/src/bundler` — Bundler, watcher, hot reload server
- `/api` — API routes (auto-mapped to `/api/*`)
- `/pages` — Page components (SSR, file-based routing)
- `/public` — Static assets (served at `/public/*`)

## Example

- **API route:** `/api/example.js`
	```js
	module.exports = (req, res) => {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ message: 'Hello from BreezeJS API!' }));
	};
	```
- **Page:** `/pages/index.js`
	```js
	module.exports = () => `
		<h1>Hello from BreezeJS!</h1>
		<button id="btn">Click me</button>
		<script type="module">
			import { reactive } from '/public/client.js';
			const state = reactive({ count: 0 });
			document.getElementById('btn').onclick = () => {
				state.count++;
				alert('Clicked ' + state.count + ' times!');
			};
		</script>
	`;
	```

## Development Workflow

- Edit files in `/pages`, `/api`, or `/src/client` and the dev server will rebuild and hot reload automatically.
- Add new pages or API endpoints by creating new `.js` files in `/pages` or `/api`.
- Use the CLI (`npm run dev`, `npm run build`, `npm start`) for all workflows.

## Architecture

- **Server:** Native Node.js HTTP server with custom router and middleware. Handles SSR, API, and static files.
- **Routing:** File-based for both pages and API. Pages are SSR by default.
- **Middleware:** Add custom middleware in `/src/server/middleware.js`.
- **Bundling:** Uses Rollup and esbuild for client code. File watcher (chokidar) triggers rebuilds.
- **Hot Reload:** WebSocket server notifies clients to reload on file changes.
- **Hydration:** Minimal client runtime for hydration and reactivity.

## Contributing

Pull requests and issues are welcome! This project is for learning and experimentation.

## License

MIT
