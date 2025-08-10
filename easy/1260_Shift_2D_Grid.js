// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

 

// Example 1:


// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// Output: [[9,1,2],[3,4,5],[6,7,8]]
// Example 2:


// Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
// Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
// Example 3:

// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
// Output: [[1,2,3],[4,5,6],[7,8,9]]
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m <= 50
// 1 <= n <= 50
// -1000 <= grid[i][j] <= 1000
// 0 <= k <= 100

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {


    const shift = function(grid){
        
        const rows = grid.length; 
        const columns = grid[0].length; 

        let temp = []
        // Create copy of last column
        for(let i = 0; i < rows; i ++){
            temp.push(grid[i][columns - 1])
        }
        // Shift the order of temp. 
        let last = temp.pop(); 
        temp.unshift(last); 
    
        // Shift the columns to the right. 
        for( let column = columns  - 1; column > 0 ; column --){
            for(let row = 0; row < rows; row ++){
                grid[row][column] = grid[row][column -1]
            }
        }

        // Move temp to first column. 
        for(let i = 0 ; i < rows; i ++){
            grid[i][0] = temp[i];
        }

        return grid; 
    }

    for(let i = 0; i < k; i ++){
        grid = shift(grid); 
    }

    return grid; 

};


var shiftGridOPT = function (grid, k) {
    var arr = grid.flat(), len = grid[0].length, res = [];

    while (k--) {
        arr.unshift(arr.pop());
    }

    while (arr.length) {
        res.push(arr.splice(0, len));
    }

    return res;
}

const testCases = [
    [[[1,2,3],[4,5,6],[7,8,9]], 1, [[9,1,2],[3,4,5],[6,7,8]]],
    [[[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4, [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]] ],
    [[[1,2,3],[4,5,6],[7,8,9]], 9, [[1,2,3],[4,5,6],[7,8,9]]]
]

let testNumber = 1; 
for(let [grid, k, expected] of testCases){
    const returned = shiftGrid(grid, k);
    const result = returned.toString() === expected.toString() ? `Test ${testNumber} ✅ Passed with: ${returned}` : `Test ${testNumber} ❌ Failed  \n Got     : ${returned} \n Expected: ${expected}`;
    console.log(result); 
    testNumber ++; 
}