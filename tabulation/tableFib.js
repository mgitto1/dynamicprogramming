// Write a function 'fib(n)' that takes in a number as an argument. The function should
// return the n-th number of the fibonacci number.

function tableFib(n) {
  let fibTable = new Array(n + 1).fill(0);
  fibTable[1] = 1;
  for (let i = 0; i <= n; i++) {
    fibTable[i + 1] += fibTable[i];
    fibTable[i + 2] += fibTable[i];
  }
  return fibTable[n];
}

console.log(tableFib(6));
console.log(tableFib(50));
