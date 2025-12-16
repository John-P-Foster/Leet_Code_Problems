// Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at
//  least one digit from each array.
 

// Example 1:

// Input: nums1 = [4,1,3], nums2 = [5,7]
// Output: 15
// Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. 
// It can be proven that 15 is the smallest number we can have.
// Example 2:

// Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
// Output: 3
// Explanation: The number 3 contains the digit 3 which exists in both arrays.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 9
// 1 <= nums1[i], nums2[i] <= 9
// All digits in each array are unique.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    let seen = new Array(10).fill(false);
    let nums1Min = Infinity; // find smallest single digit in nums 1. 
    let nums2Min = Infinity; // find the smallest single digit in nums 2.
    let sharedMin = Infinity; 

    for(const num of nums1){
        seen[num] = true; 
        if(num < nums1Min) nums1Min = num;
    }

    for(const num of nums2){
        if(seen[num] === true) sharedMin = num < sharedMin ? num : sharedMin; 
        if(num < nums2Min) nums2Min = num;
    }
    
    if(sharedMin != Infinity) return sharedMin; 

    return nums1Min < nums2Min ?
        nums1Min * 10 + nums2Min:
        nums2Min * 10 + nums1Min; 

};

const testCases = [
    [[4,1,3],[5,7], 15],
    [[3,5,2,6], [3,1,7], 3]
    
]

let testNumber = 1; 
for(let[nums1, nums2, expected] of testCases){
  const returned = minNumber(nums1, nums2);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}