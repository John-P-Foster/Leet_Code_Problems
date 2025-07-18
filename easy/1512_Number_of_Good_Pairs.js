// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = new Map(); 
    let totalPairs = 0; 

    for(let num of nums){
        if(map.has(num)){
            const count = map.get(num);
            totalPairs += count; 
            map.set(num, count + 1); 
        }else{
            map.set(num, 1); 
        }
    }

    return totalPairs; 
};

const testCases = [
    [1,2,3,1,1,3],
    [1,1,1,1],
    [1,2,3]
]

for(let test of testCases){
    console.log(numIdenticalPairs(test))
}