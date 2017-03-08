// Maximum profit from buying and selling shares in a week
var sharePrices = [128, 97, 121, 123, 98, 97, 105];
/**
 * Calculates the maximum possible profit from buying and selling shares
 *
 * @param {number[]} sharePrices
 * @returns {number} The maximum profit possible for the given share prices
 */
function getMaxProfit(sharePrices) {
    // Keep track of the maximum profit
    var maxProfit = 0;
    // Get a price to start the comparison
    for (var i = 0; i < sharePrices.length; i++) {
        var currentPrice = sharePrices[i];
        // Iterate through each price comparing it to the subsequent prices
        for (var j = i + 1; j < sharePrices.length; j++) {
            var newPrice = sharePrices[j];
            // console.log(`The current price is ${currentPrice} and the new price is ${newPrice}`);
            if (currentPrice >= newPrice) {
                continue;
            }
            else {
                // Compare the profit for each subsequent day after the selected price
                var potentialProfit = newPrice - currentPrice;
                if (potentialProfit > maxProfit) {
                    maxProfit = potentialProfit;
                }
            }
        }
    }
    // Return the maximum value after all prices have been compared
    return maxProfit;
}
// Get the max profit for the week
var thisWeeksProfit = getMaxProfit(sharePrices);
console.log("The maximum profit predicted this week is: " + thisWeeksProfit + "\n\n");
// Find the highest floor from which an egg can be dropped without breaking
// using only two eggs and 100 floors.
/**
 * Get the highest floor an egg can be dropped before breaking
 *
 * @param {number} topFloor
 * @param {number} eggs
 * @returns {*}
 */
function highestFloor(topFloor, eggs) {
    // Start on the first floor
    var bottomFloor = 1;
    // Get a random floor to represent the highest possible floor
    var maxFloor = getRandomFloor(bottomFloor, topFloor);
    console.log("The max floor is: " + maxFloor);
    // Go drop some eggs
    console.log("Using the brute force strategy the result is: ");
    var bf = _dropEggsBruteForce(bottomFloor, maxFloor, eggs, 0);
    console.log("Using the divide and conquer strategy the result is: ");
    var dc = _dropEggsDivideAndConquer(bottomFloor, topFloor, maxFloor, eggs, null);
}
// Helper function to recursively search for the highest floor
function _dropEggsBruteForce(bottomFloor, maxFloor, eggs, drops) {
    // Keep track of the number of iterations
    drops = drops || 0;
    // Object to store the iterations and the floor number
    var highestFloorPossible = {
        count: 0,
        floor: 0
    };
    // Drop an egg starting with the lowest floor - if the egg does not break keep going higher
    if (bottomFloor === maxFloor) {
        highestFloorPossible.count = drops + 1;
        highestFloorPossible.floor = bottomFloor;
        console.log("The highest possible floor to drop the egg without breaking is: " + highestFloorPossible.floor);
        console.log("It took " + highestFloorPossible.count + " attempts to find the highest floor.\n");
        return highestFloorPossible;
    }
    // As long as you have eggs keep testing the floors
    if (eggs > 0) {
        if (bottomFloor > maxFloor) {
            // Drop an egg
            eggs -= 1;
            // Go down a floor since the egg broke
            bottomFloor -= 1;
        }
        else {
            // Travel up from the current floor but no further than the number of eggs remaining
            bottomFloor += eggs;
            drops += 1;
        }
        // Drop another egg to see what happens
        return _dropEggsBruteForce(bottomFloor, maxFloor, eggs, drops);
    }
    else {
        // Something went wrong
        console.log("You ran out of eggs before finding the highest floor!");
        return highestFloorPossible;
    }
}
function _dropEggsDivideAndConquer(bottomFloor, topFloor, maxFloor, eggs, drops) {
    // Keep track of the number of iterations
    drops = drops || 0;
    // Keep track of the highest floor which the egg can be dropped without breaking
    var highestFloor = null;
    // Object to store the iterations and the floor number
    var highestFloorPossible = {
        count: 0,
        floor: 0
    };
    // Drop the egg from the floor in the middle of the range
    // If it breaks, the solution is in the lower half of the range
    // Otherwise, it's in the upper half
    // Choose the floor that is halfway to the top and repeat
    var middle = Math.floor(((topFloor - bottomFloor) / 2) + bottomFloor);
    // Drop an egg from the middle floor 
    drops += 1;
    // If the egg breaks
    if (middle >= maxFloor) {
        eggs -= 1;
        var floor = bottomFloor;
        while (floor <= maxFloor) {
            floor += 1;
            drops += 1;
        }
        highestFloor = floor - 1;
    }
    else {
        bottomFloor = middle + 1;
        return _dropEggsDivideAndConquer(bottomFloor, topFloor, maxFloor, eggs, drops);
    }
    highestFloorPossible.floor = highestFloor;
    highestFloorPossible.count = drops;
    // Print the result to the console to evaluate effectiveness and efficiency
    console.log("The highest possible floor to drop the egg without breaking is: " + highestFloorPossible.floor);
    console.log("It took " + highestFloorPossible.count + " attempts to find the highest floor.\n");
    return highestFloorPossible;
}
// Return a random floor
function getRandomFloor(min, max) {
    return Math.floor((Math.random() * max - min) + min);
}
var topfloor = highestFloor(100, 2);
//# sourceMappingURL=search-problems.js.map