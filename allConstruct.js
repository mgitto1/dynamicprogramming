/*
Write a function 'allConstruct(target, wordBank)' that accepts a target string
and an array of strings.

The function should return a 2D array containing all of the ways that 'target'
can be constructed by concatenating elements of the 'wordBank' array.

Each element of the 2D array should represent one combination that constructs
the 'target'.
*/

function allConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return [[]];
  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let newWord = target.slice(word.length);
      let newWordWays = allConstruct(newWord, wordBank);
      let targetWays = newWordWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return memo[target];
}

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// [[abc,def]]

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));

// [[purp,le], [p, ur, p, le]]

console.log(allConstruct('hello', ['cat', 'dog', 'mouse'])); //[]

console.log(allConstruct('', ['cat', 'dog', 'mouse'])); //[[]]

console.log(
  allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); //false
