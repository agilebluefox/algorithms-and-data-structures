const testArray = [5, 7, 9, 1, 13, 23, 11, 10, 3, 8, 25, 19, 14, 2];
const testArray2 = [1, 2, 6, 5, 3, 4];
const consecutive = [3, 11, 5, 8, 1, 9, 10, 2, 4, 7, 6];
const consecutive2 = [112, 123, 115, 119, 118, 113, 117, 121, 111, 122, 114, 116, 120];


// Write an algorithm to sort an array of integers when the lowest and
// highest values are known with an O(n) performance
function sortMinAndMax(array: number[], min: number, max: number): number[] {
    console.log(`The array to sort is: `, array);
    // Get the number of values in the array to sort
    let length: number = array.length;
    // Start with the initial index where the minimum value will be stored
    let i: number = 0;
    // Iterate over the array
    while (i < length) {
        // If the current value is in the index where it should be go to the next
        if (i === (array[i] - min)) {
            i++;
            // Swap the current value with the value in it's proper place    
        } else {
            // Subtract the min value from the current to get the index where it should be placed
            let j = array[i] - min;
            swap(array, i, j);
        }
    }
    console.log(`The sorted array is: `, array);
    // Return the sorted array
    return array;
}

// Swap the elements
function swap(array: number[], i: number, j: number) {
    let tmp: number = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

// Write an algorithm to shuffle an array into a random order in-place

// Recursive function to break the array in half
function quickSort(array: number[], start?: number, end?: number): number[] {
    // Evaluate the start and end point
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    // Base case to stop recursion
    if (start >= end) {
        return array;
    }

    // Find the index of the value in the middle of the array
    let middle = improvedPartition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}

// Function to partition the array
function improvedPartition(array: number[], start: number, end: number): number {
    const pivot = array[end - 1];
    console.log(`The pivot value is: ${pivot}, the start is ${start}, and the end is ${end}`);
    let j = start;
    for (let i = start; i < end - 1; i++) {
        console.log(`The values are: pivot=${pivot}, j=${j}, i=${i}, array[i]=${array[i]}`);
        if (array[i] <= pivot) {
            if (i !== j) {
                console.log(`Perform a swap with ${array[i]} and ${array[j]}`);
                swap(array, i, j);
            }
            j++;
        }
        console.log(`After evaluation the values are: pivot=${pivot}, j=${j}, i=${i}, array[i]=${array[i]} :`, array);
        console.log('\n');
    }
    swap(array, end - 1, j);
    console.log(`DONE----The value of j=${j} once the array is partitioned: `, array);
    console.log('\n');
    return j;
}


// Function to partition the array
function randomSort(array: number[]): void {
    let i = 0;
    let rand = null;
    while (i < array.length) {
        rand = getRandomIndex(0, array.length);
        swap(array, i, rand);
        i++;
    }
}

// Return a random index
function getRandomIndex(min, max) {
    return Math.floor((Math.random() * max - min) + min);
}

sortMinAndMax(consecutive, 1, 11);
sortMinAndMax(consecutive2, 111, 123);

console.log(`\n***** QuickSort an Array of Numbers *****\n`);
quickSort(testArray);

console.log(`Randomly sort the values in this array: `, testArray);
randomSort(testArray);
console.log(`The randomly assorted array is: `, testArray);
