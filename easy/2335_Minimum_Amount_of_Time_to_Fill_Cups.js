// You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either 
// fill up 2 cups with different types of water, or 1 cup of any type of water.

// You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] 
// denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum 
// number of seconds needed to fill up all the cups.

 

// Example 1:

// Input: amount = [1,4,2]
// Output: 4
// Explanation: One way to fill up the cups is:
// Second 1: Fill up a cold cup and a warm cup.
// Second 2: Fill up a warm cup and a hot cup.
// Second 3: Fill up a warm cup and a hot cup.
// Second 4: Fill up a warm cup.
// It can be proven that 4 is the minimum number of seconds needed.
// Example 2:

// Input: amount = [5,4,4]
// Output: 7
// Explanation: One way to fill up the cups is:
// Second 1: Fill up a cold cup, and a hot cup.
// Second 2: Fill up a cold cup, and a warm cup.
// Second 3: Fill up a cold cup, and a warm cup.
// Second 4: Fill up a warm cup, and a hot cup.
// Second 5: Fill up a cold cup, and a hot cup.
// Second 6: Fill up a cold cup, and a warm cup.
// Second 7: Fill up a hot cup.
// Example 3:

// Input: amount = [5,0,0]
// Output: 5
// Explanation: Every second, we fill up a cold cup.
 

// Constraints:

// amount.length == 3
// 0 <= amount[i] <= 100

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let seconds = 0; 
    while((amount[0] > 0) || (amount[1] > 0) || (amount[2] > 0)){
        amount.sort((a,b) => b - a)
        if(amount[1] > 0){
            amount[0] --; 
            amount[1] --;
            seconds ++
        }else{
            amount[0] --;
            seconds ++
        }
    }

    return seconds; 
};

const testCases = [
    [[1,4,2], 4],
    [[5,4,4], 7],
    [[5,0,0], 5]
]

let testNumber = 1; 
for(let[amount, expected] of testCases){
    const returned = fillCups(amount);
    const result = returned === expected ? ` ✅ Passed` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
}
