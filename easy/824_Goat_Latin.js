// You are given a string sentence that consist of words separated by spaces. Each word consists of 
// lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) 
// The rules of Goat Latin are as follows:

// If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
// For example, the word "apple" becomes "applema".
// If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the 
// end, then add "ma".
// For example, the word "goat" becomes "oatgma".
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end,
// and so on.
// Return the final sentence representing the conversion from sentence to Goat Latin.

 

// Example 1:

// Input: sentence = "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:

// Input: sentence = "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 

// Constraints:

// 1 <= sentence.length <= 150
// sentence consists of English letters and spaces.
// sentence has no leading or trailing spaces.
// All the words in sentence are separated by a single space.

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let goatLatin = ''; 

    let words = sentence.split(' ')

    const firstRule = function(word){
        let result = word.split('');
        const firstLetter = result.shift(); 
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

        if(vowels.has(firstLetter.toLowerCase())){
            result.unshift(firstLetter)
            result.push(
            "ma"
           )
        }else{
            result.push(firstLetter); 
            result.push("ma")
        }
        result = result.join(''); 
        return result; 
    }

    const secondRule = function(word, index){
        return word + 'a'.repeat(index); 
    }

    for(let i = 0; i < words.length; i ++){
        let word = words[i]; 
        let result = ''

        result = firstRule(word); 
        result = secondRule(result, i + 1); 

        goatLatin += (" " + result); 
    }

    return goatLatin.trim(); 
};

const toGoatLatinSupperClean = (sentence) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    return sentence.split(' ').map((w, idx) => {
        const base = vowels.has(w[0]) ? w + 'ma' : w.slice(1) + w[0] + 'ma';
        return base + 'a'.repeat(idx + 1);
    }).join(' ');
};

const testCases = [
    ["I speak Goat Latin", "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"],
    ["The quick brown fox jumped over the lazy dog", "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"],
]

let testNumber = 1; 
for(let[sentence, expected] of testCases){
    const returned = toGoatLatin(sentence); 
    const result = returned === expected ? `Test ${testNumber}: ✅ Passed with: ${returned}` : `Test ${testNumber}: ❌ Failed with: ${returned}`
    console.log(result);  
    testNumber ++;
}