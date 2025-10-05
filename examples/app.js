const { createApp } = require('../index');
const { staticDir, logger } = require('../lib/middleware');
const path = require('path');

const app = createApp();

app.use(logger());
app.use(staticDir(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Breeze Framework</h1><p>Welcome!</p>');
});

app.get('/hello/:name', (req, res) => {
    res.end(`Hello, ${req.params.name}!`);
});

app.post('/data', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ received: req.body }));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));