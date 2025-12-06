// Given a string s, return true if the s can be palindrome after deleting at 
// most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0; 
    let right = s.length -1; 

    while(left < right){
        if(s[left] != s[right]){
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
        }
        left ++;
        right--; 
    }

    return true; 

};

const isPalindrome = function(s, l, r){
    while(l < r){
        if(s[l] != s[r]) return false; 
        l ++;
        r --; 
    }
    return true; 
}

const testCases = [
    ["aba", true],
    ["abca", true],
    ["abddbac", true],
    ["abddba", true],
    [ "abc", false], 
    ["abcda", false],
    ["ebcbbececabbacecbbcbe", true]
]

let testNumber = 1; 
for(let[s, expected] of testCases){
  const returned = validPalindrome(s);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}