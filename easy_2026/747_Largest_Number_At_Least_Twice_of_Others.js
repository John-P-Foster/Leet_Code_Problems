// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the 
// array. If it is, return the index of the largest element, or return -1 otherwise.

 

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.
 

// Constraints:

// 2 <= nums.length <= 50
// 0 <= nums[i] <= 100
// The largest element in nums is unique.

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let largestIndex = 0; 
    let secondLargest = 1; 
    for(let i = 0; i < nums.length; i++){
        if((nums[i] < nums[largestIndex])&&(nums[i] > nums[secondLargest])){
            secondLargest = i; 
        }
        if(nums[i] > nums[largestIndex]){
            secondLargest = largestIndex; 
            largestIndex = i; 
        }
    }
    
    return nums[largestIndex] >= (nums[secondLargest] * 2) ? largestIndex : -1; 
};


const testCases = [
    [[3,6,1,0], 1],
    [[1,2,3,4], -1],
    [[1,0], 0],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = dominantIndex(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

