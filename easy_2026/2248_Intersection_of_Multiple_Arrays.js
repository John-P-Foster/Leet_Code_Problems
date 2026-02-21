// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, 
// return the list of integers that are present in each array of nums sorted in ascending order.
 

// Example 1:

// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]
// Explanation: 
// The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] 
// are 3 and 4, so we return [3,4].
// Example 2:

// Input: nums = [[1,2,3],[4,5,6]]
// Output: []
// Explanation: 
// There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= sum(nums[i].length) <= 1000
// 1 <= nums[i][j] <= 1000
// All the values of nums[i] are unique.

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const result = []; 
    const count = new Array(1001).fill(0); 

    for(let row = 0; row < nums.length; row ++){
        for(let col = 0; col < nums[row].length; col ++){
            const num = nums[row][col];
            count[num] ++
        }
        
        for(let i = 0; i < count.length; i++){
            if(count[i] === nums.length) result.push(i);
        }
    }

    return result
};


const testCases = [
    [[[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], [3,4]],
    [[[1,2,3],[4,5,6]], []]
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = intersection(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})
