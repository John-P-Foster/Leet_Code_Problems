// Given an m x n binary matrix mat, return the number of special positions in mat.

// A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 
// 0 (rows and columns are 0-indexed).

 

// Example 1:


// Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
// Output: 1
// Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and 
// column 2 are 0.
// Example 2:


// Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3
// Explanation: (0, 0), (1, 1) and (2, 2) are special positions.
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// mat[i][j] is either 0 or 1.

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let m = mat[0].length; 
    let n = mat.length; 
    let colCount = new Array(m).fill(0);

    for(let col = 0; col < m; col++){
        for(let row = 0; row < n; row ++){
            if(mat[row][col] === 1){
                colCount[col]++; 
            }
            if(colCount[col] > 1) break; 
        }

    }
    
    
    let result = 0; 

    for(let row = 0; row < n; row ++){
        let rowCount = 0; 
        let oneIndex = -1; 

        for(let col = 0; col < m; col++){
            if(mat[row][col] === 1 ){
                oneIndex = col; 
                rowCount++ 
            }
            if(rowCount > 1)break; 
        }
        if(rowCount === 1 && colCount[oneIndex] === 1) result++;
    }

    
    return result; 
};

const testCases = [
    [[[1,0,0],
      [0,0,1],
      [1,0,0]], 1],

    [[[1,0,0],
      [0,1,0],
      [0,0,1]], 3],

    [[[0,0,0,1],
      [0,1,0,0],
      [0,0,1,0]], 3],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = numSpecial(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

