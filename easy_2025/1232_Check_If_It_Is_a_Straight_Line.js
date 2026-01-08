
// You are given an integer array coordinates, coordinates[i] = [x, y], 
// where [x, y] represents the coordinate of a point. Check if these points make a straight line 
// in the XY plane.

// Example 1:
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Example 2:
// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
 

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
        const [x1, y1] = coordinates[0];
        const [x2, y2] = coordinates[1];
    
        for (let i = 2; i < coordinates.length; i++) {
            const [x3, y3] = coordinates[i];
    
            if ((y2 - y1) * (x3 - x1) !== (y3 - y1) * (x2 - x1)) {
                return false;
            }
        }
        return true;
};

const testCases = [
    [[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]], true],
    [[[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]], false],
    [[[3,1], [3,4], [3,10]], true],
    [[[0,0], [2,2], [4,4]], true]
]

let testNumber = 1; 
for(let[coordinates, expected] of testCases){
  const returned = checkStraightLine(coordinates);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}