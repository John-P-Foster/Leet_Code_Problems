// Given two strings s and goal, return true if and only if s can become goal after some number of shifts
//  on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.
 

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false
 

// Constraints:

// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var foo = function(s, goal) {
    if(s.length !== goal.length) return false; 
    const n = s.length; 
    for(let i = 0; i < n; i ++){
        if(s[i] === goal[0]){
            let match = true; 
            for(let j = 0; j < n; j++){
                if(s[(i + j) % n] !== goal[j]){ 
                    match = false;
                    break
                };
            }
            if(match) return true; 
        }
    }

    return false;
};


const testCases = [
    [true, "abcde", "cdeab"],
    [false,  "abcde", "abced"],
    [true, "abcbe", "beabc"],
    [false, "abc", "abca"] // would this count as true? Its not clear if in the instructions if we can wrap multiple times. 
] 

testCases.forEach((test, testNumber) => {
  let [expected, ...params] = test
  const returned = foo(...params, expected);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber + 1} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
})

