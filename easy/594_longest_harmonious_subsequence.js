// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

 

// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]

// Output: 5

// Explanation:

// The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:

// Input: nums = [1,2,3,4]

// Output: 2

// Explanation:

// The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

// Example 3:

// Input: nums = [1,1,1,1]

// Output: 0

// Explanation:

// No harmonic subsequence exists.

 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
     
    let longest = 0;
    let numberCount = {};
    
    for(let num of nums){
        numberCount[num] = (numberCount[num] || 0) + 1; 
    }

    for(let key in numberCount){
        let partner = parseInt(key) + 1 ;
        if(partner in numberCount){
        longest = Math.max(longest, numberCount[key] + numberCount[partner]); 
        }
    }

    return longest;
};


const testCases = [
        [1,3,2,2,5,2,3,7],
        [2,3,1,1,1,2,3,7],
        [2,3,1,2,1,2,3,7],
        [1,2,3,4],
        [1,1,1,1]
    ]

for(let test of testCases){
console.log(findLHS(test))}


// Optimum solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHSOPT = function(nums) {
    var map = new Map();
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    for (var [key, val] of map) {
        if (map.has(key + 1)) {
            res = Math.max(res, val + map.get(key + 1));
        }
    }
    return res;
};