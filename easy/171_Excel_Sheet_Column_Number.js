// Given a string columnTitle that represents the column title as appears in an Excel sheet, 
// return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701
 

// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let titleNumber = 0;
    
    let power = 0; 
    for(let i = columnTitle.length - 1; i >= 0; i --){
        const value = columnTitle.charCodeAt(i) - 64; 
        titleNumber += value * Math.pow(26, power++); 
    }
    
    return titleNumber; 
};


const testCases = [
    ["A", 1],
    ["AB", 28],
    ["ZY", 701],
    ["ZZ", 702],
    ["AAA", 703],
]


// To find the spot value take (value * (26 ^ index)) 

let testNumber = 1; 
for(let[columnTitle, expected] of testCases){
  const returned = titleToNumber(columnTitle);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}