// Given a string s, reverse the order of characters in each word within a sentence while
//  still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" "); 
     
    for(let i = 0; i < words.length; i ++){

        words[i] = words[i].split('').reverse().join('')
        
    }
    
    return  words.join(" "); 
};

const testCases = [
    ["Let's take LeetCode contest", "s'teL ekat edoCteeL tsetnoc"],
    ["Mr Ding", "rM gniD"]
]

let testNumber = 1; 
for(let [s, expected] of testCases){
    const returned = reverseWords(s);
    const result = returned === expected ? "✅ Passed" : "❌ Failed"; 
    console.log(`Test ${testNumber} ${result} with: ${returned}`); 
    testNumber ++; 
}