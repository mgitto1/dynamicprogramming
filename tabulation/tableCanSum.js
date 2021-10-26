//canSum Tabulation
/*
Write a function 'canSum(targetSum,numbers)' that takes in a targetSum and an
array of numbers as arguments. The function should return a boolean indicating
whether or not it is possible to generate the targetSum using numbers from the
array.

You may use an element in the array as many times as needed.

You may assume that all input numbers are nonnegative. '
*/
function canSum(targetSum, numbers) {
  let table = new Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table[targetSum];
}
console.log(canSum(7, [5, 2, 4]));
console.log(canSum(7, [2, 3]));
console.log(canSum(7, [2, 4]));
console.log(canSum(7, [5, 2, 4]));
