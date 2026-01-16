// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

 

// Example 1:

// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:

// Input: n = 25
// Output: 1389537
 

// Constraints:

// 0 <= n <= 37
// The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n <= 2) return n > 0 ? 1 : 0; 

    let first = 0
    let second = 1
    let third = 1

    for(let i = 3; i <= n; i ++){
        let current = first + second + third; 
        first = second; 
        second = third; 
        third = current; 
    }
    
    return third; 
};

const testCases = [
    [1, 1],
    [1, 2],
    [2, 3],
    [4, 4],
    [1389537, 25]
] 

const foo = tribonacci; 
testCases.forEach((test, testNumber) => {
  let [expected, ...params] = test
  const returned = foo(...params);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber + 1} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
})