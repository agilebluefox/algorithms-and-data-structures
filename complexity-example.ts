// Finds the nth element in an array
/**
 * Finds an element in an array
 * @param {array} array - The array of elements to be searched.
 * @param {number} n - The element to find.
 * @param {number} counter - The iterations required to find the element. 
 */
var findNthElement = function (array, n, counter) {
    let t: number; // Store the current iteration number
    counter >= 0 ? t = count(counter) : t = 0;

    if (array.length == 1) {
        let index = null;
        if (array[n]) {
            index = array[n];
            console.log(`It took ${t} iterations to find the value at index ${index}.\n\n`);
        } else {
            console.log(`The element did not exist in the array - ${t} iterations\n\n`);
        }
        return array[n];
    }
    var middle = Math.floor(array.length / 2);
    if (n < middle) {
        return findNthElement(array.slice(0, middle), n, t);
    } else {
        return findNthElement(array.slice(middle, array.length), n - middle, t);
    }
};

// Increment the count and print the results to the console 
function count(number) {
    number = number + 1;
    console.log(`The current iteration is: ${number}`);
    return number;
};

// Create an array with a series of randomly generated numbers for the elements
// The function takes a number which corresponds to the number of elements
var randArray = function (number) {
    var array = [];
    for (var n = 0; n < number; n++) {
        var element = getRandomInt(0, 10000);
        array.push(element);
    }
    return array;
};

// Return a random integer given a range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Run a test on the search algorithm to compare the iterations needed
// when the size of the array grows exponentially
function testFindNthElement() {
    var arrayLength = [10, 100, 1000, 10000, 100000];
    for (var i = 0; i < arrayLength.length; i++) {
        console.log(`***********  Starting with ${arrayLength[i]} items in the search`);
        var testArray = randArray(arrayLength[i]);
        findNthElement(testArray, 7, 0);
    }
    console.log('***********************************');
}

// Find a series of elements from an array
var findElements = function (array, toFind) {
    var elements = [];
    for (var i = 0; i < toFind.length; i++) {
        let iter = 0;
        console.log(`The number to find in the array is: ${toFind[i]}`);
        var element = findNthElement(array, toFind[i], iter);
        elements.push(element);
    }
    return elements;
};

function testFindElements() {
    var arrayLength = [10, 100, 1000, 10000, 100000];
    for (var i = 0; i < arrayLength.length; i++) {
        console.log(`***********  Starting with ${arrayLength[i]} items in the search`);
        var testArray = randArray(arrayLength[i]);
        var toFindArray = randArray(3);
        // console.log(`The testArray is: `, testArray);
        // console.log(`The array to find is: `, toFindArray);
        findElements(testArray, toFindArray);
    }
    console.log('***********************************');
}

// Returns whether a number is odd or even
var isOdd = function (number) {
    var remainder = number % 2;
    return remainder == 1;
};

// Calculates the sample autocorrelation matrix (i.e. the matrix found by
// multiplying every item in an array with every other item)
var sampleAutocorrelationMatrix = function (array) {
    var matrix = [];
    for (var i = 0; i < array.length; i++) {
        var row = [];
        for (var j = 0; j < array.length; j++) {
            row.push(array[i] * array[j]);
        }
        matrix.push(row);
    }
};

// Doubles every value in an array
var doubleArray = function (array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
    }
    return array;
};

// Calculates the nth triangle number
// This one's a challenge! :)
var triangleNumbers = function (n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return triangleNumbers(n - 1) + triangleNumbers(n - 1) - triangleNumbers(n - 2) + 1;
};


// Test the search algorithm
console.log('\n\nTest the findNthElement function\n\n');
testFindNthElement();

// Test the search using an array of elements to find
console.log('\n\nTest the findElements function\n\n');
testFindElements();