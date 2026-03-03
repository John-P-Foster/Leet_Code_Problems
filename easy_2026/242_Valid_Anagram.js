// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length != t.length) return false
    let charCount = new Array(26).fill(0);


    for(let i = 0; i < s.length; i ++){
        charCount[s.charCodeAt(i) - 97] ++; 
        charCount[t.charCodeAt(i) - 97] --; 
    }

    for(let i = 0; i < charCount.length; i ++){
        if(charCount[i] !== 0) return false; 
    }

    return true; 
};

const testCases = [
    ["anagram", "nagaram", true],
    ["rat", "car", false],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = isAnagram(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})
