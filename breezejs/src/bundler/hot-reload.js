
// WebSocket hot reload server
const http = require('http');
const WebSocket = require('ws');
const chokidar = require('chokidar');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
	console.log('Hot reload client connected');
});

chokidar.watch(['src/client', 'pages', 'api']).on('change', () => {
	wss.clients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN) {
			client.send('reload');
		}
	});
});

server.listen(3001, () => {
	console.log('Hot reload WebSocket server running on ws://localhost:3001');
});
