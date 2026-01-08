// Given an array of integers arr, and three integers a, b and c. You need to find the number of good 
// triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

 

// Example 1:

// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
// Example 2:

// Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// Output: 0
// Explanation: No triplet satisfies all conditions.
 

// Constraints:

// 3 <= arr.length <= 100
// 0 <= arr[i] <= 1000
// 0 <= a, b, c <= 1000

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let goodTrips = 0;
    
    for(let i = 0; i < arr.length - 2; i ++){
        for(let j = i + 1; j < arr.length - 1; j ++){
            for(let k = j + 1; k < arr.length; k++){
                const test1 = Math.abs(arr[i] - arr[j]) <= a 
                const test2 = Math.abs(arr[j] - arr[k]) <= b 
                const test3 = Math.abs(arr[i] - arr[k]) <= c 
                if(test1 && test2 && test3) goodTrips ++ 
            }
        }
    }
    
    return goodTrips; 
};


const testCases = [
    [[3,0,1,1,9,7], 7, 2, 3, 4],
    [[1,1,2,2,3], 0, 0, 1, 0]
]

let testNumber = 1; 
for(let[arr, a, b, c, expected] of testCases){
    const returned = countGoodTriplets(arr, a, b, c);
    const result = returned === expected ? ` ✅ Passed` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
}
