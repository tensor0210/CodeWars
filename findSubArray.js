function maxSubArray(nums) {
	let solution = nums[0];
	for (let i = 1; i < nums.length; i++) {
		nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
		solution = Math.max;
	}
}

function findSubArrayWithSameElement(a, k) {
	//coding and coding..
	let indexArr = a.reduce((arr, e, i) => {
		if (e === k) arr.push(i);
		return arr;
	}, []);
}

arr = [
	2,
	1,
	1,
	1,
	1,
	3,
	3,
	4,
	5,
	1,
	1,
	1,
	1
];
findSubArrayWithSameElement(arr, 1);
