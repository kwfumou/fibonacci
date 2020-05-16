'use strict';
function fib(n) {
	if (n < 1) return null;
	if (n === 1 || n == 2) return 1;
	return fib(n - 1) + fib(n - 2);
}
const length = 40;
for (let i = 1; i <= length; i++) {
	console.log(fib(i));
}
