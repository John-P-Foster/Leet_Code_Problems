// Given an integer array nums, return true if you can partition the array into two subsets such that
//  the sum of the elements in both subsets is equal or false otherwise.

 

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if(sum % 2 != 0) return false; 

   const target = sum / 2;
   const dp = new Array(target + 1).fill(false);  
   dp[0] = true; 

   for(let num of nums){
    for(let s = target; s >= num; s--){
        dp[s] = dp[s] || dp[s - num];
    }
   }

    return dp[target]; 
};

const testCases = [
    [[1,5,11,5], true],
    [[1,5,8,3,5], true],
    [[1,2,3,5], false]
] 
  

  for(let[testNumber, [nums, expected]] of testCases.entries()){
    const returned = canPartition(nums);
    const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber + 1} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
  }