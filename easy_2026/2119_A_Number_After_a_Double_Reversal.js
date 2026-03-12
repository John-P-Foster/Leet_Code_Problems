// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. 
// Return true if reversed2 equals num. Otherwise return false.

 

// Example 1:

// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
// Example 2:

// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
// Example 3:

// Input: num = 0
// Output: true
// Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.
 

// Constraints:

// 0 <= num <= 106

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(num === 0) return true; 

    return num % 10 != 0 ? true : false;  
};

const testCases = [
    [526, true], 
    [1800, false], 
    [0, true], 

]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = isSameAfterReversals(...params);
const result = returned === expected? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})
