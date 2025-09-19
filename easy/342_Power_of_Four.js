// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {

    if(n < 1){ return false; }

    while(n % 4 === 0) {
        n /= 4;  
    }
    return n === 1; 
};

const testCases = [
    [16, true],
    [5, false],
    [1, true],
    [4294967296, true],
    [4294967297, false],
    [0, false],
    [-16, false],
]

let testNumber = 1;
for(let[n, expected] of testCases){
    const returned = isPowerOfFour(n);
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}`: `Test ${testNumber} ❌ Failed with: ${returned}`;
    testNumber ++; 
    console.log(result);
}

