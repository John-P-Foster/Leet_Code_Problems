// Alice and Bob are traveling to Rome for separate business meetings.

// You are given 4 strings arriveAlice, leaveAlice, arriveBob, and leaveBob. Alice will be in the
// city from the dates arriveAlice to leaveAlice (inclusive), while Bob will be in the city from
//  the dates arriveBob to leaveBob (inclusive). Each will be a 5-character string in the format "MM-DD", 
//  corresponding to the month and day of the date.

// Return the total number of days that Alice and Bob are in Rome together.

// You can assume that all dates occur in the same calendar year, which is not a leap year. Note 
// that the number of days per month can be represented as: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].

 

// Example 1:

// Input: arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
// Output: 3
// Explanation: Alice will be in Rome from August 15 to August 18. Bob will be in Rome from August 1
// 6 to August 19. They are both in Rome together on August 16th, 17th, and 18th, so the answer is 3.
// Example 2:

// Input: arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
// Output: 0
// Explanation: There is no day when Alice and Bob are in Rome together, so we return 0.
 

// Constraints:

// All dates are provided in the format "MM-DD".
// Alice and Bob's arrival dates are earlier than or equal to their leaving dates.
// The given dates are valid dates of a non-leap year.

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let daysOfTheYear = new Array(365).fill(0) // days are one less in the array
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

    let convertToDayOfYear = function(stringDate){ // convert string date to day of the year
        [month, day] = stringDate.split("-").map(Number); 
        for(let i = 0; i < month - 1; i ++){
            day += daysInMonth[i];
        }

        return day; 
    }

    let markCalendar = function(arrive, depart){ // mark the calendar from the arive date to the end date incrementing by 1; 
        let arriveDay = convertToDayOfYear(arrive); 
        let departDay = convertToDayOfYear(depart); 

        for(let i = arriveDay - 1; i <= departDay - 1; i ++){
            daysOfTheYear[i] ++; 
        }

    }

    let findDaysTogether = function(){
        let daysTogether = 0; 
        for(let i = 0; i < daysOfTheYear.length; i ++){
            if(daysOfTheYear[i] === 2){
                daysTogether ++;
            } 
        }

        return daysTogether; 
    }

    markCalendar(arriveAlice, leaveAlice); 
    markCalendar(arriveBob, leaveBob); 

    return findDaysTogether(); 
};

const testCases = [
    [arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19", 3],
    [arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31", 0]

]

let testNumber = 1; 
for(let[arriveAlice, leaveAlice, arriveBob, leaveBob,  expected] of testCases){
  const returned = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
  const result = returned.toString() === expected.toString() ? `✅ Passed ` : `❌ Failed`;
  console.log(`Test ${testNumber} ${result}`)
  console.log(`Expected: ${expected}`);
  console.log(`Returned: ${returned}\n`);
  testNumber ++; 
}