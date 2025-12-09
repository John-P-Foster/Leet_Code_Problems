// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the 
//     smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1]
//  + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, 
// if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

 

// Example 1:

// Input: nums = [2,3,-1,8,4]
// Output: 3
// Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
// The sum of the numbers after index 3 is: 4 = 4
// Example 2:

// Input: nums = [1,-1,4]
// Output: 2
// Explanation: The sum of the numbers before index 2 is: 1 + -1 = 0
// The sum of the numbers after index 2 is: 0
// Example 3:

// Input: nums = [2,5]
// Output: -1
// Explanation: There is no valid middleIndex.
 

// Constraints:

// 1 <= nums.length <= 100
// -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    // Scan index from left looking for first middle index that passes. 
    for(let i = 0; i < nums.length; i ++){

        //find sum of values left of current index
        let leftSum = 0; 
        for(let l = i - 1; l >= 0; l-- ){
            leftSum += nums[l]; 
        }

        //find sum of values right of current index
        let rightSum = 0; 
        for(let r = i + 1; r < nums.length; r ++){
            rightSum += nums[r]; 
        }

        //If both sums are eqaul return the index. 
        if(leftSum === rightSum) return i; 
    }

    // No valid middle index found. 
    return -1; 
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndexOPT = function(nums) {
    const total = nums.reduce((a,b) => a + b, 0); 
    let leftSum = 0; 

    for(let i = 0; i < nums.length; i ++){
        const rightSum = total - leftSum - nums[i]; 
        if(leftSum === rightSum) return i; 
        leftSum += nums[i]
    }

    return - 1; 
};


const testCases = [
    [[2,3,-1,8,4], 3],
    [[1,-1,4], 2],
    [[2,5], -1]
]


let testNumber = 1; 
for(let[nums, expected] of testCases){
  const returned = findMiddleIndexOPT(nums);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}