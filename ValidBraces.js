function validBraces(parens) {
	//TODO
	let bracket = {
		'(' : ')',
		'[' : ']',
		'{' : '}'
	};
	let heap = [];
	for (let char of parens) {
		if (bracket[char]) {
			heap.push(bracket[char]);
		} else {
			if (heap.pop() !== char) {
				return false;
			}
		}
	}
	return !heap.length;
}
