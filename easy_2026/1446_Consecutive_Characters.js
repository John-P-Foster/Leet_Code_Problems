// he power of the string is the maximum length of a non-empty substring that contains only one unique 
// character.

// Given a string s, return the power of s.

 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let maxPower = 1; 
    let curPower = 1; 
    for(let i = 1; i < s.length; i ++){
        if(s[i] === s[i -1]){
            curPower ++; 
        }else{
            maxPower = maxPower > curPower ? maxPower : curPower; 
            curPower = 1; 
        }
    }
    return maxPower; 
};

const testCases = [
    [2, "leetcode"],
    [5, "abbcccddddeeeeedcba"],
    [1, `letcode`],
    [2, `cc`]

]

testCases.forEach((test, testNumber) => {
  let [expected, ...params] = test
  const returned = maxPower(...params);
  const result = returned === expected ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber + 1} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
})