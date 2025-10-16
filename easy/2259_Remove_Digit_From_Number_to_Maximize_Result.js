// You are given a string number representing a positive integer and a character digit.

// Return the resulting string after removing exactly one occurrence of digit from number such that 
// the value of the resulting string in decimal form is maximized. The test cases are generated such
//  that digit occurs at least once in number.

 

// Example 1:

// Input: number = "123", digit = "3"
// Output: "12"
// Explanation: There is only one '3' in "123". After removing '3', the result is "12".
// Example 2:

// Input: number = "1231", digit = "1"
// Output: "231"
// Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
// Since 231 > 123, we return "231".
// Example 3:

// Input: number = "551", digit = "5"
// Output: "51"
// Explanation: We can remove either the first or second '5' from "551".
// Both result in the string "51".
 

// Constraints:

// 2 <= number.length <= 100
// number consists of digits from '1' to '9'.
// digit is a digit from '1' to '9'.
// digit occurs at least once in number.

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {

    // Helper function to avoid rewriting slice opp. 
    const getSubString = i => number.slice(0, i) + number.slice(i + 1);

    // Check if any instance of digit is less than its right neighbor, remove if it is. 
    for(let i = 0; i < number.length -1; i ++){
        if(number[i] === digit  && number[i] < number[i + 1]) return getSubString(i); 
    }

    // Remove the last instance of digit if no instance of digit is smaller than it right neighbor. 
    return getSubString(number.lastIndexOf(digit)); 
};

const testCases = [
    [ "123", "3", "12"],
    ["1231", "1", "231"],
    ["551", "5", "51"],
    ["19319", "9", "1931"]
]


let testNumber = 1; 
for(let[number, digit, expected] of testCases){
    const returned = removeDigit(number, digit);
    const result = returned === expected ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
}