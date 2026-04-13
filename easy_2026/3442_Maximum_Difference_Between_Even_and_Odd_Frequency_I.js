// You are given a string s consisting of lowercase English letters.

// Your task is to find the maximum difference diff = freq(a1) - freq(a2) between the frequency of characters 
// a1 and a2 in the string such that:

// a1 has an odd frequency in the string.
// a2 has an even frequency in the string.
// Return this maximum difference.

 

// Example 1:

// Input: s = "aaaaabbc"

// Output: 3

// Explanation:

// The character 'a' has an odd frequency of 5, and 'b' has an even frequency of 2.
// The maximum difference is 5 - 2 = 3.
// Example 2:

// Input: s = "abcabcab"

// Output: 1

// Explanation:

// The character 'a' has an odd frequency of 3, and 'c' has an even frequency of 2.
// The maximum difference is 3 - 2 = 1.
 

// Constraints:

// 3 <= s.length <= 100
// s consists only of lowercase English letters.
// s contains at least one character with an odd frequency and one with an even frequency.

/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let freq = new Array(26).fill(0); 

    for(const char of s){
        let ascii = char.charCodeAt(0) - 97; 
        freq[ascii] ++; 
    }

    let maxOdd = -Infinity; 
    let minEven = Infinity; 

    for(const count of freq){
        
        if(count === 0) continue; 

        if(count % 2 === 0){
            minEven = Math.min(minEven, count);
        }else{
            maxOdd = Math.max(maxOdd, count)
        }
    }

    return maxOdd - minEven; 
};


const testCases = [
    ["aaaaabbc", 3],
    ["abcabcab", 1],

]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = maxDifference(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

