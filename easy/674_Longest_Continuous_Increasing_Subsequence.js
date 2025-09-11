// Given an unsorted array of integers nums, return the length of the longest continuous increasing
//  subsequence (i.e. subarray). The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is 
// [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

 

// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are
//  separated by element
// 4.
// Example 2:

// Input: nums = [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must 
// be strictly
// increasing.
 

// Constraints:

// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length === 1) return 1; 

    let lCIS = 1; 
    let count = 1; 

    for(i = 0; i < nums.length -1; i ++){
        if(nums[i] < nums[i +1]){
            count ++
            lCIS = Math.max(count, lCIS);
        }else{
            count = 1; 
        }
    }

    return lCIS; 
};

const testCases = [
    [[1,3,5,4,7], 3],
    [[2,2,2,2,2], 1],
    [[1],1],
    [[1,2,3,4,100,8,9,10,11,12], 5],
    [[1,2,3,0,1,2], 3]
]

let testNumber = 1; 
for(let [nums, expected] of testCases){
    const returned = findLengthOfLCIS(nums); 
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with:  ${returned}` : `Test ${testNumber} ❌ Failed with: ${returned}`; 
    testNumber ++; 
    console.log(result);
}