function toCamelCase(str) {
	if (str == '') {
		return '';
	}
	let newstr = str
		.replace(/-/g, ' ')
		.replace(/_/g, ' ')
		.split(' ')
		.map((s) => s.charAt(0).toUpperCase() + s.substr(1))
		.join('');
	if (str[0] !== newstr[0]) {
		newstr = newstr[0].toLowerCase() + newstr.substr(1);
	}
	return newstr;
}
console.log(toCamelCase('the_stealth_warrior'));
