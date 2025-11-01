// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of 
// the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroesBrute = function(nums) {

    let bubbleUp = function(i){
        while(i < nums.length -1 && nums[i + 1] != 0){
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            i++
        }
    }

    for(let i = nums.length - 1; i >= 0; i --){
        if(nums[i] === 0){
            bubbleUp(i); 
        }
    }

    return nums; 
};

var moveZeroes = function(nums){
    let zeroIndex = 0; 
    
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            [nums[zeroIndex], nums[i]] = [nums[i], nums[zeroIndex]];
            zeroIndex++;
        }
    }

    while(zeroIndex < nums.length){
        nums[zeroIndex] = 0; 
        zeroIndex ++; 
    }

    return nums; 
}

const testCases = [
    [[0,1,0,3,12], [1,3,12,0,0]],
    [[0], [0]]
]


let testNumber = 1; 
for(let[nums,  expected] of testCases){
  const returned = moveZeroes(nums);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}