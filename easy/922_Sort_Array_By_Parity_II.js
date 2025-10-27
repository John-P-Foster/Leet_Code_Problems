// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

 

// Example 1:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
// Example 2:

// Input: nums = [2,3]
// Output: [2,3]
 

// Constraints:

// 2 <= nums.length <= 2 * 104
// nums.length is even.
// Half of the integers in nums are even.
// 0 <= nums[i] <= 1000
 

// Follow Up: Could you solve it in-place?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {

    let swapNextCorrectValue = function (i){
        const evenOrOdd = i % 2; 
        let nextIndex = i + 1; 

        while(nextIndex < nums.length  && nums[nextIndex] % 2 != evenOrOdd){ // find the next correct value.
            nextIndex ++; 
        }
        if(nums[nextIndex] % 2 === evenOrOdd){
            [nums[i], nums[nextIndex]] = [nums[nextIndex], nums[i]]; // swap the next correct value. 

        }
    }
 
    for(let i = 0; i < nums.length; i ++){
        if(i % 2 === 0 && nums[i] % 2 != 0){ // check if a swap is needed
            swapNextCorrectValue(i)
        }

        if(i % 2 === 1 && nums[i] % 2 != 1){ // Check if a swap is needed
            swapNextCorrectValue(i)
        }
    }

    return nums; 
};

const testCases = [
    [[4,2,5,7], [4,5,2,7]],
    [[2,3], [2,3]],
    [[4,1,2,2,3,1,4,0,1,1], [4,1,2,3,2,1,4,1,0,1]],
]


let testNumber = 1; 
for(let[nums, expected] of testCases){
    const returned = sortArrayByParityII(nums);
    const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
}