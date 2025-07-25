// Given an binary array nums and an integer k, return true if all 
// 1's are at least k places away from each other, otherwise return false.

 

// Example 1:


// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.
// Example 2:


// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= k <= nums.length
// nums[i] is 0 or 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {

    if(nums.length === 1){return true}
    let count = nums[0] === 1 ? k : 0; 

    for(let i = 1; i < nums.length; i ++){

        if(count > 0 && nums[i] === 1 ){
            return false; 
        }
        count = nums[i] === 1 ? k: Math.max(count - 1, 0); 
    }

    return true; 
};


const testCases = [
    [[1,0,0,0,1,0,0,1], 2, true],
    [[1,0,0,1,0,1], 2, false],
    [[1,1,0,1,0,1], 2, false],
    [[0], 1, true],
    [[1], 1, true],


]


for(let test of testCases){
    let result = kLengthApart(test[0], test[1]); 
    result = result === test[2] ? `Passed with: ${result}` : `Failed with: ${result}`;
    console.log(result);  
}