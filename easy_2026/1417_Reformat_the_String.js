// You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English
//      letters and digits).

// You have to find a permutation of the string where no letter is followed by another letter and no digit 
// is followed by another digit. That is, no two adjacent characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to reformat the string.

 

// Example 1:

// Input: s = "a0b1c2"
// Output: "0a1b2c"
// Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b"
//  are also valid permutations.
// Example 2:

// Input: s = "leetcode"
// Output: ""
// Explanation: "leetcode" has only characters so we cannot separate them by digits.
// Example 3:

// Input: s = "1229857369"
// Output: ""
// Explanation: "1229857369" has only digits so we cannot separate them by characters.
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters and/or digits.

/**
 * @param {string} s
 * @return {string}
 */
var foo = function(s) {
    let intStack = [];
    let charStack = []; 

    for(const cur of s){
        if(Number.isInteger(+cur)){
            intStack.push(cur);
        }else{
            charStack.push(cur); 
        }
    }

    if(Math.abs(intStack.length - charStack.length) > 1) return ''

    const [first, second] = intStack.length > charStack.length ? [intStack, charStack] : [charStack, intStack];

    let result = [];

    for(let i = 0; i < s.length; i ++){
        result.push(i % 2 === 0 ? first.pop(): second.pop()); 
    }

    return result.join('');  
};


const testCases = [
    ["0a1b2c", "a0b1c2"],
    ['', "leetcode"],
    ['', "1229857369"]

]

testCases.forEach((test, testNumber) => {
  let [expected, ...params] = test
  const returned = foo(...params);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber + 1} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
})