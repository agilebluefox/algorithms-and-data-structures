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
//# sourceMappingURL=array-questions.js.map