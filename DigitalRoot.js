function digital_root(n) {
	let sum = n;
	while (sum >= 10) {
		let tempsum = sum.toString().split('').map(Number).reduce(function(a, b) {
			return a + b;
		}, 0);

		sum = tempsum;
	}

	return sum;
}

console.log(digital_root(10));
