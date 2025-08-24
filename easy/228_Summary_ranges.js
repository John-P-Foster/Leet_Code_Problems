// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
// That is, each element of nums is covered by exactly one of the ranges, and there is no integer x 
// such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
 

// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    // Return base cases
    if(nums.length === 0) return []

    // Answer will be an array of ranges.
    const ranges = []

    // Start and end to keep track of current range.
    let start = nums[0];
    let end = null; 

    // Scan the entire nums array.
    for(let i = 0; i < nums.length; i ++){
        // Checking each element against the next element for +1;
        if(i !== nums.length - 1 && nums[i] + 1 === nums[i + 1]) continue;
        
        // Check failed so set end to current index
        end = nums[i]; 

        // Create String based on start and end being different.  
        ranges.push(start === end ? `${start}` : `${start}->${end}`); 

        // resting the start
        start = nums[i +1]; 
    }

    return ranges; 
};

function sortedArrayWithIncreasingValues(size, max){
    let array = Array.from({length: size}, () => Math.floor(Math.random() * max))
    array.sort((a,b) => a - b);

    array = [...new Set(array)]; 
    return array; 
}

const testCases = [
    [[0,1,2,4,5,7],["0->2","4->5","7"]],
    [[0,2,3,4,6,8,9],["0","2->4","6","8->9"]],
    [[], []],
    [[0,2],["0","2"]],
    [sortedArrayWithIncreasingValues(300, 100), []]
]

let testNumber = 1; 
for(let[nums, expected] of testCases){
    const returned = summaryRanges(nums).toString(); 
    const result = expected.toString() === returned ? `Test ${testNumber} ✅ Passed with: ${returned}`: `Test ${testNumber} ❌ Failed with: ${returned}`
    testNumber ++; 
    console.log(result);
}

