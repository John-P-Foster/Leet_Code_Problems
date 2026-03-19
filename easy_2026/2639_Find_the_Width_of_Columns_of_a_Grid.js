// You are given a 0-indexed m x n integer matrix grid. The width of a column is the maximum length of its 
// integers.

// For example, if grid = [[-10], [3], [12]], the width of the only column is 3 since -10 is of length 3.
// Return an integer array ans of size n where ans[i] is the width of the ith column.

// The length of an integer x with len digits is equal to len if x is non-negative, and len + 1 otherwise.

 

// Example 1:

// Input: grid = [[1],[22],[333]]
// Output: [3]
// Explanation: In the 0th column, 333 is of length 3.
// Example 2:

// Input: grid = [[-15,1,3],[15,7,12],[5,6,-2]]
// Output: [3,1,2]
// Explanation: 
// In the 0th column, only -15 is of length 3.
// In the 1st column, all integers are of length 1. 
// In the 2nd column, both 12 and -2 are of length 2.
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100 
// -109 <= grid[r][c] <= 109

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    let m = grid.length; 
    let n = grid[0].length;  
    const ans = new Array(n)

    for(let col = 0; col < n; col ++){
        let maxWidth = 0; 
        for(let row = 0; row < m; row ++){
            let int = grid[row][col]; 
            let width = 0;

            if(int === 0) width = 1; 

            else {
                if (int < 0){
                    width++; 
                    int = -int; 
                }
                
                width += Math.floor(Math.log10(int)) + 1; 
            }
            maxWidth = maxWidth > width ? maxWidth : width; 
        }

        ans[col] = maxWidth; 
    }

    return ans
};


const testCases = [
    [[[  1],
      [ 22],
      [333]], 
      [  3]],

    [[[-15, 1,  3],
      [ 15, 7, 12],
      [  5, 6, -2]],
      [  3, 1,  2] ]
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = findColumnWidth(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

