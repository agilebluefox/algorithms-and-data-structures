"use strict";
// import the hash map class
var hash_maps_1 = require("./hash-maps");
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
    var myHashMap = new hash_maps_1.HashMap(8);
    // Counter to track an odd count of a given letter
    var oddLetter = 0;
    // Assume that any single letter is a palindrome
    if (word.length === 1) {
        return true;
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
// These words are palindromes
words.forEach(function (word) {
    var result = findPalindrome(word);
    console.log("Any permutation of the word, " + word + " is a palindrome? " + result);
});
// These words are not palindromes
fails.forEach(function (word) {
    var result = findPalindrome(word);
    console.log("Any permutation of the word, " + word + " is a palindrome? " + result);
});
// Here are some unusual palindromes
weirds.forEach(function (word) {
    var result = findPalindrome(word);
    console.log("Any permutation of the word, " + word + " is a palindrome? " + result);
});
var anagrams = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
function findAnagrams(words) {
    // Use an object to store the groups of anagrams
    var anagrams = new hash_maps_1.HashMap(12);
    // Iterate over the list of words
    words.forEach(function (word) {
        // Take each word and sort it alphabetically
        var ordered = word.split('').sort().join('');
        console.log("The letters of the word sorted are:", ordered);
        // Then store the word as a key in the hash map
        var values = [];
        // If the word already exists, add it to the values
        if (anagrams.get(ordered)) {
            // Push the word into an array and store as value
            values = anagrams.get(ordered);
            console.log("The values are: ", values);
        }
        // If the word doesn't exist, add the key to the object
        values.push(word);
        console.log("The values are: ", values);
        anagrams.set(ordered, values);
    });
    // When all the words have been evaluated, return an array
    // that contains an array of anagrams for each group
    var anagramGroups = [];
    var anagramKeys = anagrams.keys();
    anagramKeys.forEach(function (key) {
        console.log("The current key is: " + key);
        var anagramValues = anagrams.get(key);
        anagramGroups.push(anagramValues);
    });
    return anagramGroups;
}
var result = findAnagrams(anagrams);
console.log("The list of anagrams is: ", result);
//# sourceMappingURL=hash-map-interviews.js.map