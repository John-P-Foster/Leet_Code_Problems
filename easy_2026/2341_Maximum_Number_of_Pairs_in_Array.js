// You are given a 0-indexed integer array nums. In one operation, you may do the following:

// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are
//  formed and answer[1] is the number of leftover integers in nums after doing the operation as many
//   times as possible.

 

// Example 1:

// Input: nums = [1,3,2,1,3,2,2]
// Output: [3,1]
// Explanation:
// Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.
// Example 2:

// Input: nums = [1,1]
// Output: [1,0]
// Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
// No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.
// Example 3:

// Input: nums = [0]
// Output: [0,1]
// Explanation: No pairs can be formed, and there is 1 number leftover in nums.
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let pairs = 0; 
    let leftovers = 0;
    let bucket = new Array(101).fill(0); 

    for(let i = 0; i < nums.length; i++){
        bucket[nums[i]] ++;  
    }

    for(let i = 0; i < bucket.length; i ++){
        let freq = bucket[i]
        if(freq === 0) continue;

        pairs += Math.floor(freq / 2); 
        leftovers += freq % 2; 
 
    }

    return [pairs, leftovers]
};

// Or A sorting version
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairsSort = function(nums) {
    let pairs = 0; 
    let leftovers = 0;
    let count = 1;

    nums.sort((a,b)=> a - b)

    for(let i = 1; i < nums.length; i ++){
        if(nums[i - 1] === nums[i]){
            count ++;
        }else{
            pairs += Math.floor(count / 2); 
            leftovers += count % 2; 
            count = 1; 
        }
    }

    pairs += Math.floor(count / 2); 
    leftovers += count % 2; 

    return [pairs, leftovers]
};

// Or A sorting version
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairsSet = function(nums) {
    let pairs = 0; 
    let leftovers = new Set();

    for(const num of nums){
        if(leftovers.has(num)){
            pairs ++; 
            leftovers.delete(num);
        }else{
            leftovers.add(num)
        }
    }


    return [pairs, leftovers.size]
};




const testCases = [
    [[1,3,2,1,3,2,2], [3,1]],
    [[1,1], [1,0]],
    [[1,2], [0,2]],
    [[0], [0,1]],
]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = numberOfPairsSet(...params);
const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})

