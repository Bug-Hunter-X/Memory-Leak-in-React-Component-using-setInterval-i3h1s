# React setInterval Memory Leak
This example demonstrates a common mistake in React applications involving the `useEffect` hook and `setInterval`.  Failing to include a cleanup function in `useEffect` when using `setInterval` leads to memory leaks. 

The `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected version.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the continuously increasing counter. Even if the component unmounts, the interval continues, causing the memory leak.

## Solution
The solution is to use the return value of `useEffect` to provide a cleanup function that will clear the interval when the component unmounts or when the dependencies change.