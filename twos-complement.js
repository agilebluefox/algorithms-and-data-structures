// Function to invert the bits of an integer
function twosComplement(number) {
    var binary = number.toString(2);
    var onesComplement = ~number;
    var invertedNumber = onesComplement + 1;
    console.log("The number to be converted is: " + binary + ", or " + number);
    console.log("The inverted number is: " + invertedNumber.toString(2) + ", or " + invertedNumber);
}
twosComplement(25);
//# sourceMappingURL=twos-complement.js.map