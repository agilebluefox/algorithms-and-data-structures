"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import the hash map class
var hash_map_chaining_1 = require("./hash-map-chaining");
var test = ['madam'];
var words = ['madam', 'amadm', 'cllci', 'rrrtthh'];
var fails = ['caabl', 'aaxxis', 'lklklk', 'lklklklt'];
var weirds = ['bbbbb', 'nnnnnnj', 'uu', 'h', 'ppyyttaaf', 'fuuttbbww'];
/**
 * Determine whether any permutation of a word is a palindrome
 *
 * @param {string} word - The word to check
 * @returns {boolean} - Returns true if a permutation of the word is a palindrome
 */
function findPalindrome(word) {
    // Create a hash map to store the letters
    var myHashMap = new hash_map_chaining_1.HashMapChained(8);
    // Counter to track an odd count of a given letter
    var oddLetter = 0;
    // Assume that any single letter is a palindrome
    if (word.length === 1) {
        return true;
        // If the word contains more than one letter...
    }
    else {
        // Iterate over the letters and store a frequency count
        var count_1 = 0;
        for (var i = 0; i < word.length; i++) {
            var letter = word.charAt(i);
            // Check the hash map to see if the letter has already been encountered
            var value_1 = myHashMap.get(letter);
            // If so, check whether the count is even or odd
            if (value_1) {
                count_1 = value_1 + 1;
                // console.log(`The count is ${count}`);
                if (count_1 === word.length) {
                    return true;
                }
                else if (count_1 % 2 === 1) {
                    oddLetter += 1;
                }
                else if (count_1 % 2 === 0) {
                    oddLetter -= 1;
                }
                myHashMap.set(letter, count_1);
                // console.log(`The number of odd letters is ${oddLetter}`);
                // If the letter has not been seen before...
            }
            else {
                count_1 = 1;
                myHashMap.set(letter, count_1);
                oddLetter += 1;
            }
        }
        // A permutation of a word is a palindrome if there is an 
        // odd number of letters and only one letter with a single count
        // console.log(`The number of odd letters is ${oddLetter}`);
        if (oddLetter === 1) {
            return true;
        }
        else {
            return false;
        }
    }
}
test.forEach(function (word) {
    var result = findPalindrome(word);
    console.log("Any permutation of the word, " + word + ", is a palindrome? " + result);
});
// These words are palindromes
words.forEach(function (word) {
    var result = findPalindrome(word);
    console.log("Any permutation of the word, " + word + ", is a palindrome? " + result);
});
// These words are not palindromes
fails.forEach(function (word) {
    var result = findPalindrome(word);
    console.log("Any permutation of the word, " + word + ", is a palindrome? " + result);
});
// Here are some unusual palindromes
weirds.forEach(function (word) {
    var result = findPalindrome(word);
    console.log("Any permutation of the word, " + word + ", is a palindrome? " + result);
});
//# sourceMappingURL=hash-map-chained-test.js.map