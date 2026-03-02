// Given an integer n, return any array containing n unique integers such that they add up to 0.

 

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]
 

// Constraints:

// 1 <= n <= 1000

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let result = []
    if(n % 2 === 1) result.push(0);

    let cur = 1; 
    while(result.length < n){
        result.push(cur, -cur); 
        cur++; 
    }

    return result; 
};

const testCases = [
    [5, [-7,-1,1,3,4]],
    [3, [-1,0,1]],
    [1, [0]],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = sumZero(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

