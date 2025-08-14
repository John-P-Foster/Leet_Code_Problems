// You are given a string num representing a large integer. An integer is good if it meets the following
//  conditions:

// It is a substring of num with length 3.
// It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

// A substring is a contiguous sequence of characters within a string.
// There may be leading zeroes in num or a good integer.
 

// Example 1:

// Input: num = "6777133339"
// Output: "777"
// Explanation: There are two distinct good integers: "777" and "333".
// "777" is the largest, so we return "777".
// Example 2:

// Input: num = "2300019"
// Output: "000"
// Explanation: "000" is the only good integer.
// Example 3:

// Input: num = "42352338"
// Output: ""
// Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good 
// integers.
 

// Constraints:

// 3 <= num.length <= 1000
// num only consists of digits.

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let LGI = "0"
    let currentRun = num[0]
    for(let i = 0; i < num.length -1; i ++){
        if(num[i] === num[i + 1]){
            currentRun += num[i]; 
            if(currentRun.length === 3){
                let number = Number(currentRun[0]); 
                LGI = number >= Number(LGI[0]) ? currentRun : LGI; 
            }
           
        } else {
            currentRun = num[i + 1]
        }
    }

    return LGI === "0" ? "" : LGI; 
};

var largestGoodIntegerOPT = function(num) {
    let maxGood = "";
    
    for (let i = 0; i <= num.length - 3; i++) {
        if (num[i] === num[i+1] && num[i] === num[i+2]) {
            let sub = num.slice(i, i + 3);
            maxGood = sub > maxGood ? sub : maxGood; 
        }
    }
    
    return maxGood;
};

const testCases = [
    ["6777133339", "777"],
    ["2300019", "000" ],
    ["42352338", ""],
    ["6777981877777", "777"],
    ["777", "777"],
    ["222" , "222"],
]

let testNumber = 1; 
for(let [num, expected] of testCases){
    const returned = largestGoodIntegerOPT(num);
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}` : `Test ${testNumber} ❌ Failed with: ${returned}`
    testNumber ++;
    console.log(result); 
}