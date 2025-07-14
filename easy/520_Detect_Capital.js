// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) { // My version with O(n) and Space O(1)
    function isCapital(char) {
        return /[A-Z]/.test(char);
      }
    
    if(word.length <= 1) return true; 

    if(isCapital(word[1])){
        if(!isCapital(word[0])){
            return false;
        }
        for(let i = 2; i < word.length; i ++){
            if(!isCapital(word[i])){
                return false; 
            }
        }
    }else{
        for(let i = 1; i < word.length; i ++){
            if(isCapital(word[i])){
                return false; 
            }
        }
    }

    return true; 
};

var detectCapitalUseReadability = function(word){ // Easy to read but with O(n) time / space 
    return(word === word.toUpperCase() || word.slice(1) === word.slice(1).toLowerCase())
}

let testCases = [
    ["USA", true],
    ["Google", true], 
    ["FlaG", false],
]

for(test of testCases){
    let result = detectCapitalUseReadability(test[0]) === test[1] ? 'Passed' : "Failed"
    console.log(result);
}