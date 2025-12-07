// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let l = 0; 
    let r = s.length - 1; 

    while(l < r - l){
        const temp = s[l]
        s[l] = s[r - l]; 
        s[r - l] = temp;
        l ++; 
    }

    return s
};

const testCases = [
    [["h","e","l","l","o"], ["o","l","l","e","h"]],
    [["H","a","n","n","a","h"], ["h","a","n","n","a","H"]],
]


let testNumber = 1; 
for(let[s, expected] of testCases){
  const returned = reverseString(s);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}