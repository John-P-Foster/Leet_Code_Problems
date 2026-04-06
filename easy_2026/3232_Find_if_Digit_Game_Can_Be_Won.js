// You are given an array of positive integers nums.

// Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all 
// double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of 
// her numbers is strictly greater than the sum of Bob's numbers.

// Return true if Alice can win this game, otherwise, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,10]

// Output: false

// Explanation:

// Alice cannot win by choosing either single-digit or double-digit numbers.

// Example 2:

// Input: nums = [1,2,3,4,5,14]

// Output: true

// Explanation:

// Alice can win by choosing single-digit numbers which have a sum equal to 15.

// Example 3:

// Input: nums = [5,5,5,25]

// Output: true

// Explanation:

// Alice can win by choosing double-digit numbers which have a sum equal to 25.

 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 99

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let dif = 0; 

    for(let num of nums){
        dif += num > 9 ? num : -num
    }

    return dif !== 0 
};


const testCases = [
    [[1,2,3,4,10], false],
    [[1,2,3,4,5,14], true],
    [[5,5,5,25], true]

]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = canAliceWin(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

