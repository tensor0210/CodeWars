function solve(a, b) {
	let res = [
		...Array(b + 1).keys()
	]
		.slice(a)
		.reduce((s, k) => s + (!(b % k) && k), 0);
	return res;
}
