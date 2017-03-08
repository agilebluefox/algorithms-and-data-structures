/**
 * Find the greatest common denominator for two numbers
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} The greatest common denominator
 */
function greatestCommonDenominator(a: number, b: number): number {
    let gcd: number = null;
    let max: number = null;
    let min: number = null;
    // The numbers should not be equal
    if (a !== b) {
        // Determine the maximum and minimum numbers
        max = a > b ? a : b;
        min = a < b ? a : b;
        // console.log(`The max is ${max} and the min is ${min}.`);
        // If the minimum number divides equally into the larger number then it is the greatest common denominator
        if (max % min === 0) {
            return min;
            // Otherwise keep searching
        } else {
            // Get the difference between the two numbers
            let diff: number = max - min;
            // Keep subtracting the minimum from the maximum until the remainder is less than the minimum
            while (diff > min) {
                diff -= min;
                // console.log(`The difference is: ${diff}`);
            }
            // Find the GCD by subtracting the difference from the minimum until the remainder is less than the difference
            gcd = min - diff;
            while (gcd > diff) {
                gcd -= diff;
                // console.log(`The greatest common denominator is: ${gcd}`);
            }
        }
        // Print the result and return the value
        console.log(`The greatest common denominator for ${a} and ${b} is: ${gcd}`);
        return gcd;
    }
    // If the numbers are equal return the first number
    return a;
}

greatestCommonDenominator(345, 150);
greatestCommonDenominator(252, 105);
greatestCommonDenominator(1071, 462);