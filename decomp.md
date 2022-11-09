## Decomp ReactJS

### Description

In this section of the assessment, we will provide you with some code snippets and ask you to answer some questions about the code.

Please keep your answers to a reasonable length. You may answer directly in this markdown file.

### Q1. ReactJS Hooks

Please take a look at this ReactJS code and correct the mistakes that you find. You may edit the code in this markdown file directly.

```javascript
import React, {useState} from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <p>Current count: {count}</p>
    <button onClick={() => setCount(count => count + 1)}>Increment count</button>
  );
}
```

### Q2. Events

Explain the difference between these 4 ways of passing a function to a component. </br>
What will happen when you click each of these buttons and why?

```javascript
class App extends React.Component {
	constructor() {
		super();
		this.name = "MyComponent";

		this.handleClick2 = this.handleClick1.bind(this);
	}

	handleClick1() {
		alert(this.name);
	}

	handleClick3 = () => alert(this.name);

	render() {
		return (
			<div>
				<button onClick={this.handleClick1()}>click 1</button>
				<button onClick={this.handleClick1}>click 2</button>
				<button onClick={this.handleClick2}>click 3</button>
				<button onClick={this.handleClick3}>click 4</button>
			</div>
		);
	}
}
```

## Answer:

# when the component did mount, there will be an alert which is triggered by the first button onClock attribute because that's a function call which executes the handleClick1 function immediately

# clicking 'click 1' button, nothing will happen because the onClick attribute is not referring to a function but rather the return value of handleClick1, which is undfined. Therefore, nothing will be triggered.

# clicking 'click 2' button will result in an error indicating that 'this' is undefined value because when executing the handleClick1, it loses the context of 'this' within that function scope

# clicking 'click 3' button will trigger the handleClick2 which is defined in contructor and an alert from handleClick1 will show. The difference between handleClick1 and handleClick2 is that handleClick2 binds the 'this' value to the handleClick1 function so it provides the context for handleClick1

# clicking 'click 4' button will trigger the alert because handleClick3 is defined using an arrow function which captures the the component instance as the 'this' value

### Q3. Memoization

Memoized selectors are a common pattern in ReactJS applications to serve cached data derived from a global state.

In the following code snippets, we have implemented two memoized selectors that will re-evaluate the original function only if the derived output of the input argument is changed. Otherwise, the selector will return a cached result.

`memoize()` uses a <strong>shallow-compare</strong> function to evaluate equality.

For each assertion test on lines 79 to 86, please indicate whether the test will pass or fail. Provide a brief description if you indicate that an assertion will fail.

```javascript
test("memoized selectors", () => {
	const stateA = { data: { a: { x: 2, y: [1, 2] }, b: { x: 3, y: [3, 4] } } };
	const stateB = { data: { a: { x: 2, y: [1, 2] }, b: { x: 3, y: [3, 4] } } };
	const stateC = { data: { a: { x: 1, y: [3, 4] }, b: { x: 3, y: [5, 6] } } };

	const fn1 = memoize((st: typeof stateA) => Object.values(st.data).map(d => d.x));

	const fn2 = memoize((st: typeof stateA) => Object.values(st.data).map(d => d.y));

	expect(fn1(stateA) === fn1(stateB)).toBeTruthy();
	expect(fn1(stateA) === fn1(stateC)).toBeTruthy();
	expect(fn1(stateB) !== fn1(stateC)).toBeTruthy();

	expect(fn2(stateA) === fn2(stateA)).toBeTruthy();
	expect(fn2(stateA) === fn2(stateB)).toBeTruthy();
	expect(fn2(stateA) !== fn2(stateC)).toBeTruthy();
	expect(fn2(stateB) !== fn2(stateC)).toBeTruthy();
});
```

## Answer: The `expect(fn1(stateA) === fn1(stateC)).toBeTruthy();` test will fail. The return results of fn1 on two states are [2,3] and [1,3] and it's not equal. For simple pure functions, the improvement of memoization is not obvious but when dealing with complex calculations, memoize could significantly improve performance as it 'caches' the output of the function so that it won't need to rerun all the codes if the input remains the same.
