//howSum Memoization
/*
Write a function 'howSum(targetSum,numbers)' that takes in a targetSum and an
array of numbers as arguments. The function should return an array containing
any combination of elements that add to exactly the targetSum. If there is no
combination that adds up to the targetSum, return null.

If there are multiple combinations possible, you may return any of them.
*/

function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log(howSum(7, [5, 3, 4, 7])); // [3,4] [7]

/*
        7
   /  /   \  \  (subtract elements in array)
  2   4    3   0
     / \   |
    1   0  0

*/

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
/* Brute force:
  time complexity = O(branches^depth)
                  = O(n^m * m) n = array length, m = targetSum

  Optimized w/ Memo
  time complexity = O(n*m^2) n = array length, m = targetSum
  space complexity = O(m^2)
*/
