// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
// return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100
 

// Follow up: Could you find an O(n + m) solution?

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let row = 0; 
    let col = grid[0].length - 1; 
    let count = 0; 

    while(row < grid.length && col >= 0){
        if(grid[row][col] < 0){
            count += grid.length - row; 
            col --; 
        }else{
            row ++; 
        }
    }

    return count; 
};


const testCases = [
    [[
        [ 4,  3,  2, -1],
        [ 3,  2,  1, -1],
        [ 1,  1, -1, -2],
        [-1, -1, -2, -3]], 8],

    [[
        [3,2],
        [1,0]], 0]
]


testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = countNegatives(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

