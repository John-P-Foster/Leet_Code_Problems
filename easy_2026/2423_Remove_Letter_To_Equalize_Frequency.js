// You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one 
// index and remove the letter at that index from word so that the frequency of every letter present in word 
// is equal.

// Return true if it is possible to remove one letter so that the frequency of all letters in word are 
// equal, and false otherwise.

// Note:

// The frequency of a letter x is the number of times it occurs in the string.
// You must remove exactly one letter and cannot choose to do nothing.
 

// Example 1:

// Input: word = "abcc"
// Output: true
// Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
// Example 2:

// Input: word = "aazz"
// Output: false
// Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" 
// is 2, or vice versa. It is impossible to make all present letters have equal frequency.
 

// Constraints:

// 2 <= word.length <= 100
// word consists of lowercase English letters only.

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {

    const charFreq = new Array(26).fill(0); 
    let allSceneOnce = true; 
    for(const char of word){
        charFreq[char.charCodeAt(0) - 97]++
        if(charFreq[char.charCodeAt(0) - 97] > 1) allSceneOnce = false; 
    }

    if(allSceneOnce) return true; // All chars seen only once. 

    let freqGoups = new Map(); 
    for(let i = 0; i < charFreq.length; i++){
        const freq = charFreq[i]; 
        if(freq === 0) continue; 
        if(freq === word.length) return true; // All the same char in word

        freqGoups.set(freq, (freqGoups.get(freq) || 0) + 1)
        if(freqGoups.size > 2) return false;  // More than two different freqs is impossible;
    }

    if(freqGoups.size === 1) return false
    const [[freqOne, groupOneCount],[freqTwo, groupTwoCount]] = [...freqGoups]

    if((freqOne - freqTwo === 1) && (groupOneCount === 1)) return true; // Count of group one is one higher and only has one group
    if((freqTwo - freqOne === 1) && (groupTwoCount === 1)) return true; // Count of group two is one higher and only has one group

    if((freqOne === 1) && (groupOneCount === 1)) return true; // one char appears one time; 
    if((freqTwo === 1) && (groupTwoCount === 1)) return true; // one char appears one time; 


    return false; 
  

};


/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequencyBrute = function(word) {

    for (let i = 0; i < word.length; i++) {

        const freq = new Map();

        // Build frequency skipping index i
        for (let j = 0; j < word.length; j++) {
            if (j === i) continue;
            freq.set(word[j], (freq.get(word[j]) || 0) + 1);
        }

        // Check if all frequencies are equal
        const values = [...freq.values()];
        const first = values[0];

        if (values.every(v => v === first)) {
            return true;
        }
    }

    return false;


};

const testCases = [
    ["abccdd", false], // 1-> 2, 2-> 2
    ["abcc", true],    // 1-> 2, 2-> 1
    ["abbcc", true],   // 1-> 1, 2-> 2
    ["abbccdddeeefff", false], 
    ["abbccc", false], 
    ["abcde", true], 
    ["aacccc", false],
    ["aazz", false],
    ["abc", true],
    ["zz", true],
    ["aaabbbcc", false],

]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = equalFrequency(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})
