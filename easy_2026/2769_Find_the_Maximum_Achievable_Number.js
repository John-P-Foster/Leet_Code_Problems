// Given two integers, num and t. A number x is achievable if it can become equal to num after applying 
// the following operation at most t times:

// Increase or decrease x by 1, and simultaneously increase or decrease num by 1.
// Return the maximum possible value of x.

 

// Example 1:

// Input: num = 4, t = 1

// Output: 6

// Explanation:

// Apply the following operation once to make the maximum achievable number equal to num:

// Decrease the maximum achievable number by 1, and increase num by 1.
// Example 2:

// Input: num = 3, t = 2

// Output: 7

// Explanation:

// Apply the following operation twice to make the maximum achievable number equal to num:

// Decrease the maximum achievable number by 1, and increase num by 1.
 

// Constraints:

// 1 <= num, t <= 50

/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
    return   num + (2 * t); 
};

const testCases = [
    [4, 1, 6],
    [3, 2, 7],
    [0, 5, 10],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = theMaximumAchievableX(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})
