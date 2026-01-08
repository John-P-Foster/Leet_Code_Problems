// Given an integer array nums, move all the even integers at the beginning of the array followed by
// all the odd integers.

// Return any array that satisfies this condition.

 

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let evensIndex = 0; 
    let oddsIndex = nums.length - 1;
    
    while(evensIndex < oddsIndex){
        if(nums[evensIndex] & 1){
            while(evensIndex < oddsIndex && nums[oddsIndex] & 1 ){
                oddsIndex  --;
            }
            [nums[evensIndex], nums[oddsIndex]] = [nums[oddsIndex], nums[evensIndex]]  
        }
        evensIndex ++; 
    }

    return nums; 
};

const testCases = [
    [[3,1,2,4],[4,2,1,3]],
    [[1,1,1,1,1],[1,1,1,1,1]],
    [[1,2,2,2,2,2,1], [2,2,2,2,2,1,1]],
    [[2,2,2,2,2], [2,2,2,2,2]],
    [[0,1,3], [0,1,3]],
    [[0],[0]]
]

let testNumber = 1;
for(let [nums, expected] of testCases){
    const returned = sortArrayByParity(nums);
    const result = returned.toString() === expected.toString() ? `Test ${testNumber}  ✅ Passed with: ${returned}` :  `Test ${testNumber} ❌ Failed with: ${returned}`;
    testNumber ++; 
    console.log(result);
}