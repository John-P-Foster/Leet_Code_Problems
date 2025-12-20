// Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies 
// of each letter from 'a' to 'z' between word1 and word2 is at most 3.

// Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost 
// equivalent, or false otherwise.

// The frequency of a letter x is the number of times it occurs in the string.

 

// Example 1:

// Input: word1 = "aaaa", word2 = "bccb"
// Output: false
// Explanation: There are 4 'a's in "aaaa" but 0 'a's in "bccb".
// The difference is 4, which is more than the allowed 3.
// Example 2:

// Input: word1 = "abcdeef", word2 = "abaaacc"
// Output: true
// Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
// - 'a' appears 1 time in word1 and 4 times in word2. The difference is 3.
// - 'b' appears 1 time in word1 and 1 time in word2. The difference is 0.
// - 'c' appears 1 time in word1 and 2 times in word2. The difference is 1.
// - 'd' appears 1 time in word1 and 0 times in word2. The difference is 1.
// - 'e' appears 2 times in word1 and 0 times in word2. The difference is 2.
// - 'f' appears 1 time in word1 and 0 times in word2. The difference is 1.
// Example 3:

// Input: word1 = "cccddabba", word2 = "babababab"
// Output: true
// Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
// - 'a' appears 2 times in word1 and 4 times in word2. The difference is 2.
// - 'b' appears 2 times in word1 and 5 times in word2. The difference is 3.
// - 'c' appears 3 times in word1 and 0 times in word2. The difference is 3.
// - 'd' appears 2 times in word1 and 0 times in word2. The difference is 2.
 

// Constraints:

// n == word1.length == word2.length
// 1 <= n <= 100
// word1 and word2 consist only of lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const freq = new Array(26).fill(0)

    for(let i = 0; i < word1.length; i ++){
        freq[(word1[i].charCodeAt(0) - 97)] ++;
        freq[(word2[i].charCodeAt(0) - 97)] --;
    }

    for(const count of freq){
        if(Math.abs(count) > 3) return false; 
    }

    return true; 
};

const testCases = [
    ["aaaa", "bccb", false],
    ["abcdeef", "abaaacc", true],
    ["cccddabba", "babababab", true],
  ] 
  
  let testNumber = 1; 
  for(let[word1, word2, expected] of testCases){
    const returned = checkAlmostEquivalent(word1, word2);
    const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
  }