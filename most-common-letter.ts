// Start a timer
const t0 = Date.now();

// Find the most commonly occuring letter in a given sentence
let sentence = `Never waste a minute thinking about people you don't like.`;
sentence = sentence.toLowerCase();

function countLetters(sentence) {
    let letters = {};
    for (let l = 0; l < sentence.length; l++) {
        let letter = sentence.charAt(l);
        let letterCode = sentence.charCodeAt(l);
        if (letter.match(/\w/)) {
            if (letters.hasOwnProperty(letter)) {
                letters[letter] += 1;
            } else {
                letters[letter] = 1;
            }
        }
    }
    return letters;
}

let freqLetters = countLetters(sentence);
console.log(`The frequency count of the letters in the sentence is:\n `, freqLetters);

function mostCommonLetter(freq) {
    let mcl;
    let count = 0;
    for (let prop in freq) {
        if (freq[prop] > count) {
            mcl = prop;
            count = freq[prop];
        }
    }
    return mcl;
}

let mclwinner = mostCommonLetter(freqLetters);
console.log(`The most common letter in the sentence is: ${mclwinner}`);

// End the timer
const t1 = Date.now();

// Print performance timer
console.log(`The script took ${t1 - t0}ms to run`);
