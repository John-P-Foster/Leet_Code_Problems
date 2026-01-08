// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim(); 
    const sEnd = s.length
    for(let i = 1; sEnd - i >= 0; i ++){
        if(s[sEnd - i] === " ")return i - 1; 
    }
    return s.length; 
};

const testCases = [
    [ "Hello World", 5],
    ["   fly me   to   the moon  ",  4],
    ["luffy is still joyboy", 6],
    ["joyboy", 6]
]


let testNumber = 1; 
for(let[s, expected] of testCases){
    const returned = lengthOfLastWord(s);
    const result = returned === expected ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
}