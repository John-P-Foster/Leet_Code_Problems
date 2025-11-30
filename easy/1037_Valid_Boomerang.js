// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane,
//  return true if these points are a boomerang.

// A boomerang is a set of three points that are all distinct and not in a straight line.

 

// Example 1:

// Input: points = [[1,1],[2,3],[3,2]]
// Output: true
// Example 2:

// Input: points = [[1,1],[2,2],[3,3]]
// Output: false
 

// Constraints:

// points.length == 3
// points[i].length == 2
// 0 <= xi, yi <= 100

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let [a, b, c] = [...points]; 

    if ((a[0] === b[0] && a[1] === b[1]) ||
        (a[0] === c[0] && a[1] === c[1]) ||
        (b[0] === c[0] && b[1] === c[1])) {
    return false;
}

    return ((b[1] - a[1]) * (c[0] - a[0])) !== ((c[1] - a[1]) * (b[0] - a[0]));
};

const testCases = [
    [[[1,1],[2,3],[3,2]], true],
    [[[1,1],[2,2],[3,3]], false],
]

let testNumber = 1; 
for(let[points, expected] of testCases){
  const returned = isBoomerang(points);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}
