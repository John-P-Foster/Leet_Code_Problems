// You are given the strings key and message, which represent a cipher key and a secret message, 
// respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution 
// table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the 
// alphabet), we have the partial substitution table 
// of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

 

// Example 1:


// Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// Output: "this is a secret"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".
// Example 2:


// Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
// Output: "the five boxing wizards jump quickly"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".
 

// Constraints:

// 26 <= key.length <= 2000
// key consists of lowercase English letters and ' '.
// key contains every letter in the English alphabet ('a' to 'z') at least once.
// 1 <= message.length <= 2000
// message consists of lowercase English letters and ' '.

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const subTable = new Map(); 
    let curIndex = 0; 
    const charCodeA = 'a'.charCodeAt(0)

    for(const char of key){
        if(char !== ' ' && !subTable.has(char)){ 
            subTable.set(char, String.fromCharCode(curIndex + charCodeA))
            curIndex ++; 
            if(curIndex === 26 ) break; 
        }
    }
    
    let result = ''
    for(let char of message){
        result += char === ' ' ? char: subTable.get(char); 
    }

    return result; 
};

const testCases = [
    ["the quick brown fox jumps over the lazy dog",  "vkbs bs t suepuv", "this is a secret"],
    ["eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb", "the five boxing wizards jump quickly"]
] 
  

  for(let[testNumber, [key, message, expected]] of testCases.entries()){
    const returned = decodeMessage(key, message);
    const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber + 1} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
  }