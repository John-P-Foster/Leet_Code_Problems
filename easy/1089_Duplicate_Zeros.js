// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining
//  elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications 
// to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZerosNSpace = function(arr) {
    const c = [...arr]; 
  
    for(let i = 0, j = 0 ; i < arr.length; i++, j++){
        arr[i] = c[j];
        if(c[j] === 0){
            i += 1; 
            if(i < arr.length) arr[i] = 0; 
        }
    }

    return arr; // Return arr only for the test case. 
};

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zeros = 0;

    for (const num of arr) {
        if (num === 0) zeros++;
    }

    const n = arr.length;
    let i = n - 1;
    let j = n + zeros - 1;

    while (i < j) {
        if (j < n) arr[j] = arr[i];

        if (arr[i] === 0) {
            j--;
            if (j < n) arr[j] = 0;
        }

        i--;
        j--;
    }

    return arr; // only for testing


};

const testCases = [
    [[1,0,2,3,0,4,5,0], [1,0,0,2,3,0,0,4]],
    [[1,2,3],[1,2,3]],
    [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0]],
    [[8,5,0,9,0,3,4,7], [8,5,0,0,9,0,0,3]],
    [[8,4,5,0,0,0,0,7], [8,4,5,0,0,0,0,0]]
]


let testNumber = 1; 
for(let[arr, expected] of testCases){
  const returned = duplicateZerosNSpace(arr);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}