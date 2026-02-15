// Given a string text, you want to use the characters of text to form as many instances of the word 
// "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be 
// formed.

 

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
 

// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let count = {'b':0, 'a':0, 'l':0, 'o':0, 'n':0 };

    for(const char of text){
        if(count[char] !== undefined){
            count[char] ++; 
        }
    }

    return Math.min(
        count.a, 
        count.b,
        Math.floor(count.l / 2),
        Math.floor(count.o / 2),
        count.n
    )
};


const testCases = [
    ["nlaebolko", 1],
    ["loonbalxballpoon", 2],
    ["leetcode", 0],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = maxNumberOfBalloons(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

