// You are given a 0-indexed integer array nums. A subarray s of length m is called alternating if:

// m is greater than 1.
// s1 = s0 + 1.
// The 0-indexed subarray s looks like [s0, s1, s0, s1,...,s(m-1) % 2]. In other words, s1 - s0 = 1, 
// s2 - s1 = -1, s3 - s2 = 1, s4 - s3 = -1, and so on up to s[m - 1] - s[m - 2] = (-1)m.
// Return the maximum length of all alternating subarrays present in nums or -1 if no such subarray exists.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [2,3,4,3,4]

// Output: 4

// Explanation:

// The alternating subarrays are [2, 3], [3,4], [3,4,3], and [3,4,3,4]. The longest of these is [3,4,3,4],
//  which is of length 4.

// Example 2:

// Input: nums = [4,5,6]

// Output: 2

// Explanation:

// [4,5] and [5,6] are the only two alternating subarrays. They are both of length 2.

 

// Constraints:

// 2 <= nums.length <= 100
// 1 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */
var foo = function(nums) {
    let longest = 0
    let expectedDiff = 1; 
    let current = 1

    for(let i = 1; i < nums.length; i++){
        let diff = nums[i] - nums[i - 1]
        if(diff === expectedDiff){
            expectedDiff *= -1; 
            current ++; 
        }else{
          if(diff === 1){
            current = 2; 
            expectedDiff = -1; 
          }else{
            current = 1; 
            expectedDiff = 1
          }
        }
        longest = Math.max(current, longest);
        
    }


    return longest > 1 ? longest : -1
};

const testCases = [
    [4, [2,3,4,3,4]],
    [2, [4,5,6]],
    [-1, [21,9,5]],
    [-1, [14,30,29,49,3,23,44,21,26,52]]
  ] 
  
  
  testCases.forEach((test, testNumber) => {
    let [expected, ...params] = test
    const returned = foo(...params);
    const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber + 1} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
  })