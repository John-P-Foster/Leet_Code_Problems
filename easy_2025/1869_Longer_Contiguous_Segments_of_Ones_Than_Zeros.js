// Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than 
// the longest contiguous segment of 0's in s, or return false otherwise.

// For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest
//  continuous segment of 0s has length 3.
// Note that if there are no 0's, then the longest continuous segment of 0's is considered to have
//  a length 0. The same applies if there is no 1's.

 

// Example 1:

// Input: s = "1101"
// Output: true
// Explanation:
// The longest contiguous segment of 1s has length 2: "1101"
// The longest contiguous segment of 0s has length 1: "1101"
// The segment of 1s is longer, so return true.
// Example 2:

// Input: s = "111000"
// Output: false
// Explanation:
// The longest contiguous segment of 1s has length 3: "111000"
// The longest contiguous segment of 0s has length 3: "111000"
// The segment of 1s is not longer, so return false.
// Example 3:

// Input: s = "110100010"
// Output: false
// Explanation:
// The longest contiguous segment of 1s has length 2: "110100010"
// The longest contiguous segment of 0s has length 3: "110100010"
// The segment of 1s is not longer, so return false.
 

// Constraints:

// 1 <= s.length <= 100
// s[i] is either '0' or '1'.

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let currentOnes = 0;
    let maxOnes = 0;
    let currentZeros = 0;
    let maxZeros = 0;
  
    for (const char of s) {
      if (char === '0') {
        currentZeros++;
        if(currentZeros > maxZeros) maxZeros = currentZeros;
        currentOnes = 0;
      } else {
        currentOnes++;
        if(currentOnes > maxOnes) maxOnes = currentOnes; 
        currentZeros = 0;
      }
    }
  
    return maxOnes > maxZeros;
};


const testCases = [
    ["1101", true],
    ["111000", false],
    ["110100010", false],
    ["0110100010", false],
  ] 
  

  for(let[testNumber, [s, expected]] of testCases.entries()){
    const returned = checkZeroOnes(s);
    const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber + 1} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
  }