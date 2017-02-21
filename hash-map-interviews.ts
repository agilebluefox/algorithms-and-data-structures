// import the hash map class
import { HashMap } from './hash-maps';

let words = ['madam', 'amadm', 'cllci', 'rrrtthh'];
let fails = ['caabl', 'aaxxis', 'lklklk', 'lklklklt'];
let weirds = ['bbbbb', 'nnnnnnj', 'uu', 'h', 'ppyyttaaf', 'fuuttbbww'];

/**
 * Determine whether any permutation of a word is a palindrome
 * 
 * @param {string} word - The word to check
 * @returns {boolean} - Returns true if a permutation of the word is a palindrome
 */
function findPalindrome(word: string): boolean {
    // Create a hash map to store the letters
    let myHashMap = new HashMap(8);
    // Counter to track an odd count of a given letter
    let oddLetter = 0;
    // Assume that any single letter is a palindrome
    if (word.length === 1) {
        return true;
        // If the word contains more than one letter...
    } else {
        // Iterate over the letters and store a frequency count
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            let letter = word.charAt(i);
            // Check the hash map to see if the letter has already been encountered
            let value = myHashMap.get(letter);
            // If so, check whether the count is even or odd
            if (value) {
                count = value + 1;
                // console.log(`The count is ${count}`);
                if (count === word.length) {
                    return true;
                } else if (count % 2 === 1) {
                    oddLetter += 1;
                } else if (count % 2 === 0) {
                    oddLetter -= 1;
                }
                myHashMap.set(letter, count);
                // console.log(`The number of odd letters is ${oddLetter}`);
                // If the letter has not been seen before...
            } else {
                count = 1;
                myHashMap.set(letter, count);
                oddLetter += 1;
            }
        }
        // A permutation of a word is a palindrome if there is an 
        // odd number of letters and only one letter with a single count
        // console.log(`The number of odd letters is ${oddLetter}`);
        if (oddLetter === 1) {
            return true;
        } else {
            return false;
        }
    }
}

// These words are palindromes
words.forEach((word) => {
    let result = findPalindrome(word);
    console.log(`Any permutation of the word, ${word} is a palindrome? ${result}`);
});

// These words are not palindromes
fails.forEach((word) => {
    let result = findPalindrome(word);
    console.log(`Any permutation of the word, ${word} is a palindrome? ${result}`);
});

// Here are some unusual palindromes
weirds.forEach((word) => {
    let result = findPalindrome(word);
    console.log(`Any permutation of the word, ${word} is a palindrome? ${result}`);
});

let anagrams = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

/**
 * Find the anagrams in a list of words
 * 
 * @param {string[]} words - The list of words to check
 * @returns {array} An array of anagram arrays
 */
function findAnagrams(words: string[]) {
    // Use an object to store the groups of anagrams
    let anagrams = new HashMap(12);
    // Iterate over the list of words
    words.forEach((word) => {
        // Take each word and sort it alphabetically
        let ordered = word.split('').sort().join('');
        console.log(`The letters of the word sorted are:`, ordered);
        // Then store the word as a key in the hash map
        let values = [];
        // If the word already exists, add it to the values
        if (anagrams.get(ordered)) {
            // Push the word into an array and store as value
            values = anagrams.get(ordered);
            console.log(`The values are: `, values);
        }
        // If the word doesn't exist, add the key to the object
        values.push(word);
        console.log(`The values are: `, values);
        anagrams.set(ordered, values);
    });
    // When all the words have been evaluated, return an array
    // that contains an array of anagrams for each group
    let anagramGroups = [];
    // Use the keys method to get the keys in the hash map
    let anagramKeys = anagrams.keys();
    // Iterate over the keys and get the values
    anagramKeys.forEach((key) => {
        console.log(`The current key is: ${key}`);
        let anagramValues = anagrams.get(key);
        // Push the anagram values (arrays) to an array to return
        anagramGroups.push(anagramValues);
    });
    // Return the single array that contains the anagrams
    return anagramGroups;
}

let result = findAnagrams(anagrams);
console.log(`The list of anagrams is: `, result);