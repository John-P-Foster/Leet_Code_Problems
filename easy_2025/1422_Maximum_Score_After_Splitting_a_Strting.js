// Given a string s of zeros and ones, return the maximum score after splitting the string into 
// two non-empty substrings (i.e. left substring and right substring).

// The score after splitting a string is the number of zeros in the left substring plus the number 
// of ones in the right substring.

 

// Example 1:

// Input: s = "011101"
// Output: 5 
// Explanation: 
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5 
// left = "01" and right = "1101", score = 1 + 3 = 4 
// left = "011" and right = "101", score = 1 + 2 = 3 
// left = "0111" and right = "01", score = 1 + 1 = 2 
// left = "01110" and right = "1", score = 2 + 1 = 3
// Example 2:

// Input: s = "00111"
// Output: 5
// Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
// Example 3:

// Input: s = "1111"
// Output: 3
 

// Constraints:

// 2 <= s.length <= 500
// The string s consists of characters '0' and '1' only.

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let max = 0;
    
    function countChar(arr, char){
        let count = 0;
        for(let i = 0; i < arr.length; i ++){
            if(char === arr[i]){ count ++}; 
        } 
        return count; 
    }

    for(let i = 1; i <  s.length; i ++){
        let left = s.slice(0,i); 
        let right = s.slice(i,s.length);
        let count = countChar(left, "0") + countChar( right,"1"); 
        max = Math.max(count, max); 
    }


    return max; 
};

var maxScoreOPT = function(s) {
    let totalOnes=0
    let leftZeros=0
    let leftOnes=0
    let max=0

    for(let digit of s)
    {
        if (digit==='1') totalOnes++
    }

    for (let i=0;i<s.length-1;i++)
    {
        if (s[i]==='0') leftZeros++
        else leftOnes++

        max=Math.max(max,(leftZeros+(totalOnes-leftOnes)))
    }

    return max
};

const testCases = [
    ["011101", 5],
    ["00111",5],
    ["1111",3],
]

for(let test of testCases){
    let result = maxScore(test[0]); 
    result = result === test[1] ? `Passed: ${result} ` : `Failed: ${result}`; 
    console.log(result);
}