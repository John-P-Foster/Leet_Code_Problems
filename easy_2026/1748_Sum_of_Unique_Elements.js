// You are given an integer array nums. The unique elements of an array are the elements that appear 
// exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var foo = function(nums) {
    let freq = new Array(101).fill(0) // 101 range 0 - 100; 
    let sum = 0; 

    for(const cur of nums){
        if(freq[cur] === 0)sum += cur
        if(freq[cur] === 1) sum -= cur
        freq[cur] ++; 
    }
    
    return sum; 
};

const testCases = [
    [4, [1,2,3,2]],
    [0,[1,1,1,1,1]],
    [15, [1,2,3,4,5]]

]

testCases.forEach((test, testNumber) => {
  let [expected, ...params] = test
  const returned = foo(...params);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber + 1} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
})