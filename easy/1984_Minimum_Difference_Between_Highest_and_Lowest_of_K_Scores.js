// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. 
// You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the 
// lowest of the k scores is minimized.

// Return the minimum possible difference.

 

// Example 1:

// Input: nums = [90], k = 1
// Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.
// Example 2:

// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.
 

// Constraints:

// 1 <= k <= nums.length <= 1000
// 0 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let minDif = Infinity; 

    // Sort the array
    nums.sort((a,b) => a - b); 

    // Use sliding window to check difference between start and end of window
    for(let i = 0; i < (nums.length - k + 1); i ++){
        const min = nums[i]
        const max = nums[i + (k - 1)]; 

        // Update minDif to lower value; 
        minDif = Math.min((max - min), minDif);
    }

    return minDif; 
};

const testCases = [
    [[90], 1, 0],
    [[9,4,1,7], 2, 2],
    [[0], 1, 0],
    [[9,4,1,7,10,12,15,99,15000], 2, 1]
]

let testNumber = 1; 
for(let[nums, k, expected] of testCases){
    const returned = minimumDifference(nums, k);
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}`: `Test ${testNumber} ❌ Failed with: ${returned}`;
    console.log(result);
    testNumber ++;
}