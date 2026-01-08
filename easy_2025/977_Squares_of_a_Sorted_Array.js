// Given an integer array nums sorted in non-decreasing order, return an array of the squares of 
// each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    let left = 0; 
    let right = nums.length - 1;
    let sorted = new Array(nums.length)
    let sortedIndex = sorted.length - 1; 

    while(left <= right ){
        const leftSqr = nums[left] ** 2
        const rightSqr = nums[right] ** 2

        if(leftSqr > rightSqr){
            sorted[sortedIndex] = leftSqr 
            left ++
        }else{
            sorted[sortedIndex] = rightSqr
            right --
        }
        sortedIndex --
    }

    return sorted; 

};

const testCases = [
    [[-4,-1,0,3,10], [0,1,9,16,100]],
    [[-7,-3,2,3,11], [4,9,9,49,121]]
]

let testNumber = 1; 
for(let[nums, expected] of testCases){
    const returned = sortedSquares(nums);
    const result = returned.toString() === expected.toString() ? ` ✅ Passed` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
}
