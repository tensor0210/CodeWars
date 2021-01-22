function validParentheses(parens) {
	//TODO
	let openBraces = 0;

	for (let i = 0; i < parens.length; i++) {
		if (parens.charAt(i) === '(') openBraces++;
		else openBraces--;
		if (openBraces < 0) return false;
	}
	return openBraces === 0 ? true : false;
}
