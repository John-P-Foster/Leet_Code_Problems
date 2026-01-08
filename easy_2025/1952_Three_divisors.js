// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

// An integer m is a divisor of n if there exists an integer k such that n = k * m.

 

// Example 1:

// Input: n = 2
// Output: false
// Explantion: 2 has only two divisors: 1 and 2.
// Example 2:

// Input: n = 4
// Output: true
// Explantion: 4 has three divisors: 1, 2, and 4.
 

// Constraints:

// 1 <= n <= 104

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count = 0;
    for(let i = 1; i * i <= n ; i++){
        let r = n % i; 
        if(r === 0){
            count ++
            if(i !== n / i){count ++}
            if(count > 3){ return false;}
        }
    }
    return count === 3 ? true : false; 
    
};

var isThreeOPT = function(n) {
    const sqrt = Math.sqrt(n);
    if (sqrt !== Math.floor(sqrt)) return false;

    for (let i = 2; i <= Math.sqrt(sqrt); i++) {
        if (sqrt % i === 0) return false; 
    }

    return sqrt > 1; 
};

const testCases = [
    [1 , false],
    [4, true],
    [9, true],
    [459211, false]
]

for(let [input, expected] of testCases){
    let returned = isThree(input); 
    let result = returned === expected ? `Passed with: ${returned}`: `Failed got: ${returned}`; 
    console.log(result); 
}