/*
Write a function 'allConstruct(target, wordBank)' that accepts a target string
and an array of strings.

The function should return a 2D array containing all of the ways that 'target'
can be constructed by concatenating elements of the 'wordBank' array.

Each element of the 2D array should represent one combination that constructs
the 'target'.
*/

function allConstruct(target, wordBank) {
  let table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];
  for (let i = 0; i < table.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }
  return table[target.length];
}

console.log(
  allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
);
// [[ab,cd,ef], [ab, c, def], [abc, def], [abcd, ef]]

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));

// [[purp,le], [p, ur, p, le]]

console.log(allConstruct('hello', ['cat', 'dog', 'mouse'])); //[]

console.log(allConstruct('', ['cat', 'dog', 'mouse'])); //[[]]

console.log(
  allConstruct('eeeeeeeez', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])
); //false
