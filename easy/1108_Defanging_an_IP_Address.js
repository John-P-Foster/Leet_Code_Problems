// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
 

// Constraints:

// The given address is a valid IPv4 address.

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defanged = "";

    for(let char of address){
        if(char === "."){
            defanged += "[.]"
        }else{
            defanged += char
        }
    }
    
    return defanged;
};


const testCases = [
    ["1.1.1.1", "1[.]1[.]1[.]1" ],
    ["255.100.50.0", "255[.]100[.]50[.]0"]
]


let testNumber = 1; 
for(let [ address, expected] of testCases){
    const returned = defangIPaddr(address);
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}` : `Test ${testNumber} ❌ Failed with: ${returned}`; 
    testNumber ++; 
    console.log(result);
}

