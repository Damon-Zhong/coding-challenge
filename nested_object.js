const incInt = num => num + 1;

const concatStr = string => `${string} AI`;

const transformArray = arr => {
	return arr.map(val => {
		if (typeof val === "number" && Number.isInteger(val)) {
			return incInt(val);
		} else if (typeof val === "string") {
			return `${val} AI`;
		} else if (typeof val === "object" && Array.isArray(val)) {
			return transformArray(val);
		} else if (typeof val === "object" && !Array.isArray(val)) {
			return transformValue(val);
		} else {
			return val;
		}
	});
};

const transformValue = obj => {
	const result = { ...obj };

	Object.entries(obj).forEach(entry => {
		const key = entry[0];
		const val = entry[1];

		if (typeof val === "number" && Number.isInteger(val)) {
			result[key] = incInt(val);
		} else if (typeof val === "string") {
			result[key] = concatStr(val);
		} else if (typeof val === "object" && Array.isArray(val)) {
			result[key] = transformArray(val);
		} else if (typeof val === "object") {
			result[key] = transformValue(val);
		}
	});
	return result;
};
const output1 = transformValue({
	a: 123,
	b: "hero",
	c: [1, 2, 3],
	d: {
		e: 3,
		f: ["abc", "def"],
	},
});
const output2 = transformValue({
	a: 124,
	b: "hero",
	c: [2, 3, 4],
	d: {
		e: 4,
		f: ["abc", "def", { aa: 1, ab: "abc", ac: 1.5 }],
	},
});
console.log(output1);
console.log(output2);
console.log(output2.d.f[2].aa);
console.log(output2.d.f[2].ac);
