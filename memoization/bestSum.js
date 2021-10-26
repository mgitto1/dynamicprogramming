//howSum Memoization
/*
Write a function 'bestSum(targetSum,numbers)' that takes in a targetSum and an
array of numbers as arguments.

The function should return an array containing the shortest combination of
elements that add to exactly the targetSum.

If there is no combination that adds up to the targetSum, return null.

If there are multiple combinations possible, you may return any of them.
*/

function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortest = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    let remainderResult = bestSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      let combination = [...remainderResult, num];
      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }
  memo[targetSum] = shortest;
  return memo[targetSum];
}

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3,5]
console.log(bestSum(8, [1, 4, 5])); // [7]
console.log(bestSum(100, [1, 2, 5, 25])); // [7]

/*
        7
   /  /   \  \  (subtract elements in array)
  2   4    3   0
     / \   |
    1   0  0

*/
