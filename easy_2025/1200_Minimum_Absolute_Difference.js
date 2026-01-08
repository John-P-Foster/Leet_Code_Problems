// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute 
// difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr
 

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in 
// ascending order.

// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]
 

// Constraints:

// 2 <= arr.length <= 105
// -106 <= arr[i] <= 106

/* 
    1.) Sort the Array
    2.) Iterate through the Sorted looking for Min Abs difference by checking i with i + 1. 
    3.) iterate throught the array checking if arr[i] + Min Abs difference is === arr[i +1]
        3.1) Add pairs that pass check to result. 
    4.) return the pairs. 
*/

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    const result = []; 
    let minAbsDif = Infinity; 
    
    arr.sort((a,b) => a -b); 

    for(let i = 0; i < arr.length -1; i ++){
        minAbsDif = Math.min(Math.abs(arr[i] - arr[i + 1]), minAbsDif)
    }

    for(let i = 0; i < arr.length - 1; i++){
        if((arr[i] + minAbsDif) === arr[i + 1]){
            result.push([arr[i], arr[i + 1]]); 
        }
    }


    return result; 
};

const testCases = [
    [[4,2,1,3], [[1,2],[2,3],[3,4]]],
    [[1,3,6,10,15],[[1,3]]],
    [[3,8,-10,23,19,-4,-14,27], [[-14,-10],[19,23],[23,27]]]
]

for(let [input, expected] of testCases){
    const returned = minimumAbsDifference(input); 
    const result = returned.toString() === expected.toString() ? `Passed with: ${returned}` : `Failed with: ${returned}`;
    console.log(result); 
}