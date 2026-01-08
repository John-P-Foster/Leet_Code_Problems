// Given an integer array sorted in non-decreasing order, there is exactly one integer in 
// the array that occurs more than 25% of the time, return that integer.

 

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 105



/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let count = 1; 
    let current = arr[0]; 
    const target = arr.length * .25; 

    for(let i = 1; i < arr.length; i ++){
        if(arr[i] === current){
            count ++; 
            if(count > target) return arr[i];
        }
        else{
            current = arr[i];
            count = 1; 
        }
    }

    return current; 
};

const testCases = [
    [[1,2,2,6,6,6,6,7,10], 6],
    [[1,1,2,2,3,3,3,3], 3],
    [[1,1], 1],
    [[1],1]
]

let testNumber = 1; 
for(let [arr, expected] of testCases){
    const returned = findSpecialInteger(arr); 
    const result = returned === expected ? `Test # ${testNumber} ✅ Passed with: ${returned}` : `Test # ${testNumber} ❌ Failed with: ${returned}`;
    console.log(result); 
    testNumber ++; 
}