// You have a long flowerbed in which some of the plots are planted, and some are not. However, 
// flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not 
// empty, and an integer n, return true if n new flowers can be planted in the flowerbed without 
// violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0) return true; 

    if(flowerbed.length === 1 && n === 1){
        if(flowerbed[0] === 0){
            return true; 
        }
        return false
    }

    if(flowerbed[0] === 0 && flowerbed[1] === 0){
        flowerbed[0] = 1; 
        n--; 
        if(n === 0) return true; 
    }

    for(let i = 1; i < flowerbed.length - 2; i ++){
        if(flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1]  === 0){
            flowerbed[i] = 1; 
            n--
            if(n === 0) return true;
        }
    }

    if(flowerbed[flowerbed.length - 2] === 0 && flowerbed[flowerbed.length - 1] === 0){
        flowerbed[flowerbed.length - 1] = 1;
        n--; 
        if(n === 0) return true;
    }
    return false; 
};

var canPlaceFlowersOpt = function(flowerbed, n){
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        const prev = i === 0 ? 0 : flowerbed[i - 1];
        const curr = flowerbed[i];
        const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];

        if (prev === 0 && curr === 0 && next === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }

    return n === 0;
}
const testCases = [
    [[1,0,0,0,1], 1, true],
    [[1,0,0,0,1], 2, false],
    [[1,0,0,1,0,1], 1, false],
    [[0,0,0,1,0,1], 1, true],
    [[0], 1, true]
]

let testNumber = 1; 
for(let[flowerbed, n, expected] of testCases){
  const returned = canPlaceFlowers(flowerbed, n);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}