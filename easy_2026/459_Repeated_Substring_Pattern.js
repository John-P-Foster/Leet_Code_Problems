// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies 
// of the substring together.

 

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length
    for(let len = 1; len <= n / 2; len ++){
        if(n % len !== 0) continue; 

        let repeats = true; 
        for(let i = 0; i < n; i ++){
            if(s[i] !== s[i % len]){
                repeats = false; 
                break; 
            }
        }

        if(repeats) return true; 
    }

    return false; 
};

const testCases = [
    ["abab", true],
    ["bb", true],
    ["aba", false],
    ["abaabaaba", true],
    ["abcabcabcabc", true],
    ["aabaabaabaab", true],
    
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = repeatedSubstringPattern(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})
