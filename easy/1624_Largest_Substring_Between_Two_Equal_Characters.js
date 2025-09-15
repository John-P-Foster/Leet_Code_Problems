// Given a string s, return the length of the longest substring between two equal characters, 
// excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: s = "aa"
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.
// Example 2:

// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc".
// Example 3:

// Input: s = "cbzxy"
// Output: -1
// Explanation: There are no characters that appear twice in s.
 

// Constraints:

// 1 <= s.length <= 300
// s contains only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let lss = -1; 
    const lastSeen = new Map(); 

    for(let i = 0; i < s.length; i ++){

        if(lastSeen.has(s[i])){
            const indexAtLast = lastSeen.get(s[i]);
            const subLength = (i - 1 ) - indexAtLast; 
            lss = Math.max(lss, subLength); 
        }else{
            lastSeen.set(s[i], i );
        }
    }

    return lss; 
};

const testCases = [
    ["aa", 0],
    [ "abca", 2],
    ["cbzxy", -1],
    [ "abcazxyta", 7],
]

let testNumber = 1; 
for(let [s, expected] of testCases){
    const returned = maxLengthBetweenEqualCharacters(s);
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}` : `Test ${testNumber} ❌ Failed with: ${returned}`;
    testNumber ++; 
    console.log(result); 
}