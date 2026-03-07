// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let n = Math.max(a.length, b.length);
    let result = new Array(n + 1); 

    let carry = 0; 
    for(let i = 1; i <= n; i ++ ){

        let sum = (+a[a.length - i] || 0) + (+b[b.length - i] || 0) + carry; 

        result[result.length - i] = sum % 2; 
        carry = sum >> 1;
    
    }

    if (carry) result[0] = 1;

    return result.join('');
};

const testCases = [
    ["11", "1","100"],
    ["1010", "1011","10101"],
    ["1010", "011","1101"],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = addBinary(...params);
const result = returned === expected ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

//  01
//  11
// 100

//  1011
//  1010
// 10101