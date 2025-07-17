// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    result = [3,4]
    return result;
};

const testCases = [
    [[5,7,7,8,8,10], 8, [ 3, 4]],
    [[5,7,7,8,8,10], 6, [-1,-1]],
    [[],0,[-1,-1] ],
]

for(let test of testCases){
    result = searchRange(test[0], test[1]); 
    result = result.toString() ===  test[2].toString() ? "Passed" : "Failed";
    console.log(result); 
}