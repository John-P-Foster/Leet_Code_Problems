// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

 

// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5
 

// Constraints:

// 2 <= n <= 5000
// nums.length == 2 * n
// 0 <= nums[i] <= 104
// nums contains n + 1 unique elements and one of them is repeated exactly n times.

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const map = new Map(); 
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        if(map.get(nums[i]) === 2){
            return nums[i];
        }
    }
    return 0; 
};

const testCases = [
    [1,2,3,3],
    [2,1,2,5,3,2],
    [5,1,5,2,5,3,5,4]
]

for( let test of testCases){
    console.log(repeatedNTimes(test));
}