// Bubble sort
function bubbleSort(array: number[]): number[] {
    // Track the swaps to determine if the array is sorted
    let swaps = 0;
    // Iterate through the array of items
    // Each item that is larger than the next needs a swap
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }
    // As long as swaps are occurring, the array is not sorted
    if (swaps > 0) {
        // call the method recursively to keep sorting
        return bubbleSort(array);
    }
    // When all items are in order return the array
    return array;
}

// Swap the elements
function swap(array: number[], i: number, j: number): void {
    let tmp: number = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

// Merge sort
function mergeSort(array: number[]) {
    // Base case - the array is split as small as possible
    if (array.length <= 1) {
        return array;
    }

    // Take the current array and split into two halves
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    console.log(`The left array is: `, );

    // Keep splitting the left and right halves
    left = mergeSort(left);
    right = mergeSort(right);
    // Start with the smallest array then proceed back upward
    return merge(left, right, array);
}

// Merge the items into the correct position
function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    // Check each half and select the lowest value first
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    // In cases where all the items in one half are merged
    // just iterate through the remaining items
    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }

    // Return the merged array
    return array;
}

// Quicksort
function quickSort(array: number[], start: number, end: number): number[] {
    // Get the start and end indices
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
    // When the start is greater than the end the array is sorted
    if (start >= end) {
        return array;
    }
    let middle: number = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}

// Lomuto's partitioning algorithm
function partition(array: number[], start: number, end: number): number {
    let pivot: number = array[end - 1];
    let j: number = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
}
