function validAnagram(s1, s2) {
	if (s1.length !== s2.length) return false;
	let f1 = {};
	for (let s of s1) {
		f1[s] = (f1[s] || 0) + 1;
	}
	let f2 = {};
	for (let s of s2) {
		f2[s] = (f2[s] || 0) + 1;
	}
	for (let key in f1) {
		if (!(f1[key] === f2[key])) {
			return false;
		}
	}
	return true;
}
