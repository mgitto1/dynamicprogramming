/*
Write a function 'canConstruct(target, wordBank)' that accepts a target string
and an array of strings.

The function should return a boolean indicating whether or not that 'target' can be constructed by concatenating elements of the 'wordBank' array.

You may reuse elements of 'wordBank' as many times as needed
*/

function canConstruct(target, wordBank) {
  let table = Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < table.length; i++) {
    if (table[i]) {
      for (let word of wordBank) {
        //if word matches characters starting at position i
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
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
