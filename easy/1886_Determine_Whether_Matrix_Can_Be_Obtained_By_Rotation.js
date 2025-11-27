// Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to 
// target by rotating mat in 90-degree increments, or false otherwise.

 

// Example 1:


// Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
// Output: true
// Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.
// Example 2:


// Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
// Output: false
// Explanation: It is impossible to make mat equal to target by rotating mat.
// Example 3:


// Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
// Output: true
// Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.
 

// Constraints:

// n == mat.length == target.length
// n == mat[i].length == target[i].length
// 1 <= n <= 10
// mat[i][j] and target[i][j] are either 0 or 1.

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    if(mat.toString() === target.toString()) return true; 
    const n = mat.length; 
    for(let i = 0; i < 3; i++){
        let rotated90 = []; 
        for(let col = n - 1; col >= 0; col--){
            let newRow = [];
            for(let row = 0; row < n; row ++){
                newRow.push(mat[row][col]); 
            }
            rotated90.push(newRow); 
        }
        if(rotated90.toString() === target.toString()) return true; 
        mat = rotated90; 
    }
    return false
};

const testCases = [
    [[[0,1],
      [1,0]], [[1,0],[0,1]], true],
    [[[1,0],[0,1]], [[1,0],[0,1]], true],
    [[[0,1],[1,1]], [[1,0],[0,1]], false],
    [[[0,0,0],
      [0,1,0],
      [1,1,1]], [[1,1,1],[0,1,0],[0,0,0]], true]
]

let testNumber = 1; 
for(let[mat, target, expected] of testCases){
  const returned = findRotation(mat, target);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}