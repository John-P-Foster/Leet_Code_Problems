// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6
 

// Constraints:

// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let maxOne = -Infinity; 
    let maxTwo = -Infinity; 
    let maxThree = -Infinity; 
    let minOne = Infinity; 
    let minTwo = Infinity; 

    for(let i = 0; i < nums.length; i++){
        let num = nums[i]; 

        if (num > maxOne) {
            maxThree = maxTwo;
            maxTwo = maxOne;
            maxOne = num;
        } else if (num > maxTwo) {
            maxThree = maxTwo;
            maxTwo = num;
        } else if (num > maxThree) {
            maxThree = num;
        }
        
        if (num < minOne) {
            minTwo = minOne;
            minOne = num;
        } else if (num < minTwo) {
            minTwo = num;
        }
    }

    return Math.max((maxOne * maxTwo * maxThree), (minOne * minTwo * maxOne))
};

const testCases = [
    [[1,2,3] , 6],
    [[1,2,3,4] , 24],
    [[-1,-2,-3] , -6],
    [[-3, -2, 2, 4], 24]
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = maximumProduct(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})
