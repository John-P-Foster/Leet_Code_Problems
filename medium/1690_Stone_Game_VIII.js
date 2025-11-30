// Alice and Bob take turns playing a game, with Alice starting first.

// There are n stones arranged in a row. On each player's turn, they can remove either the leftmost 
// stone or the rightmost stone from the row and receive points equal to the sum of the remaining stones' 
// values in the row. The winner is the one with the higher score when there are no stones left to remove.

// Bob found that he will always lose this game (poor Bob, he always loses), so he decided to minimize the
// score's difference. Alice's goal is to maximize the difference in the score.

// Given an array of integers stones where stones[i] represents the value of the ith stone from the left, 
// return the difference in Alice and Bob's score if they both play optimally.

 

// Example 1:

// Input: stones = [5,3,1,4,2]
// Output: 6
// Explanation: 
// - Alice removes 2 and gets 5 + 3 + 1 + 4 = 13 points. Alice = 13, Bob = 0, stones = [5,3,1,4].
// - Bob removes 5 and gets 3 + 1 + 4 = 8 points. Alice = 13, Bob = 8, stones = [3,1,4].
// - Alice removes 3 and gets 1 + 4 = 5 points. Alice = 18, Bob = 8, stones = [1,4].
// - Bob removes 1 and gets 4 points. Alice = 18, Bob = 12, stones = [4].
// - Alice removes 4 and gets 0 points. Alice = 18, Bob = 12, stones = [].
// The score difference is 18 - 12 = 6.
// Example 2:

// Input: stones = [7,90,5,1,100,10,10,2]
// Output: 122
 

// Constraints:

// n == stones.length
// 2 <= n <= 1000
// 1 <= stones[i] <= 1000


// This problem is most likely mislabled as medium and requires advanced tricks like DP intervals
/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
    const n = stones.length;
    
    // prefix sum for fast interval sums
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + stones[i];
    }

    // helper to get sum from i to j (inclusive)
    const rangeSum = (i, j) => prefix[j + 1] - prefix[i];

    // dp[i][j] = max score difference current player can achieve from stones[i..j]
    const dp = Array.from({ length: n }, () => new Array(n).fill(0));

    // fill intervals from small to large
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i + length - 1 < n; i++) {
            const j = i + length - 1;

            // If the player removes left stone
            const scoreLeft = rangeSum(i + 1, j);      // points gained
            const left = scoreLeft - dp[i + 1][j];     // opponent then plays dp[i+1][j]

            // If the player removes right stone
            const scoreRight = rangeSum(i, j - 1);
            const right = scoreRight - dp[i][j - 1];

            // Best the current player can do
            dp[i][j] = Math.max(left, right);
        }
    }

    return dp[0][n - 1];   // full interval result
};

const testCases = [
    [[5,3,1,4,2], 6],
    [[7,90,5,1,100,10,10,2], 122],
]

let testNumber = 1; 
for(let[stones, expected] of testCases){
  const returned = stoneGameVII(stones);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}