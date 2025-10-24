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
    const daysInMonths = [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ]

    // Split date string into year = 0, month = 1, day = 2
    const [year, month, day] = date.split("-").map(Number);

    // Check for leap year and adjuct feb days. 
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        daysInMonths[1] = 29;
    }

    // Sum days in each month to last full month
    let days = 0; 
    for(let i = 0; i < month - 1; i++){
        days += daysInMonths[i]; 
    }

    // Add completed days of current month to total
    days += day;

    return days; 
};

const testCases = [
    ["2019-01-09", 9],
    ["2019-02-10", 41],
    ["2019-12-31", 365], 
    ["2020-12-31", 366], 
    ["2000-03-01", 61],  
    ["1900-03-01", 60],  
]


let testNumber = 1; 
for(let[date, expected] of testCases){
    const returned = dayOfYear(date);
    const result = returned === expected ? `✅ Passed ` : `❌ Failed`;
    console.log(`Test ${testNumber} ${result}`)
    console.log(`Expected: ${expected}`);
    console.log(`Returned: ${returned}\n`);
    testNumber ++; 
}