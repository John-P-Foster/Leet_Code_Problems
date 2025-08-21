// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after 
// removing exactly one element, or false otherwise. If the array is already strictly increasing, 
// return true.

// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

 

// Example 1:

// Input: nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.
// Example 2:

// Input: nums = [2,3,1,2]
// Output: false
// Explanation:
// [3,1,2] is the result of removing the element at index 0.
// [2,1,2] is the result of removing the element at index 1.
// [2,3,2] is the result of removing the element at index 2.
// [2,3,1] is the result of removing the element at index 3.
// No resulting array is strictly increasing, so return false.
// Example 3:

// Input: nums = [1,1,1]
// Output: false
// Explanation: The result of removing any element is [1,1].
// [1,1] is not strictly increasing, so return false.
 

// Constraints:

// 2 <= nums.length <= 1000
// 1 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let removedOne = false; 
    for(let i = 0; i < nums.length - 1; i ++){
       // Check that i and i + 1 are increasing.
       if(nums[i] < nums[i + 1 ]) continue; 

       // Check that an index has not been removed yet.
       if(removedOne) return false; 

       // Remove set flag, simulate removing the value.
        removedOne = true;
        if(i === 0) continue; 
        if(!(nums[i - 1] < nums[i + 1])){
            if (i+2 < nums.length && nums[i] >= nums[i+2]) return false;
        }; 

    }

    return true; 
};

let testCases = [
    [[1,2,10,5,7], true],
    [[2,3,1,2], false],
    [[1,1,1], false],
    [[10,1,2], true],
    [[1, 2, 3, 2, 4], true]    
]

let testNumber = 1; 
for(let[nums, expected] of testCases){
    const returned = canBeIncreasing(nums); 
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}` : `Test ${testNumber} ❌ Failed with: ${returned}`; 
    testNumber ++; 
    console.log(result);
}