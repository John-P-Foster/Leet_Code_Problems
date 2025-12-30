// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive 
// elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic
//  progression. Otherwise, return false.

 

// Example 1:

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, 
// between each consecutive elements.
// Example 2:

// Input: arr = [1,2,4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
 

// Constraints:

// 2 <= arr.length <= 1000
// -106 <= arr[i] <= 106

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {

    arr.sort((a, b)=> b - a)

    const diff = arr[0] - arr[1]; 
    for(let i = 1; i < arr.length - 1; i++){
        if((arr[i] - arr[i + 1] != diff)) return false; 
    }

    return true; 
};

const testCases = [
    [[3,5,1], true],
    [[1,2,4], false],
    [[1,2], true],
    [[-2, -1, 0, 1, 2], true]
] 
  

  for(let[testNumber, [arr, expected]] of testCases.entries()){
    const returned = canMakeArithmeticProgression(arr);
    const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber + 1} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
  }