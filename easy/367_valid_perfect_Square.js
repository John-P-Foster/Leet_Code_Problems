// Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.

 

// Example 1:

// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
// Example 2:

// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 

// Constraints:

// 1 <= num <= 231 - 1

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let low = 1; 
    let high = num; 
    let i = 0; 

    while(low < high){
        let mid = Math.floor( (low + high) / 2)

        if(num === (mid * mid)){ return true;}
        if(num > (mid * mid)){
            low = mid  + 1; 
        }else{
            high = mid - 1; 
        }
        i ++;
    }
    console.log(i);

    return false; 


};

const testCases = [16, 4, 21, 0, 230, 49, 314722, 232]

for(test of testCases){
    console.log(isPerfectSquare(test));
}

var perfectSQRBrute = function (num){
    
    let sqr = 0; 
    let base = 1;
 

    while(sqr < num){
       sqr = base * base;
       base ++;
    }

    console.log(base); 

    return sqr === num

}

for(test of testCases){
    console.log(perfectSQRBrute(test));
}
