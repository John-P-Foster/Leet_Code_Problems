// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more 
// than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let result = s.split('');
    let vowels = []; 

    for(let i = 0; i < result.length; i++){
        let char = result[i]; 
        
        if(
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u' ||
            char === 'A' ||
            char === 'E' ||
            char === 'I' ||
            char === 'O' ||
            char === 'U'
        ){ 
            vowels.push(char);
        }
    }
    
    if(vowels.length === 0) return s; 

    for(let i = 0; i < result.length; i++){
        let char = result[i]; 
        if(
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u' ||
            char === 'A' ||
            char === 'E' ||
            char === 'I' ||
            char === 'O' ||
            char === 'U'
        ){ result[i] = vowels.pop();}
    }

    return result.join(''); 
};

const testCases = [
    ["IceCreAm", "AceCreIm"],
    ["leetcode", "leotcede"],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = reverseVowels(...params);
const result = returned === expected? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})
