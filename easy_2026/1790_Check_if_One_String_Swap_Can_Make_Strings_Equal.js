// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two 
// indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly 
// one of the strings. Otherwise, return false.

 

// Example 1:

// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".
// Example 2:

// Input: s1 = "attack", s2 = "defend"
// Output: false
// Explanation: It is impossible to make them equal with one string swap.
// Example 3:

// Input: s1 = "kelb", s2 = "kelb"
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.
 

// Constraints:

// 1 <= s1.length, s2.length <= 100
// s1.length == s2.length
// s1 and s2 consist of only lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {

    if(s1 === s2) return true; 

    for(let i = 0; i < s1.length; i ++){
        if(s1[i] === s2[i]) continue; // search for mismatch

        let j = i + 1; 
        if(j === s1.length) return false 

        while(j < s1.length && s1[j] === s2[j]) j++; // search for index of next mismatch

        if(j === s1.length) return false 
        // Swap mismatch and compair string; 
        let string1 = s1.split('');
        let temp = string1[i]; 
        string1[i] = string1[j];
        string1[j] = temp; 

        return string1.join('') === s2; 

    }

    return false; 
};


const testCases = [
    ["bank", "kanb", true],
    ["attack", "defend", false],
    ["kelb", "kelb", true],
    ["abcd", "abcf", false],
    ["abzd", "abcd", false],
    [s1 = "abcd", "badc", false],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = areAlmostEqual(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

