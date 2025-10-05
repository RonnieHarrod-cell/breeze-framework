
// Example page
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
