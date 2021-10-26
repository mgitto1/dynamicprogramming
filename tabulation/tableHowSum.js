//howSum Tabulation
/*
Write a function 'howSum(targetSum,numbers)' that takes in a targetSum and an
array of numbers as arguments. The function should return an array containing
any combination of elements that add to exactly the targetSum. If there is no
combination that adds up to the targetSum, return null.

If there are multiple combinations possible, you may return any of them.
*/

function howSum(targetSum, numbers) {
  let table = new Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[num + i] = [...table[i], num];
      }
    }
  }
  return table[targetSum];
}

console.log(howSum(7, [5, 3, 4, 7])); // [3,4] [7]
console.log(howSum(7, [2, 3]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
