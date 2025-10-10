// Given an integer array arr, return true if there are three consecutive odd numbers in the array.
//  Otherwise, return false.
 

// Example 1:

// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.
// Example 2:

// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.
 

// Constraints:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {

    for(let i = 0; i + 2 < arr.length; i ++){
        if(arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) return true
    }

    return false; 
};


const testCases = [
    [ [2,6,4,1,1,1], true],
    [[1,2,34,3,4,5,7,23,12], true]
]

let testNumber = 1; 
for(let[arr, expected] of testCases){
    const returned = threeConsecutiveOdds(arr);
    const result = returned === expected ? ` ✅ Passed` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
}
