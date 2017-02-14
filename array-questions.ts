function removeLessThanFive(numbers: number[]) {
    let length = numbers.length;
    // iterate over the array and remove values less than five
    for (let i = 0; i < length; i++) {
        // Check the value at each index
        if (numbers[i] < 5) {
            // Copy the array values past the current index
            let nextItems: number[] = numbers.splice(i + 1, length - i - 1);
            // Insert the remaining items starting in the current index
            numbers.splice(i, 1, ...nextItems);
            // Decrement the iteration in case the replacement fails the test
            i--;
        }
    }
    return numbers;
}

const myArray = [1, 4, 5, 8, 6, 5, 7, 3, 5, 6, 9, 7];
console.log(`The original array: `, myArray);
let filteredArray = removeLessThanFive(myArray);
console.log(`The filtered array: `, filteredArray);