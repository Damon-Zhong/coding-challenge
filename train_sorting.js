const train_sort = (n, trains) => {
	if (n === 0) {
		return 0;
	}
	let result = 0;
	let output = [trains[0]];
	for (let i = 1; i < n; i++) {
		const weight = trains[i];
		const heaviest = output[0];
		const lightest = output[output.length - 1];
		if (weight > heaviest) {
			output = [weight, ...output];
		} else if (weight < lightest) {
			output = [...output, weight];
		}

		result = output.length;
	}
	console.log("Solution:", output);
	return result;
};

console.log(train_sort(5, [10, 2, 12, 20, 3]));
console.log(train_sort(3, [1, 2, 3]));
