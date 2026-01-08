// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = new Array(numRows); 
    triangle[0] = [1]; 

    for(let row = 1; row < numRows; row ++ ){
        triangle[row] = []; 
        triangle[row].push(1)
        for(let i = 0; i < triangle[row-1].length -1; i++){
            let num = triangle[row -1][i] + triangle[row-1][i+1]; 
            triangle[row].push(num);
        }
        triangle[row].push(1); 
    }

    return triangle; 
};

const testCases = [
    [1, [[1]]],
    [5,  [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]],
]

for(let[input, expected] of testCases ){
    let returned = generate(input);
    let result = returned.toString() === expected.toString() ? `Passed with: ${returned}` : `Failed got: ${returned}`;
    console.log(result); 
}