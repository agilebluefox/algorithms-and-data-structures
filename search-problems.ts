// Maximum profit from buying and selling shares in a week
const sharePrices: number[] = [128, 97, 121, 123, 98, 97, 105];

/**
 * Calculates the maximum possible profit from buying and selling shares
 * 
 * @param {number[]} sharePrices 
 * @returns {number} The maximum profit possible for the given share prices
 */
function getMaxProfit(sharePrices: number[]): number {
    // Keep track of the maximum profit
    let maxProfit: number = 0;
    // Get a price to start the comparison
    for (let i = 0; i < sharePrices.length; i++) {
        let currentPrice: number = sharePrices[i];
        // Iterate through each price comparing it to the subsequent prices
        for (let j = i + 1; j < sharePrices.length; j++) {
            let newPrice: number = sharePrices[j];
            // console.log(`The current price is ${currentPrice} and the new price is ${newPrice}`);
            if (currentPrice >= newPrice) {
                continue;
            } else {
                // Compare the profit for each subsequent day after the selected price
                let potentialProfit: number = newPrice - currentPrice;
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
let thisWeeksProfit = getMaxProfit(sharePrices);
console.log(`The maximum profit predicted this week is: ${thisWeeksProfit}\n\n`);

// Find the highest floor from which an egg can be dropped without breaking
// using only two eggs and 100 floors.

/**
 * Get the highest floor an egg can be dropped before breaking
 * 
 * @param {number} topFloor 
 * @param {number} eggs 
 * @returns {*} 
 */
function highestFloor(topFloor: number, eggs: number): any {
    // Start on the first floor
    let bottomFloor: number = 1;
    // Get a random floor to represent the highest possible floor
    let maxFloor: number = getRandomFloor(bottomFloor, topFloor);
    console.log(`The max floor is: ${maxFloor}`);
    // Go drop some eggs
    return _dropEggs(bottomFloor, maxFloor, eggs, 0);
}

// Helper function to recursively search for the highest floor
function _dropEggs(bottomFloor: number, maxFloor: number, eggs: number, drops: number): any {
    // Keep track of the number of iterations
    drops = drops || 0;

    // Object to store the iterations and the floor number
    let highestFloorPossible = {
        count: 0,
        floor: 0
    };

    // Start with the lowest floor - if the egg does not break keep going higher
    if (bottomFloor === maxFloor) {
        highestFloorPossible.count = drops + 1;
        highestFloorPossible.floor = bottomFloor;
        console.log(`The highest possible floor to drop the egg without breaking is: ${highestFloorPossible.floor}`);
        console.log(`It took ${highestFloorPossible.count} attempts to find the highest floor.\n`);
        return highestFloorPossible;
    }

    // As long as you have eggs keep testing the floors
    if (eggs > 0) {
        if (bottomFloor > maxFloor) {
            // Drop an egg
            eggs -= 1;
            // Go down a floor since the egg broke
            bottomFloor -= 1;
        } else {
            // Travel up from the current floor but no further than the number of eggs remaining
            bottomFloor += eggs;
            drops += 1;
        }
        // Drop another egg to see what happens
        return _dropEggs(bottomFloor, maxFloor, eggs, drops);
    } else {
        // Something went wrong
        console.log(`You ran out of eggs before finding the highest floor!`);
        return highestFloorPossible;
    }
}

// Return a random floor
function getRandomFloor(min, max) {
    return Math.floor((Math.random() * max - min) + min);
}

let topfloor = highestFloor(100, 2);
console.log(topfloor);
