// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position
// of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRangeFirstAttempt = function(nums, target) {
    result = [-1, -1]

    if(nums.length <=1){
        if(nums[0] === target){
            result = [0,0]; 
        }
        return result 
    }

    let left = 0; 
    let right = nums.length -1; 
    let index = Math.floor(nums.length / 2);
    let start = undefined; 
    let end = undefined; 

    if(nums[0] === target){
        start = 0; 
        result[0] = start;
    }
    if(nums[nums.length -1] === target){
        end = nums.length -1; 
        result[1] = end;
    }
    while( left <= right){
        if(nums[index] === target){
            break; 
        }
        if(target < nums[index]){
            right = index - 1; 
            index = Math.floor(((left + right) / 2));
        }
        if(target > nums[index]){
            left = index + 1; 
            index = Math.floor(((left + right) / 2));
        }
    }

    let startIndex = index
    left = 0; 
    right = startIndex; 
    while(start === undefined){
        if(nums[index] != target && nums[index + 1] === target){
            start = index + 1; 
            result[0] = start; 
        }
        if(nums[index] === target){
            right = index -1;
            index = Math.floor(((left + right) / 2)); 
        }else{
            left = index + 1; 
            index = Math.floor(((left + right) /2))
        }
    }

    index = startIndex; 
    left = index;
    right = nums.length -1; 
    while(end === undefined){
        if(nums[index] != target && nums[index - 1] === target){
            end = index - 1; 
            result[1] = end; 
        }
        if(nums[index] === target){
            left = index + 1; 
            index = Math.floor(((left + right) / 2)); 
        }else{
            right = index -1; 
            index = Math.floor(((left + right)/ 2));
        }

    }
    return result;
};

var searchRangeSecondAttempt = function(nums, target) {
    result = [-1, -1]

    function findBound(isStart){
        let left = 0; right = nums.length -1, bound = -1;
        while(left <= right){
            let mid = Math.floor(((left + right ) / 2)); 
            if(nums[mid] === target){
                bound = mid; 
                isStart ? right = mid -1 : left = mid + 1; 
            }else if (nums[mid] < target ){
                left = mid + 1; 
            }else {
                right = mid -1; 
            }
            
        }
        return bound; 
    }

    return [findBound(true), findBound(false)]
}

const testCases = [
    [[5,7,7,8,8,10], 8, [ 3, 4]],
    [[1,2,3,3,3,3,4,5,5,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,10], 7, [9, 21]],
    [[],0,[-1,-1] ],
    [[8, 8, 8, 8, 8], 8, [0, 4]],  // All elements are the target
    [[1, 2, 3, 4, 5], 1, [0, 0]],  // Target is at the first index
    [[1, 2, 3, 4, 5], 5, [4, 4]],  // Target is at the last index
]

for(let test of testCases){
    result = searchRangeSecondAttempt(test[0], test[1]); 
    result = result.toString() ===  test[2].toString() ? "Passed" : "Failed";
    console.log(result); 
}