// A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom 
// to represent the minutes (0-59). Each LED represents a zero or one, with the least significant
//  bit on the right.

// For example, the below binary watch reads "4:51".

// 0100110011


// Given an integer turnedOn which represents the number of LEDs that are currently on 
// (ignoring the PM), return all possible times the watch could represent. You may return
// the answer in any order.

// The hour must not contain a leading zero.

// For example, "01:00" is not valid. It should be "1:00".
// The minute must consist of two digits and may contain a leading zero.

// For example, "10:2" is not valid. It should be "10:02".
 

// Example 1:

// Input: turnedOn = 1
// Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
// Example 2:

// Input: turnedOn = 9
// Output: []
// Constraints: 0 <= turnedOn <= 10

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    if(turnedOn > 8 ){return []}
    let times = []
    for(let hour = 0; hour < 12; hour ++){
        let numberOf1sInBinaryHour = hour.toString(2).split('1').length-1;
        for(let min = 0; min < 60; min ++){
            let numberOf1sInMinute = min.toString(2).split('1').length-1; 
            if(numberOf1sInBinaryHour + numberOf1sInMinute === turnedOn){
                times.push(`${hour}:${min.toString().padStart(2, '0')}`)
            }
        }
    }
    return times;
};

testCases = [0,1,8,9,10];

// for(let test of testCases){
//     console.log(readBinaryWatch(test))
// }

// Trying DFS solution
function readBinaryWatchDFS(turnedOn){

    results = [];

    // index  [h0, h1, h2, h3, m0, m1, m2, m3, m4, m5]
    // values [ 1,  2,  4,  8,  1,  2,  4,  8, 16, 32]
    function dfs(idx, usedLights, hours, minutes) {
        if (hours >= 12 || minutes >= 60) return;
        if (usedLights === turnedOn) {
            results.push(`${hours}:${minutes.toString().padStart(2, '0')}`); 
            return;
        }

        // Stop if we've exhausted all 10 LEDs
        if (idx === 10) return;

        // Option 1: skip this LED
        dfs(idx + 1, usedLights, hours, minutes);

        // Option 2: turn on this LED (if still valid)
        if (idx < 4) {
            // It's an hour LED
            dfs(idx + 1, usedLights + 1, hours + (1 << idx), minutes);
        } else {
            // It's a minute LED
            dfs(idx + 1, usedLights + 1, hours, minutes + (1 << (idx - 4)));
        }
    }

    dfs(0,0,0,0);
    return results; 
}

for(let test of testCases){
    console.log(readBinaryWatchDFS(test))
}