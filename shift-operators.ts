/**
 * Return base 10 number after shift
 * 
 * @param {number} value - The decimal number to shift
 * @param {number} bit - The number of bits to shift the value
 * @return {number} - The value after the left shift
 */
function shift(value, bit) {
    let shiftedLeft = value << bit;
    let shiftedRight = value >> bit; // The sign bit determines whether the fill is 1 or 0
    let zeroShift = value >>> bit; // Always shift right using 0
    console.log(`The value ${value} becomes ${shiftedLeft} when shifted left`);
    console.log(`The value ${value} becomes ${shiftedRight} when shifted right`);
    console.log(`The value ${value} becomes ${zeroShift} when zero shifted right`);
    return {
        'left': shiftedLeft,
        'right': shiftedRight,
        'zero': zeroShift
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

// Shift the number -23 to the left and right 5 bits
let value = -23;
let bit = 5;
console.log(`\nShift the number ${value} to the right and left ${bit} bit/s:`);
let number = shift(value, bit);
checkLeftValue(number, value, bit);

// Shift the number 11 to the left and right 4 bits
value = 11;
bit = 4;
console.log(`\nShift the number ${value} to the right and left ${bit} bit/s:`);
number = shift(value, bit);
checkLeftValue(number, value, bit);

/**
 * Doubles an integer
 * 
 * @param {Number} number The number to double
 * @returns {Number} The double value of the number
 */
function doubleValue(number) {
    let double = number << 1;
    console.log(`The integer ${number} doubled is ${double}`);
    return double;
}

// Double the number 32
value = 32;
console.log(`\nDouble the number ${value}:`);
let double = doubleValue(value);

/**
 * Quadruples an integer
 * 
 * @param {Number} number The number to quadruple
 * @returns {Number} The quadruple of the mumber
 */
function quadrupleValue(number) {
    let quad = number << 2;
    console.log(`The integer ${number} quadrupled is ${quad}`);
    return quad;
}

// Quadruple the number 32
value = 32;
console.log(`\nQuadruple the number ${value}:`);
let quad = quadrupleValue(value);

function divideByTwo(number) {
    let value = number >> 1;
    console.log(`The number ${number} divided by two rounded down is ${value}`);
    return value;
}

// Divide the number 32 by two
value = 32;
console.log(`\Divide the number ${value} by two:`);
let dividedByTwo = divideByTwo(value);

function powersOfTwo(exp) {
    let number = 1 << exp;
    console.log(`2^${exp} power is ${number}`);
    return number;
}

// Powers of two
console.log(`\nCalculate 2^n`);
let exp = 5;
let raised = powersOfTwo(5);

/**
 * Calculates the Morton Number for two 8-bit values (0 - 511)
 * 
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Number} The Morton number for the two values
 */
function mortonfyIt(num1, num2) {
    // shift the eigth bit of the first number to pos 16
    // shift the eigth bit of the second number to pos 15
    let morton = 0;
    let exp = 0;
    for (let i = 7; i >= 0; i--) {
        console.log(`i: ${i}`);
        let mask = 2 ** i;
        console.log(`The current mask is: ${mask}`);
        exp = i * 2;
        if (num1 & mask) {
            morton += 2 ** (exp + 1);
            console.log(`The current exponent is: ${exp + 1}`);
            console.log(`The current morton number is: ${morton}`);
        }
        if (num2 & mask) {
            morton += 2 ** (exp);
            console.log(`The current exponent is: ${exp}`);
            console.log(`The current morton number is: ${morton}`);
        }
    }
    console.log(`The morton number for ${num1} and ${num2} is ${morton}`);
    return morton;
}

// Morton Number
console.log(`\nCalculate the Morton Number:`);
let num = mortonfyIt(15, 48);


// Optional solution
function morton(x, y){
  var morton = 0;
  for(var i = 0; i < 64; i++){
  morton |= (y & 1 << i) << i | (x & 1 << i) << (i + 1)
  }
  return morton;
}
