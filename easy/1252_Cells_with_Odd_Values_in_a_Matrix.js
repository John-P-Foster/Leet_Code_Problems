// There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each 
// indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

// For each location indices[i], do both of the following:

// Increment all the cells on row ri.
// Increment all the cells on column ci.
// Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the
// increment to all locations in indices.

 

// Example 1:


// Input: m = 2, n = 3, indices = [[0,1],[1,1]]
// Output: 6
// Explanation: Initial matrix = [[0,0,0],[0,0,0]].
// After applying first increment it becomes [[1,2,1],[0,1,0]].
// The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.
// Example 2:


// Input: m = 2, n = 2, indices = [[1,1],[0,0]]
// Output: 0
// Explanation: Final matrix = [[2,2],[2,2]]. There are no odd numbers in the final matrix.

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const rows = Array(m).fill(0);
    const cols = Array(n).fill(0);

    for (let [r, c] of indices) {
        rows[r]++;
        cols[c]++;
    }
    
    let result = 0; 

    for(let row = 0; row < m; row ++){
        for(let column = 0; column < n; column ++){
           if((rows[row] + cols[column]) % 2 !== 0) result ++; 
        }
    }
     
    return result; 
};

const testCases = [
    [2, 3, [[0,1],[1,1]], 6],
    [2, 2, [[1,1],[0,0]], 0]
]

let testNumber = 1; 
for(let[m, n, indices, expected] of testCases){
    const returned = oddCells(m, n, indices); 
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}` : `Test ${testNumber} ❌ Failed with: ${returned}` 
    testNumber ++; 
    console.log(result); 
}