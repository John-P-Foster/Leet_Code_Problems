// You are given an integer array arr. Sort the integers in the array in ascending order 
// by the number of 1's in their binary representation and in case of two or more
//  integers have the same number of 1's you have to sort them in ascending order.

// Return the array after sorting it.

 

// Example 1:

// Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]
// Example 2:

// Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
// Output: [1,2,4,8,16,32,64,128,256,512,1024]
// Explantion: All integers have 1 bit in the binary representation, you should just sort
//  them in ascending order.
 

// Constraints:

// 1 <= arr.length <= 500
// 0 <= arr[i] <= 104

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const onesInBits = Array.from({length: 14}, ()=>[]); 

    arr = arr.sort((a,b) => a - b);

    for(let num of arr){
        let digit = num; 
        let ones = 0; 
        while(digit !== 0){
            ones += (digit & 1); 
            digit >>>= 1; 
        }
        onesInBits[ones].push(num)
    }

    return onesInBits.flat(); 
};

const testCases = [
    [[0,1,2,3,4,5,6,7,8],[0,1,2,4,8,3,5,6,7]],
    [[1024,512,256,128,64,32,16,8,4,2,1],[1,2,4,8,16,32,64,128,256,512,1024] ]
]

let testNumber =1; 
for(let [arr, expected] of testCases){
    const returned = sortByBits(arr);
    const result = returned.toString() === expected.toString() ? `Test ${testNumber} ✅ Passed with: ${returned}` : `Test ${testNumber} ❌ Failed with: ${returned}`;
    testNumber ++; 
    console.log(result); 
}