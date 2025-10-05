
// Example API route
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    message: 'Hello from BreezeJS API!',
    time: new Date().toISOString()
  }));
};
