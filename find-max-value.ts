function findMax(array) {
    let max = array[0];
    for (let j = 1; j < array.length; j++) {
        let nextItem = array[j];
        if (nextItem > max) {
            max = nextItem;
        }
    }
    return max;
}

let numbers = [2, 99, 78, 66, 100, 37, 12, 42, 5, 81];

let max = findMax(numbers);
console.log(max);