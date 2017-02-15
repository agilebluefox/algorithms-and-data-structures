function removeLessThanFive(numbers) {
    var length = numbers.length;
    // iterate over the array and remove values less than five
    for (var i = 0; i < length; i++) {
        // Check the value at each index
        if (numbers[i] < 5) {
            // Copy the array values past the current index
            var nextItems = numbers.splice(i + 1, length - i - 1);
            // Insert the remaining items starting in the current index
            numbers.splice.apply(numbers, [i, 1].concat(nextItems));
            // Decrement the iteration in case the replacement fails the test
            i--;
        }
    }
    return numbers;
}
console.log("\n***** Filter an array of numbers *****\n");
var myArray = [1, 4, 5, 8, 6, 5, 7, 3, 5, 6, 9, 7];
console.log("The original array: ", myArray);
var filteredArray = removeLessThanFive(myArray);
console.log("The filtered array: ", filteredArray);
/**
 * Take two sorted arrays and combine them into a single sorted array
 *
 * @param {Array} array1 - The first sorted array
 * @param {Array} array2 - The second sorted array
 * @return {Array} A single sorted and merged array
 */
function mergeSortArray(array1, array2) {
    // The merged array
    var merged = [];
    // Starting indexes for each array 
    var x = 0;
    var y = 0;
    // Compare the values of each array and store the lowest number
    // in the merged array
    do {
        // Value 1 is less than value 2
        if (array1[x] < array2[y]) {
            // Push value 1 to the merged array
            merged.push(array1[x]);
            console.log("X is " + x + ", Y is " + y + ": ", merged);
            // Go to the next value in the first array
            x += 1;
        }
        else if (array1[x] === array2[y]) {
            // Push value 1 to the merged array
            merged.push(array1[x]);
            console.log("X is " + x + ", Y is " + y + ": ", merged);
            // Go to the next value in the first array
            x += 1;
        }
        else if (array1[x] > array2[y]) {
            // Push value 2 to the merged array
            merged.push(array2[y]);
            console.log("X is " + x + ", Y is " + y + ": ", merged);
            // Go to the next value in the second array
            y += 1;
        }
        // Check to see if one of the arrays is out of values
        // If so, just keep pushing the values from the other
        // array to the merged array
        if (array1[x] && y >= array2.length) {
            merged.push(array1[x]);
            console.log("X is " + x + ", Y is " + y + ": ", merged);
            x += 1;
        }
        if (array2[y] && x >= array1.length) {
            merged.push(array2[y]);
            console.log("X is " + x + ", Y is " + y + ": ", merged);
            y += 1;
        }
    } while (array1[x] || array2[y]);
    // Return the merged and sorted array
    return merged;
}
var array1 = [1, 3, 6, 8, 11];
var array2 = [2, 3, 5, 8, 9, 10];
console.log("\n***** Merge two sorted arrays into a single sorted array *****\n");
var mergedArray = mergeSortArray(array1, array2);
console.log("The first array: ", array1);
console.log("The second array: ", array2);
console.log("The merged array: ", mergedArray);
array1 = [1, 3, 6, 8, 11, 45, 63];
array2 = [2, 3, 5, 8, 9, 10];
console.log("***** Merge two sorted arrays into a single sorted array *****\n");
mergedArray = mergeSortArray(array1, array2);
console.log("The first array: ", array1);
console.log("The second array: ", array2);
console.log("The merged array: ", mergedArray);
//# sourceMappingURL=array-questions.js.map