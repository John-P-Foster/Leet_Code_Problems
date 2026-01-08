// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length === 0) return ""
    let longestPrefix = ""

    // For each word check that it matches the current prefix character. 
    for(let i = 0; i < strs[0].length; i++){
        let char = strs[0].charAt(i);
        for(let word of strs){
            if( i > word.length -1) return longestPrefix; // return if out of characters. 
            if(word.charAt(i) != char) return longestPrefix; // return when prefixs no longer match. 
        }
        // Add the character to the prefixs up date the index and char. 
        longestPrefix += char; 
    }

    return longestPrefix; 
};

const testCases = [
    [["flower","flow","flight"],"fl"],
    [["dog","racecar","car"], ""],
    [[], ""],
    [["a"], "a"]
]


let testNumber = 1; 
for(let [strs, expected] of testCases){
    const returned = longestCommonPrefix(strs); 
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}` : `Test ${testNumber} ❌ Failed with: ${returned}`;
    testNumber ++; 
    console.log(result);
}