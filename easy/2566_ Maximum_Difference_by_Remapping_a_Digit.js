// You are given an integer num. You know that Bob will sneakily remap one of the 10 possible digits 
// (0 to 9) to another digit.

// Return the difference between the maximum and minimum values Bob can make by remapping exactly one 
// digit in num.

// Notes:

// When Bob remaps a digit d1 to another digit d2, Bob replaces all occurrences of d1 in num with d2.
// Bob can remap a digit to itself, in which case num does not change.
// Bob can remap different digits for obtaining minimum and maximum values respectively.
// The resulting number after remapping can contain leading zeroes.
 

// Example 1:

// Input: num = 11891
// Output: 99009
// Explanation: 
// To achieve the maximum value, Bob can remap the digit 1 to the digit 9 to yield 99899.
// To achieve the minimum value, Bob can remap the digit 1 to the digit 0, yielding 890.
// The difference between these two numbers is 99009.
// Example 2:

// Input: num = 90
// Output: 99
// Explanation:
// The maximum value that can be returned by the function is 99 (if 0 is replaced by 9) and the minimum 
// value that can be returned by the function is 0 (if 9 is replaced by 0).
// Thus, we return 99.
 

// Constraints:

// 1 <= num <= 108

/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {

    function reversNumber(num){
        let reversed = 0; 
        while(num > 0){
            reversed = (reversed * 10) + num % 10; 
            num = Math.floor(num / 10);
        }
        return reversed; 
    }

    function maxOrMin(num, minOrMax){
        let reversed = reversNumber(num)
        let firstDigit = reversed % 10;
        if(minOrMax > 0){
            while(firstDigit === 9){
                reversed = Math.floor(reversed / 10); 
                firstDigit = reversed % 10; 
            }
        }
        
        let newNumber = 0; 
        let power = 1; 
        let zeroOrNine = minOrMax > 0 ? 9 : 0

        while(num > 0){
            let lastDigit = num % 10; 
            if(lastDigit === firstDigit){
                newNumber += zeroOrNine * power; 
            }else{
                newNumber +=  lastDigit * power; 
            }
            power = power * 10; 
            num = Math.floor(num / 10);
        }
        console.log(newNumber);
        return newNumber; 
    }


    return maxOrMin(num, 1) - maxOrMin(num, -1);  
};

function minMaxDifferenceWithString(n) {
    const str = n.toString(), minNum = +str.replaceAll(str[0], '0');
    const maxDigit = str.split('').find((d) => d !== '9');
    return (maxDigit ? +str.replaceAll(maxDigit, '9') : n) - minNum;
}

function minMaxDifference2(num){
    let numArray = []; 
    while(num > 0){
        let digit = num % 10; 
        numArray.push(digit);
        num = Math.floor( num / 10); 
    }
    let firstdigit = numArray[numArray.length -1];

    let min = 0; 
    let max = 0; 
    let firstNoneNine = -1; 
    for(let i = numArray.length; i > 0; i--){

        let minDigit = numArray[i -1] === firstdigit ? 0 : numArray[i - 1];
        min = (min * 10) + minDigit; 

        let maxDigit = numArray[i - 1]   
        if(firstNoneNine < 0 && maxDigit != 9){
            firstNoneNine = maxDigit;
        }
        maxDigit = maxDigit === firstNoneNine ? 9 : maxDigit; 
        max = (max * 10) + maxDigit; 
 
    }
    
    return max - min; 
}

const testCases = [
    [11891, 99009],
    [90, 99],
    [99999, 99999],
    [ 1, 9]
]

let testNumber = 1; 
for(let [num, expected] of testCases){
    const returned = minMaxDifference2(num); 
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}` : `Test ${testNumber} ❌ Failed with: ${returned}`;
    testNumber ++; 
    console.log(result) 
}