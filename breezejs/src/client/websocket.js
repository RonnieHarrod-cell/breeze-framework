
// Hot reload client logic
export function connectHotReload() {
	const ws = new WebSocket('ws://localhost:3001');
	ws.onmessage = (msg) => {
		if (msg.data === 'reload') {
			window.location.reload();
		}
	};
	ws.onopen = () => console.log('Hot reload connected');
	ws.onclose = () => console.log('Hot reload disconnected');
}
