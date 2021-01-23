// function validAnagram(s1, s2) {
// 	if (s1.length !== s2.length) return false;
// 	let f1 = {};
// 	for (let s of s1) {
// 		f1[s] = (f1[s] || 0) + 1;
// 	}
// 	let f2 = {};
// 	for (let s of s2) {
// 		f2[s] = (f2[s] || 0) + 1;
// 	}
// 	for (let key in f1) {
// 		if (!(f1[key] === f2[key])) {
// 			return false;
// 		}
// 	}
// 	return 1;
// }

// function anagrams(word, words) {
// 	let results = [];
// 	for (w of words) {
// 		if (validAnagram(word, w)) results.push(w);
// 	}
// 	return results;
// }
function anagrams(word, words) {
	word = word.split('').sort().join('');
	console.log(word);
	return words.filter(function(v) {
		return word === v.split('').sort().join('');
	});
}
console.log(
	anagrams('abba', [
		'aabb',
		'abcd',
		'bbaa',
		'dada'
	])
);
