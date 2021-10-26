//canSum Memoization
/*
Write a function 'canSum(targetSum,numbers)' that takes in a targetSum and an
array of numbers as arguments. The function should return a boolean indicating
whether or not it is possible to generate the targetSum using numbers from the
array. You may use an element in the array as many times as needed.
You may assume that all input numbers are nonnegative. '
*/

function canSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

console.log(canSum(300, [7, 14])); // true (3+4), 7

/*
        7
   /  /   \  \  (subtract elements in array)
  2   4    3   0
     / \   |
    1   0  0

*/
console.log(canSum(7, [2, 4])); // false
/*
        7
      /   \    (subtract elements in array)
     5     3
    / \    |
   1   2   1

*/

/* Brute force:
  time complexity = O(branches^depth)
                  = O(n^m) n = array length, m = targetSum

  Optimized w/ Memo
  time complexity = O(n*m) n = array length, m = targetSum
*/
