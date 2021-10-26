/*
Write a function 'countConstruct(target, wordBank)' that accepts a target string
and an array of strings.

The function should return a number of ways that 'target' can be constructed by concatenating elements of the 'wordBank' array.

You may reuse elements of 'wordBank' as many times as needed
*/

function countConstruct(target, wordBank) {
  let table = Array(target.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i < table.length; i++) {
    if (table[i] > 0) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] += table[i];
        }
      }
    }
  }
  return table[target.length];
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
