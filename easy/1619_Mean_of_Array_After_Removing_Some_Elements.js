// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5%
//  and the largest 5% of the elements.

// Answers within 10-5 of the actual answer will be considered accepted.

 

// Example 1:

// Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
// Output: 2.00000
// Explanation: After erasing the minimum and the maximum values of this array, all elements are equal
// to 2, so the mean is 2.
// Example 2:

// Input: arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
// Output: 4.00000
// Example 3:

// Input: arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]
// Output: 4.77778
 

// Constraints:

// 20 <= arr.length <= 1000
// arr.length is a multiple of 20.
// 0 <= arr[i] <= 105

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b) => a - b); 
    length = arr.length; 
    let numberToRemove = length * 0.05;
    let sum = 0; 

    for(let i = numberToRemove; i < length - numberToRemove; i ++){
        sum += arr[i]; 
    }

    return sum / (length - (numberToRemove * 2))


};


const testCases = [
   [[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3], 2.00000],
    [[6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0], 4.00000],
    [[6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4], 4.77778]
]


for(let test of testCases){
    let result = trimMean(test[0]); 
    console.log(result);
    result = result === test[1] ? "Passed" : "Failed"; 
    console.log(result); 
}