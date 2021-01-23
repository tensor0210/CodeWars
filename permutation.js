function permutations(string) {
	let result = [];
	for (let i = 0; i < integers.length; i++) {
		let char = string[i];
		let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

		for (let permutation of findPermutations(remainingChars)) {
			result.push(char + permutation);
		}
	}
	return result;
}
