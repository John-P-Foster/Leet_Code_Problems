// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
// ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 

// Constraints:

// 0 <= n <= 105
 

// Follow up:

// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = new Array(n + 1).fill(0);

    for(let i = 0; i <= n; i ++){
        ans[i] = ans[ i >> 1] + (i & 1);
        console.log(i >> 1); 
    }

    return ans; 
};


let testCases = [1, 2, 5];


for(let test of testCases){
    console.log(countBits(test));
}


var countBitsOptimum = function(n) {
    let dp = Array(n+1).fill(0);
    let offset = 1;

    for(let i = 1; i <= n; i++) {
        if (offset * 2 == i) offset = i;

        dp[i] = 1 + dp[i - offset];
    }

    return dp;

};