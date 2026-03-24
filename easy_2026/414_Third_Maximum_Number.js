// Given an integer array nums, return the third distinct maximum number in this array. If the third 
// ]maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let numSet = new Set(nums);
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    for(let num of numSet){
        if(num > max1){
            max3 = max2; 
            max2 = max1; 
            max1 = num; 
        }else if(num > max2){
            max3 = max2; 
            max2 = num; 
        }else if(num > max3){
            max3 = num; 
        }else{
            continue; 
        }
    }

    return max3 === -Infinity ? max1 : max3; 
};

const testCases = [
    [[3,2,1], 1],
    [[1,2], 2],
    [[2,2,3,1], 1],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = thirdMax(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

