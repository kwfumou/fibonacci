'use strict';
const memo = new Map();
function fib(n) {
	if (memo.get(n)) return memo.get(n);
	if (n < 1) return null;
	if (n === 1 || n == 2) return 1;
	memo.set(n, fib(n - 1) + fib(n - 2));
	return memo.get(n);
}
const length = 40;
for (let i = 1; i <= length; i++) {
	console.log(fib(i));
}
