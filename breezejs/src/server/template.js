
// Custom template engine
module.exports = function template(body) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>BreezeJS App</title>
	<script type="module" src="/public/client.js"></script>
</head>
<body>
	<div id="app">${body}</div>
</body>
</html>`;
};
