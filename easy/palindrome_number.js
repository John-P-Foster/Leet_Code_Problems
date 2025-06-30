// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

/**
 * @param {number} x
 * @return {boolean}
 */

let x = 1221
var isPalindrome = function(x) {
    let num_string = x.toString(); 

    for(let i = 0; i < num_string.length / 2; i ++){
        if(num_string[i] != num_string[num_string.length - i -1]){
            return false;
        }
    }

    return true; 

    
};

console.log(isPalindrome(x));