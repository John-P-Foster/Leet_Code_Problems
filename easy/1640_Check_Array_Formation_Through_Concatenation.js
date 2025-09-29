// You are given an array of distinct integers arr and an array of integer arrays pieces, 
// where the integers in pieces are distinct. Your goal is to form arr by concatenating the 
// arrays in pieces in any order. However, you are not allowed to reorder the integers in each
//  array pieces[i].

// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

 

// Example 1:

// Input: arr = [15,88], pieces = [[88],[15]]
// Output: true
// Explanation: Concatenate [15] then [88]
// Example 2:

// Input: arr = [49,18,16], pieces = [[16,18,49]]
// Output: false
// Explanation: Even though the numbers match, we cannot reorder pieces[0].
// Example 3:

// Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
// Output: true
// Explanation: Concatenate [91] then [4,64] then [78]
 

// Constraints:

// 1 <= pieces.length <= arr.length <= 100
// sum(pieces[i].length) == arr.length
// 1 <= pieces[i].length <= arr.length
// 1 <= arr[i], pieces[i][j] <= 100
// The integers in arr are distinct.
// The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, 
//     all the integers in this array are distinct).

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let i = 0; 
    while (i < arr.length) {
        let j = 0; 
        while (j < pieces.length && arr[i] !== pieces[j][0]) {
            j++; 
        }
        
        if (j === pieces.length) return false; 

        let sub = pieces[j]; 
        for (let s = 0; s < sub.length; s++) {
            if (arr[i] !== sub[s]) return false; 
            i++;
        }
    }
    return true; 
};

const testCases = [
    [[15,88], [[88],[15]], true],
    [[49,18,16], [[16,18,49]], false],
    [[91,4,64,78],[[78],[4,64],[91]], true],
]

let testNumber = 1; 
for(let[arr, pieces, expected] of testCases){
    const returned = canFormArray(arr, pieces);
    const result = returned === expected ? `✅ Passed` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result} with: ${returned}`);
    testNumber ++; 
}