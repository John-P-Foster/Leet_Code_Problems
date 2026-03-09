// A fancy string is a string where no three consecutive characters are equal.

// Given a string s, delete the minimum possible number of characters from s to make it fancy.

// Return the final string after the deletion. It can be shown that the answer will always be unique.

 

// Example 1:

// Input: s = "leeetcode"
// Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode".
// Example 2:

// Input: s = "aaabaaaa"
// Output: "aabaa"
// Explanation:
// Remove an 'a' from the first group of 'a's to create "aabaaaa".
// Remove two 'a's from the second group of 'a's to create "aabaa".
// No three consecutive characters are equal, so return "aabaa".
// Example 3:

// Input: s = "aab"
// Output: "aab"
// Explanation: No three consecutive characters are equal, so return "aab".
 

// Constraints:

// 1 <= s.length <= 105
// s consists only of lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let chars = [s[0]];
    let lastChar = s[0]; 
    let charCount = 1; 
    
    for(let i = 1; i < s.length; i++){ 
        if(s[i] === lastChar){ 
            charCount++; 
            if(charCount > 2) continue;
        }else{ 
            lastChar = s[i]; 
            charCount = 1; 
        } 
        chars.push(s[i]); 
    } 
    
    return chars.join('');
};

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyStringTwo = function(s) {
    if(s.length < 3) return s; 

    let result = []; 
    result.push(s[0], s[1]);

    for(let i = 2; i < s.length; i++){
        if(s[i - 2] === s[i] && s[i - 1] === s[i]){
            continue; 
        }else{
            result.push(s[i])
        }
    }

    return result.join(''); 
};

const testCases = [
    ["leeetcode", "leetcode"],
    ["aaabaaaa", "aabaa"],
    ["aab", "aab"],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = makeFancyString(...params);
const result = returned === expected? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})
