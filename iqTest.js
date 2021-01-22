function getMinOddEven(numbers) {
	let even = 0;
	let odd = 0;
	for (i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			even += 1;
		} else {
			odd += 1;
		}
	}
	return odd < even ? 1 : 0;
}

function iqTest(numbers) {
	// ...
	let arrNumbers = numbers.split(' ').map(Number);
	let minority = getMinOddEven(arrNumbers);
	for (let i = 0; i < arrNumbers.length; i++) {
		if (arrNumbers[i] % 2 === minority) {
			return arrNumbers.indexOf(arrNumbers[i]) + 1;
		}
	}
}

console.log(iqTest('1 2 2'));
