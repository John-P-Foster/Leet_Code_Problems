// You are given a string num, representing a large integer. Return the largest-valued odd integer 
// (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.
 

// Constraints:

// 1 <= num.length <= 105
// num only consists of digits and does not contain any leading zeros.

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {

    for(let i = num.length -1; i >= 0; i --){  
        if(num[i] % 2 === 1){ 
            return num.slice(0, i + 1); 
        }

    }

    return ""
};

const testCases = [
    ["52", "5"],
    ["4206", ""],
    ["35427", "35427"],
    ["35427", "35427"],
    ["1", "1"]
] 


for(let[testNumber, [num, expected]] of testCases.entries()){
  const returned = largestOddNumber(num);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber + 1} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
}