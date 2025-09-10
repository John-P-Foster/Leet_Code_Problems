// Given a string of English letters s, return the greatest English letter which occurs as both a
//  lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter 
//  exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.

 

// Example 1:

// Input: s = "lEeTcOdE"
// Output: "E"
// Explanation:
// The letter 'E' is the only letter to appear in both lower and upper case.
// Example 2:

// Input: s = "arRAzFif"
// Output: "R"
// Explanation:
// The letter 'R' is the greatest letter to appear in both lower and upper case.
// Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.
// Example 3:

// Input: s = "AbCdEfGhIjK"
// Output: ""
// Explanation:
// There is no letter that appears in both lower and upper case.
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase and uppercase English letters.


/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let seen = new Set; 
    let greatest = ""
    
    for(let char of s){
        let opposite =  char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase(); 
        if(seen.has(opposite)){
            greatest = char.toUpperCase() > greatest ? char.toUpperCase() : greatest; 
        }else{
            seen.add(char); 
        }
    }

    return greatest; 
};

const testCases = [
    ["lEeTcOdE", "E"],
    ["arRAzFif", "R"],
    ["AbCdEfGhIjK", ""]
]

let testNumber = 1; 
for(let[s, expected] of testCases){
    const returned = greatestLetter(s);
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}` : `Test ${testNumber} ❌ Failed with: ${returned}`;
    testNumber ++;
    console.log(result);
} 