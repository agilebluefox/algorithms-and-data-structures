/**
 * Set the third bit of a number
 * @param {number} number - The number to modify
 */
function setBit(number, bit) {
    console.log(number.toString(2) + " - The binary string to modify");
    var mask = 1 << bit - 1;
    number |= mask;
    console.log(number.toString(2) + " - the binary string after bit number " + bit + " is set");
    return number;
}
console.log("\nSet bit:");
var n75 = setBit(75, 3);
console.log("\nSet bit:");
n75 = setBit(75, 4);
function changeBit(number, bit) {
    console.log(number.toString(2) + " - The binary string to modify");
    var mask = 1 << bit - 1;
    number ^= mask;
    console.log(number.toString(2) + " - the binary string after bit number " + bit + " is changed");
    return number;
}
console.log("\nChange Bit:");
n75 = changeBit(75, 3);
console.log("\nChange Bit:");
n75 = changeBit(75, 4);
function zeroBit(number, bit) {
    console.log(number.toString(2) + " - The binary string to modify");
    var mask = 1 << bit - 1;
    if (number & mask) {
        // the bit is 1
        number ^= mask;
    }
    console.log(number.toString(2) + " - the binary string after bit number " + bit + " is zeroed out");
    return number;
}
console.log("\nZero bit:");
n75 = zeroBit(75, 3);
console.log("\nZero bit:");
n75 = zeroBit(75, 4);
function isSet(number, bit) {
    console.log(number.toString(2) + " - The binary string to check");
    var mask = 1 << bit - 1;
    if (number & mask) {
        // the bit is 1
        console.log("Bit " + bit + " is set.");
        number ^= mask;
    }
    else {
        console.log("Bit " + bit + " is not set");
    }
    return number;
}
console.log("\nIs the bit set?:");
n75 = isSet(75, 3);
console.log("\nIs the bit set?");
n75 = isSet(75, 4);
//# sourceMappingURL=interview-questions.js.map