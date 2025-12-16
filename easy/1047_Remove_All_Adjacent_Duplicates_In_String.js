// You are given a string s consisting of lowercase English letters. A duplicate removal consists of 
// choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the
// answer is unique.

 

// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this 
// is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" 
// is possible, so the final string is "ca".
// Example 2:

// Input: s = "azxxzy"
// Output: "ay"
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {

    const findDuplicates = function(s){
        let foundDuplicates = false; 
        for(let i = 0; i < s.length - 1; i ++){
            if(s[i] === s[i + 1]){
                foundDuplicates = true; 
                s = s.slice(0, i) + s.slice(i + 2);
                break; 
            }
        }
        return foundDuplicates ? findDuplicates(s) : s
    }

    return findDuplicates(s); 
};

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicatesOpt = function(s) {
    const stack = new Array(s.length); 
    const stringArr = s.split('');
    let pointer = 0; 

    for(let i = 0; i < s.length; i ++){
        if (pointer > 0 && stack[pointer - 1] === stringArr[i]) {
            pointer --; 
        }else{
            stack[pointer] = stringArr[i]; 
            pointer ++; 
        }
    }
    stack.length = pointer; 
    return stack.join('')
};



const testCases = [
    ["abbaca","ca"],
    ["azxxzy","ay"],
    ["aaaa",""],
    ["aaaaa","a"],
] 

let testNumber = 1; 
for(let[s, expected] of testCases){
  const returned = removeDuplicatesOpt(s);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}