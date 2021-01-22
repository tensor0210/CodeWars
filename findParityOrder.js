function checkEvenOrOddMajority(integers) {
	let even = 0;
	let odd = 0;
	for (let i = 0; i < integers.length; i++) {
		if (integers[i] % 2 == 0) even++;
		else odd++;
	}
	return even > odd ? 1 : 0;
}

function findOutlier(integers) {
	//your code here
	let condition = checkEvenOrOddMajority(integers);
	if (condition) {
		for (let i = 0; i < integers.length; i++) {
			if (integers[i] % 2 !== 0) return integers[i];
		}
	} else {
		for (let i = 0; i < integers.length; i++) {
			if (integers[i] % 2 === 0) return integers[i];
		}
	}
}
