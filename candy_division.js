/**
 * per the requirement description, 0 should be ruled out as Benny doesn't want to eat ALONE
 *  **/
const candyDivision = async numOfCandy => {
	if (typeof numOfCandy !== "number") {
		console.log("Please input a number and try again.");
		return;
	}

	if (typeof numOfCandy === "number" && !Number.isInteger(numOfCandy)) {
		console.log("Please input an integer and try again.");
		return;
	}

	const result = [];
	for (let i = 1; i < numOfCandy; i++) {
		const totalPeople = i + 1;
		if (numOfCandy % totalPeople === 0) {
			result.push(i);
		}
	}
	console.log(result);

	return result;
};

candyDivision(25);
candyDivision(30);
candyDivision(5.5);
candyDivision("30");
candyDivision([1, 2, 3]);
candyDivision({ a: 1 });
