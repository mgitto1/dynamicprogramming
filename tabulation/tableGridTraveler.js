/*
Say that you are a traveler on a 2D grid. You being in the top-left corner and
your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on the grid with dimensions m * n.

Write a function 'gridTraveler(m,n)' that calculates this.
*/

function gridTraveler(m, n) {
  let ways = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  ways[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i + 1 <= m) ways[i + 1][j] += ways[i][j];
      if (j + 1 <= n) ways[i][j + 1] += ways[i][j];
    }
  }
  return ways[m][n];
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
