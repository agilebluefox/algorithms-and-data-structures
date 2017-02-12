/**
 * Return base 10 number after shift
 * 
 * @param {number} value - The decimal number to shift
 * @param {number} bit - The number of bits to shift the value
 * @return {number} - The value after the left shift
 */
function shift(value, bit) {
    let shiftedLeft = value << bit;
    let shiftedRight = value >> bit;
    console.log(`The value ${value} becomes ${shiftedLeft} when shifted left`);
    console.log(`The value ${value} becomes ${shiftedRight} when shifted right`);
    return {
        'left': shiftedLeft,
        'right': shiftedRight
    };
}

/**
 * Confirm the shifted value is accurate
 * 
 * @param {number} shifted - The value after the shift
 * @param {number} value - The original number to shift
 * @param {number} bit - The number of bits to shift the number to the left
 */
function checkLeftValue(shifted, value, bit) {
    let calcLeftShift = value * (2 ** bit);
    if (shifted.left === calcLeftShift) {
        console.log(`The left shifted value is correct`);
    } else {
        console.log(`The left shifted calculation should be ${calcLeftShift}`);
    }
}

// Shift the number 23 to the left 5 bits
let value = -23;
let bit = 5;
let number = shift(value, bit);
checkLeftValue(number, value, bit);
