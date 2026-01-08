// Given a positive integer n, write a function that returns the number of set bits in its 
// binary representation (also known as the Hamming weight).

 

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.

// Example 3:

// Input: n = 2147483645

// Output: 30

// Explanation:

// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 

// Constraints:

// 1 <= n <= 231 - 1
 

// Follow up: If this function is called many times, how would you optimize it?

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0; 

    while(n !== 0){
        count += (n & 1); 
        n >>>= 1
    }

    return count; 
};

const testCases = [
    [11, 3],
    [128, 1],
    [2147483645, 30]
]

let testNumber = 1; 
for(let [n, expected] of testCases){
    const returned = hammingWeight(n);
    const result = returned === expected ? `Test #${testNumber} ✅ Passed with: ${returned}` : `Test #${testNumber} ❌ Failed with: ${returned}`;
    testNumber ++; 
    console.log(result);  
}