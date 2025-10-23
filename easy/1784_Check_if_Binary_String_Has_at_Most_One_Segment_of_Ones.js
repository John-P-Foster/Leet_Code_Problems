// Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous
//  segment of ones. Otherwise, return false.

 

// Example 1:

// Input: s = "1001"
// Output: false
// Explanation: The ones do not form a contiguous segment.
// Example 2:

// Input: s = "110"
// Output: true
 

// Constraints:

// 1 <= s.length <= 100
// s[i]​​​​ is either '0' or '1'.
// s[0] is '1'.


/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let zeroFlag = false; 

    for(let i = 0; i < s.length; i ++){
        if(s[i] === "1" && zeroFlag) return false; 
        if(!zeroFlag && s[i] === "0") zeroFlag = true; 
    }

    return true; 
};


const testCases = [
    ["1001", false],
    ["110", true],
    ["1101111", false],
    ["1", true],

]


let testNumber = 1; 
for(let[s, expected] of testCases){
    const returned = checkOnesSegment(s);
    const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
}