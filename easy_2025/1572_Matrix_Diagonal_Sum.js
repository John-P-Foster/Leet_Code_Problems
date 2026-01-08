// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the
//  elements on the secondary diagonal that are not part of the primary diagonal.

 

// Example 1:


// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8
// Example 3:

// Input: mat = [[5]]
// Output: 5
 

// Constraints:

// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0; 
    let n = mat.length; 

    for(let i = 0; i < n; i++){
        sum += mat[i][i]; 
        sum += mat[n - 1 - i][i]; 
    }

    if(n % 2 != 0){
        const center = Math.floor(n / 2); 
        sum -= mat[center][center]; 
    }

    return sum; 
};

const testCases = [
    [[[1,2,3],
      [4,5,6],
      [7,8,9]], 25],

    [[[1,1,1,1],
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1]], 8],

    [[[5]], 5],

    [[[1,1,1,1,1],
      [1,1,1,1,1],
      [1,1,1,1,1],
      [1,1,1,1,1],
      [1,1,1,1,1]], 9],

]

let testNumber = 1; 
for(let[mat, expected] of testCases){
  const returned = diagonalSum(mat);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}