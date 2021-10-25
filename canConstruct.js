/*
Write a function 'canConstruct(target, wordBank)' that accepts a target string
and an array of strings.

The function should return a boolean indicating whether or not that 'target' can be constructed by concatenating elements of the 'wordBank' array.

You may reuse elements of 'wordBank' as many times as needed
*/
function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let newWord = target.slice(word.length);
      if (canConstruct(newWord, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true abc + def

/*
                            abcdef
                      /       |        \ (take out prefixes)
                  cdef       def        ef
                   |          |
                   ef         ""

time = O(m*n^m)
space = O(m*m)
*/

console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); // false

console.log(canConstruct('', ['cat', 'dog', 'mouse'])); //true
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); //false
