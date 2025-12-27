// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2
//  as a string.

// You must solve the problem without using any built-in library for handling large integers (such as 
//     BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"
 

// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = []

    let pointer1 = num1.length - 1; 
    let pointer2 = num2.length - 1;
    let carry = 0; 
    
    while(pointer1 > - 1 || pointer2 > - 1 || carry){
        let sum = carry; 

        if(pointer1 > - 1){
            sum += num1.charCodeAt(pointer1--) - 48; 
        }
        if(pointer2 > - 1){
            sum += num2.charCodeAt(pointer2--) - 48;
        }

        result.push(sum % 10); 
        carry = (sum / 10) | 0;
     
    }

    return result.reverse().join(''); 
};


const testCases = [
    ["11", "123", "134"],
    ["456", "77","533" ],
    ["9", "9", "18"], 
    ["0","0","0"]
] 
  

  for(let[testNumber, [nums1, nums2, expected]] of testCases.entries()){
    const returned = addStrings(nums1, nums2);
    const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber + 1} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
  }