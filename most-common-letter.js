// Start a timer
var t0 = Date.now();
// Find the most commonly occuring letter in a given sentence
var sentence = "Never waste a minute thinking about people you don't like.";
sentence = sentence.toLowerCase();
function countLetters(sentence) {
    var letters = {};
    for (var l = 0; l < sentence.length; l++) {
        var letter = sentence.charAt(l);
        var letterCode = sentence.charCodeAt(l);
        if (letter.match(/\w/)) {
            if (letters.hasOwnProperty(letter)) {
                letters[letter] += 1;
            }
            else {
                letters[letter] = 1;
            }
        }
    }
    return letters;
}
var freqLetters = countLetters(sentence);
console.log("The frequency count of the letters in the sentence is:\n ", freqLetters);
function mostCommonLetter(freq) {
    var mcl;
    var count = 0;
    for (var prop in freq) {
        if (freq[prop] > count) {
            mcl = prop;
            count = freq[prop];
        }
    }
    return mcl;
}
var mclwinner = mostCommonLetter(freqLetters);
console.log("The most common letter in the sentence is: " + mclwinner);
// End the timer
var t1 = Date.now();
// Print performance timer
console.log("The script took " + (t1 - t0) + "ms to run");
//# sourceMappingURL=most-common-letter.js.map