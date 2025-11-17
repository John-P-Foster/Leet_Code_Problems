// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence
//  is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false
 

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {

    let alphabet = new Array(26).fill(0); 

    for(const char of sentence){
        alphabet[char.charCodeAt(0) - 97] = 1; 
    }

    return alphabet.reduce((a, b) => a + b , 0) === 26 
};

const testCases = [
    ["athequickbrownfoxjumpsoverthelazydog", true],
    ["leetcode", false]

]

let testNumber = 1; 
for(let[sentence, expected] of testCases){
  const returned = checkIfPangram(sentence);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}