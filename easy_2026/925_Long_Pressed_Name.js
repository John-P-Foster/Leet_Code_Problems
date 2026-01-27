// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get 
// long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends 
// name, with some characters (possibly none) being long pressed.

 

// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.
 

// Constraints:

// 1 <= name.length, typed.length <= 1000
// name and typed consist of only lowercase English letters.

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var foo = function(name, typed) {

    if(typed.length < name.length) return false;

    let namePointer = 0; typedPointer = 0; 

    while(typedPointer < typed.length){
        const typedChar = typed[typedPointer];
        if(namePointer < name.length && name[namePointer] === typedChar){
            namePointer ++; 
        }else if(typed[typedPointer -1] != typedChar) return false; 
        
        typedPointer++
    }

    return namePointer === name.length; 
};

const testCases = [
    [true, "alex", "aaleex" ],
    [false, "saeed", "ssaaedd"],
    [false, "saeed", "zsaaedd"],
    [false, "alex", "aalleexxaaaax"],
    [true, "alex", "aaleexx" ],
    [false, "alex", "aale"]
  ] 
  
  
  testCases.forEach((test, testNumber) => {
    let [expected, ...params] = test
    const returned = foo(...params);
    console.log(`Test ${testNumber + 1} ${returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
  })