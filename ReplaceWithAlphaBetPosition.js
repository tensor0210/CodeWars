// a ->97
//z ->122
function getBetween25(c) {
	c = c.toLowerCase().charCodeAt(0);
	if (c >= 97 && c <= 122) {
		return Math.abs(c - 97) + 1;
	}
	return;
}

function alphabetPosition(text) {
	let newtext = '';
	for (i = 0; i < text.length; i++) {
		if (getBetween25(text[i]) === undefined) continue;
		newtext += getBetween25(text[i]);
		newtext += ' ';
	}
	return newtext.slice(0, newtext.length - 1);
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
