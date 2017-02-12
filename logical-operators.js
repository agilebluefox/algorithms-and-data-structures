/**
 * Takes an integer and checks if it is even or odd using AND operator
 * @param {number} number - The number to check
 */
function evenOrOdd(number) {
    var result = null;
    number & 1 ? result = "odd" : result = "even";
    console.log("The number " + number + " is " + result);
}
console.log("\n************** Even or Odd ****************\n");
evenOrOdd(2);
evenOrOdd(13);
evenOrOdd(345);
evenOrOdd(1200);
/**
 * Takes two integers and prints the resultant value using the AND
 * operator and the OR operator.
 * @param {number} num1 - The first number
 * @param {number} num2 - The second number
 * @param {string} operator - Either OR, AND, or XOR
 */
function resultant(num1, num2, operator) {
    console.log("\nNumber one is " + num1.toString(2) + "(" + num1 + ") and number two is " + num2.toString(2) + "(" + num2 + ").");
    var operation = null;
    switch (operator) {
        case 'OR':
            operation = num1 | num2;
        case 'AND':
            operation = num1 & num2;
        case 'XOR':
            operation = num1 ^ num2;
        default:
            console.log("You need a valid operator - OR, AND, XOR");
    }
    console.log("The " + operator + " operation resultant is: " + operation);
}
console.log("\n************ Resultants for OR, AND, and XOR ***************\n");
resultant(43, 28, 'XOR');
resultant(2, 6, 'AND');
resultant(25, 25, 'OR');
/**
 * Return the complement of an integer
 * @param {number} number - Find the complement of this number
 */
function getComplement(number) {
    var complement = ~number;
    console.log("The complement of the number, " + number + " is " + complement);
}
console.log("\n************** Find the Complement ****************\n");
getComplement(39);
getComplement(99);
getComplement(-18);
getComplement(21468940560920384723957439);
getComplement(43526323456456234545646);
//# sourceMappingURL=logical-operators.js.map