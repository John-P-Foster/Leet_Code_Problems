// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting 
// some (can be none) of the characters without disturbing the relative positions of the remaining characters.
//  (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length === 0) return true;
    let subStingI = 0; 
    for(let i = 0; i < t.length; i ++){
        if(t[i] === s[subStingI]){
            subStingI ++; 
            if(subStingI === s.length) return true; 
        }
    }
    return false; 
};

const testCases = [
    ["abc", "ahbgdc", true],
    ["axc", "ahbgdc", false],
    ["", "ahbgdc", true],
]


let testNumber = 1; 
for(let[s, t, expected] of testCases){
    const returned = isSubsequence(s,t);
    const result = returned === expected ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
}