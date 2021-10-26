//howSum Memoization
/*
Write a function 'bestSum(targetSum,numbers)' that takes in a targetSum and an
array of numbers as arguments.

The function should return an array containing the shortest combination of
elements that add to exactly the targetSum.

If there is no combination that adds up to the targetSum, return null.

If there are multiple combinations possible, you may return any of them.
*/

function bestSum(targetSum, numbers) {
  let table = new Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        if (
          !table[num + i] ||
          [...table[i], num].length < table[num + i].length
        ) {
          table[num + i] = [...table[i], num];
        }
      }
    }
  }
  return table[targetSum];
}

console.log(bestSum(8, [2, 3, 5])); // [3,5]
console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [1, 4, 5])); // [7]
console.log(bestSum(100, [1, 2, 5, 25])); // [7]
