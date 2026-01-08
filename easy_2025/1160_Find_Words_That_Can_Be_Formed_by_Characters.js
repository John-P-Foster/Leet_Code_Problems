// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used 
//     once for each word in words).

// Return the sum of lengths of all good strings in words.

 

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// words[i] and chars consist of lowercase English letters.


/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var foo = function(words, chars) {

    let mapCharFreq = function(string){
        const freqArray = new Array(26).fill(0);

        for(let i = 0; i < string.length; i ++){
            const index = string.charCodeAt(i) - 97;
            freqArray[index] ++;  
        }

        return freqArray; 
    }

    let compareCharFreqMaps = function(mapA, mapB){
        for(let i = 0; i < 26; i ++){
            if(mapA[i] > mapB[i]) return false
        }
        return true; 
    }

    let sum = 0; 
    const charsFreqMap = mapCharFreq(chars);

    for(let word of words){
        const wordCharFreqMap = mapCharFreq(word); 
        const canBeMapped = compareCharFreqMaps(wordCharFreqMap, charsFreqMap);
        if(canBeMapped){
            sum += word.length; 
        }
    }

    return sum; 
};


const testCases = [
    [["cat","bt","hat","tree"],"atach", 6],
    [["hello","world","leetcode"], "welldonehoneyr", 10 ]
]

let testNumber = 1; 
for(let[words, chars, expected] of testCases){
  const returned = foo(words, chars);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}