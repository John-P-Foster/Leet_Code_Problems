// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked (the number I picked stays the same
//      throughout the game).

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

 

// Example 1:

// Input: n = 10, pick = 6
// Output: 6
// Example 2:

// Input: n = 1, pick = 1
// Output: 1
// Example 3:

// Input: n = 2, pick = 1
// Output: 1
 

// Constraints:

// 1 <= n <= 231 - 1
// 1 <= pick <= n

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var foo = function(n, picked) {
    const guess = function(n){
        if(n > picked) return -1; 
        if(n < picked) return 1;
        if(n === picked) return 0; 
      }

    let left = 1; 
    let right = n; 
    
    while(left <= right){
        let mid = Math.floor((right - left) / 2) + left;
        let curGuess = guess(mid); 
        if(curGuess === 0) return mid; 
        if(curGuess === -1) right = mid - 1; 
        else left = mid + 1
    }
   
    return 0; 
};


const testCases = [
    [6, 10, 6],
    [1, 1, 1],
    [1, 2, 1],
    [1, 100, 1],
    [100, 100, 100],
    [23, 100, 23],
] 

testCases.forEach((test, testNumber) => {
  let [expected, ...params] = test
  const returned = foo(...params, expected);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber + 1} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
})

