
// Lightweight reactive core
export function reactive(obj) {
	return new Proxy(obj, {
		set(target, key, value) {
			target[key] = value;
			// In a real system, trigger UI updates here
			console.log('Reactive update:', key, value);
			return true;
		}
	});
}
