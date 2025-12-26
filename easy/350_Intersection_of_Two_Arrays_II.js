// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the 
// result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
 

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load 
// all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersectSort = function(nums1, nums2) {
    let result = [];
    nums1.sort((a,b) => a - b)
    nums2.sort((a,b) => a - b)

    let pointer1 = 0; 
    let pointer2 = 0; 

    while(pointer1 < nums1.length && pointer2 < nums2.length){
        const nums1Current = nums1[pointer1]; 
        const nums2Current = nums2[pointer2]; 

        if(nums1Current === nums2Current){
            result.push(nums1Current); 
            pointer1 ++; 
            pointer2 ++; 
        }else if(nums1Current > nums2Current){
            pointer2 ++;
        }else{
            pointer1 ++; 
        } 
        
    }

    return result
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];
    const freq = new Map();
    const [short, long] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1]; 
    for(const num of short){
        freq.set(num, (freq.get(num) ?? 0) + 1 );
    }

    for(const num of long ){
        const count = freq.get(num);
        if(count && count > 0){
            result.push(num); 
            freq.set(num, count - 1); 
        }
    }

    return result
};


const testCases = [
    [[1,2,2,1], [2,2], [2,2]],
    [[4,9,5], [9,4,9,8,4], [4,9]]
] 
  

  for(let[testNumber, [nums1, nums2, expected]] of testCases.entries()){
    const returned = intersect(nums1, nums2);
    const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber + 1} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
  }