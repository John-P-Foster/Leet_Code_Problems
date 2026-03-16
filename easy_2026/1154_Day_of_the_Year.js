// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day 
// number of the year.

 

// Example 1:

// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.
// Example 2:

// Input: date = "2019-02-10"
// Output: 41
 

// Constraints:

// date.length == 10
// date[4] == date[7] == '-', and all other date[i]'s are digits
// date represents a calendar date between Jan 1st, 1900 and Dec 31st, 2019.

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let targetDate = new Date(date); 
    let startDate = new Date(`${targetDate.getFullYear() - 1}-12-31`);

    return ((targetDate - startDate) / 86400000); 
};

const testCases = [
    ["2019-01-09", 9],
    ["2019-02-10", 41],

]

testCases.forEach((test, testNumber) => {
const expected = test[test.length - 1]; 
const params = test.slice(0, -1); 
const returned = dayOfYear(...params);
const result = returned === expected? `✅ Passed ` : `❌ Failed`;
console.log(`Test ${testNumber + 1} ${result}`)
console.log(`Expected: ${expected}`);
console.log(`Returned: ${returned}\n`);
})
