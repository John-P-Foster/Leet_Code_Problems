// 1078. Occurrences After Bigram
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given two strings first and second, consider occurrences in some text of the form "first second third",
//  where second comes immediately after first, and third comes immediately after second.

// Return an array of all the words third for each occurrence of "first second third".

 

// Example 1:

// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]
// Example 2:

// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]
 

// Constraints:

// 1 <= text.length <= 1000
// text consists of lowercase English letters and spaces.
// All the words in text are separated by a single space.
// 1 <= first.length, second.length <= 10
// first and second consist of lowercase English letters.
// text will not have any leading or trailing spaces.

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const result = []
    const words = text.split(` `); 
    for(let i = 0; i < words.length - 2; i ++){
        if((words[i] === first) && (words[i + 1] === second))result.push(words[i + 2]);
    }

    return result;
};

const testCases = [
    ["alice is a good girl she is a good student", "a", "good", ["girl","student"]],
    ["we will we will rock you", "we", "will" , ["we","rock"]],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = findOcurrences(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

