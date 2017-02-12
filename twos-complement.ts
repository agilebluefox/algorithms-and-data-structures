// Function to invert the bits of an integer
function twosComplement(number) {
    let binary = number.toString(2);
    let onesComplement = ~number;
    let invertedNumber = onesComplement + 1;
    console.log(`The number to be converted is: ${binary}, or ${number}`);
    console.log(`The inverted number is: ${invertedNumber.toString(2)}, or ${invertedNumber}`);
}

twosComplement(25);