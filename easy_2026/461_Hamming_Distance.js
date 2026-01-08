// The Hamming distance between two integers is the number of positions at which the corresponding bits 
// are different.

// Given two integers x and y, return the Hamming distance between them.

 

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1
 

// Constraints:

// 0 <= x, y <= 231 - 1

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let dist = 0; 
    if(x === y) return dist; 
    let bitLength = Math.floor(Math.log2(Math.max(x, y))) + 1

    for(let i = 0; i < bitLength; i ++){
        const xLastBit = x & 1; 
        const yLastBit = y & 1;
        if(xLastBit != yLastBit) dist ++; 
        x = x >> 1;
        y = y >> 1;  
    }

    return dist; 
};

const testCases = [
    [2, 1, 4],
    [1, 3, 1],
    [0, 3, 3],
    [0, 0, 0],
    [1, 0, 1],
] 

const foo = hammingDistance; 
testCases.forEach((test, testNumber) => {
  let [expected, ...params] = test
  const returned = foo(...params);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber + 1} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
})