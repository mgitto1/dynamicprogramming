/*
Write a function 'countConstruct(target, wordBank)' that accepts a target string
and an array of strings.

The function should return a number of ways that 'target' can be constructed by concatenating elements of the 'wordBank' array.

You may reuse elements of 'wordBank' as many times as needed
*/

function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let total = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let newWord = target.slice(word.length);
      let numWays = countConstruct(newWord, wordBank, memo);
      total += numWays;
    }
  }
  memo[target] = total;
  return total;
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1 (abc + def)

/*
                            abcdef
                      /       |        \ (take out prefixes)
                  cdef       def        ef
                   |          |
                   ef         ""

time = O(m*n^m)
space = O(m*m)
*/

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); // false

console.log(countConstruct('', ['cat', 'dog', 'mouse'])); //true
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); //false
