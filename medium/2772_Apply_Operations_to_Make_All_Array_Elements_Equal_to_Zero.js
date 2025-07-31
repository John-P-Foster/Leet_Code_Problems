// You are given a 0-indexed integer array nums and a positive integer k.

// You can apply the following operation on the array any number of times:

// Choose any subarray of size k from the array and decrease all its elements by 1.
// Return true if you can make all the array elements equal to 0, or false otherwise.

// A subarray is a contiguous non-empty part of an array.

 

// Example 1:

// Input: nums = [2,2,3,1,1,0], k = 3
// Output: true
// Explanation: We can do the following operations:
// - Choose the subarray [2,2,3]. The resulting array will be nums = [1,1,2,1,1,0].
// - Choose the subarray [2,1,1]. The resulting array will be nums = [1,1,1,0,0,0].
// - Choose the subarray [1,1,1]. The resulting array will be nums = [0,0,0,0,0,0].
// Example 2:

// Input: nums = [1,3,1,1], k = 2
// Output: false
// Explanation: It is not possible to make all the array elements equal to 0.
 

// Constraints:

// 1 <= k <= nums.length <= 105
// 0 <= nums[i] <= 106

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Failed to pass all checks but was close. 
var checkArray = function(nums, k) {

    const subOne = function(index){
        for(let i = index; i < index + k; i++){ 
            nums[i] = nums[i] - 1; 
        }
    }

    let current = 0; 
    while(current < nums.length - k){
        while(nums[current] > 0){
            subOne(current); 
        }
        current ++; 
    }
    while(current < nums.length){
        if(nums[current] != 0){
            return false; 
        }
        current ++; 
    }

    return true; 
};

var checkArrayOPT = function(nums, k) {
    const n = nums.length;
    const diff = new Array(n + 1).fill(0);  // difference array
    let currSub = 0;

    for (let i = 0; i < n; i++) {
        currSub += diff[i];  // apply pending operations
        let needed = nums[i] - currSub;

        if (needed < 0) {
            // we've subtracted too much, impossible
            return false;
        }
        if (needed > 0) {
            if (i + k > n) return false;  // can't apply operation, too close to end
            currSub += needed;            // start subtracting
            diff[i + k] -= needed;        // stop subtracting after window
        }
    }

    return true;
};


const testCases = [
    [[2,2,3,1,1,0], 3, true],
    [[1,3,1,1], 2, false],
    [[1,1,1,1,1], 4, false],
    [[3,3,3], 2, false],  // Not possible, because the overlaps won't evenly reduce
    [[1,2,1], 3, false],   // Whole array must be selected as one block, not enough reduction
    [[0,0,1], 2, false] , // Can’t reduce last 1
    [[1,1,1,0], 3, true],
    [[60,72,87,89,63,52,64,62,31,37,57,83,98,94,92,77,94,91,87,100,91,91,50,26], 4, true]
]


for(let [input, k, expected] of testCases){
    let returned = checkArrayOPT(input, k); 
    let result = returned === expected ? `Passed with: ${returned}` : `Failed got: ${returned}`; 
    console.log(result); 
}