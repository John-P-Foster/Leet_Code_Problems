// An ugly number is a positive integer which does not have a prime factor
//  other than 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

 

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.
 

// Constraints:

// -231 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {

    if(n <= 0) return false; 

    for(let prime of [2, 3, 5]){
        while(n % prime === 0 ) n /= prime; 
    }
    return n === 1; 
};

const testCases = [
    [6, true],
    [1, true],
    [14, false],
    
    [210, false],
]

let testNumber = 1; 
for(let[n, expected] of testCases){
  const returned = isUgly(n);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}