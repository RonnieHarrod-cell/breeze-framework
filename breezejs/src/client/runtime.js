
// Client-side hydration logic
import { reactive } from './reactive.js';
import { connectHotReload } from './websocket.js';

// Hydrate app (placeholder for real hydration logic)
window.hydrate = function hydrateApp() {
	// Example: attach event listeners, reactivity, etc.
	// In a real app, you would walk the DOM and bind events/state
	console.log('Hydration complete');
};

// Connect to hot reload server in dev
if (location.hostname === 'localhost') {
	connectHotReload();
}

window.hydrate();
