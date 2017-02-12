function findMax(array) {
    var max = array[0];
    for (var j = 1; j < array.length; j++) {
        var nextItem = array[j];
        if (nextItem > max) {
            max = nextItem;
        }
    }
    return max;
}
var numbers = [2, 99, 78, 66, 100, 37, 12, 42, 5, 81];
var max = findMax(numbers);
console.log(max);
//# sourceMappingURL=find-max-value.js.map