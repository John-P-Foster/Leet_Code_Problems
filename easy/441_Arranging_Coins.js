// You have n coins and you want to build a staircase with these coins. The staircase consists
//  of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

 

// Example 1:


// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.
// Example 2:


// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.
 

// Constraints:

// 1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let rowCoins = 0; 
    while(n > rowCoins){
        rowCoins ++;
        n = n - rowCoins; 

    }
    return rowCoins;  
};

const testCases = [
    [5, 2],
    [8, 3],
    [0,0]
]

let testNumber = 1; 
for(let[ n, expected] of testCases){
    const returned = arrangeCoins(n);
    const result = returned === expected ?  ` ✅ Passed `: `❌ Failed `; 
    console.log(`Test ${testNumber}${result} with: ${returned}`); 
    testNumber ++; 
}