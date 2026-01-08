// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

 

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1
 

// Constraints:

// 0 <= s.length <= 300
// s consists of lowercase and uppercase English letters, digits, or one of the following characters
//  "!@#$%^&*()_+-=',.:".
// The only space character in s is ' '.

/**
 * @param {string} s
 * @return {number}
 */
var foo = function(s) {
  return s.split(" ").filter(s => s.length > 0).length; 
};

const testCases = [
    ["Hello, my name is John", 5],
    [" Hello     Dad", 2],
    ["", 0]
]

let testNumber = 1; 
for(let[s, expected] of testCases){
  const returned = foo(s);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}