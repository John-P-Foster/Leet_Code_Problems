// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in 
// arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as
//  in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]
 

// Constraints:

// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// All the elements of arr2 are distinct.
// Each arr2[i] is in arr1.

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
    const arr2Bin = new Map(); 
    let arrayTail = []; 

    for(num of arr2){
        arr2Bin.set(num, []); 
    }

    for(let num of arr1){
        if(arr2Bin.has(num)){
            const bin = arr2Bin.get(num); 
            bin.push(num); 
        }else{
            arrayTail.push(num);
        }
    }

    let index = 0; 

    for(let bin of arr2Bin){
        for(let num of bin[1]){
            arr1[index] = num;
            index ++
        }
    }

    arrayTail = arrayTail.sort((a,b) => a - b); 
    for(let num of arrayTail){
        arr1[index] = num;
        index ++; 
    }

    return arr1; 

};

const testCases = [
    [[2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6],[2,2,2,1,4,3,3,9,6,7,19]],
    [[28,6,22,8,44,17],[22,28,8,6],[22,28,8,6,17,44]]
]

let testNumber = 1; 
for(let [arr1, arr2, expected] of testCases){
    const returned = relativeSortArray(arr1,arr2);
    const result = returned.toString() === expected.toString() ? `Test ${testNumber} ✅ Passed with : ${returned}` : `Test ${testNumber} ❌ Failed with : ${returned}`;
    testNumber ++; 
    console.log(result); 
}