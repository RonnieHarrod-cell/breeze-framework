# Copilot Instructions for BreezeJS

- This is a fullstack JS framework using Node.js native http, custom router, middleware, SSR, and a lightweight reactive core.
- Pages are in `/pages`, API routes in `/api`, static files in `/public`.
- The server is in `/src/server/server.js` and uses custom routing and middleware from `/src/server/router.js` and `/src/server/middleware.js`.
- API endpoints are auto-mapped from `/api/*.js` and handled by `/src/server/api-handler.js`.
- SSR and hydration logic are in `/src/server/ssr.js` and `/src/client/runtime.js`.
- The template engine is in `/src/server/template.js`.
- State management is in `/src/client/reactive.js`.
- Bundling is handled by `/src/bundler/rollup.config.js` and `/src/bundler/esbuild.js`.
- File watching and hot reload are in `/src/bundler/watcher.js` and `/src/bundler/hot-reload.js`.
- The CLI is in `/src/cli/index.js`.
- Use `chokidar` for file watching, `rollup` and `esbuild` for bundling.
- Use `npm run dev` to start the dev server with hot reload.
- Use `npm run build` to bundle for production.
- Use `npm start` to run the production server.
- Follow the patterns in the example files for new pages or API routes.
- Keep all new features modular and in the appropriate subdirectory.
