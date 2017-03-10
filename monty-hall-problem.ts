// Monty Hall Problem 

// Randomize choice and prize selection
function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

// Randomly select a door
function selectDoor() {
    let door = getRandom(1, 4);
    return door;
}

function getPrize() {
    let prize = selectDoor();
    return prize;
}

function makeADeal(prize, choice) {
    // Choose either door that does not contain the prize
    let p = doors.indexOf(prize);
    let c = doors.indexOf(choice);
    let openDoor = null;
    for (let i=0; i < doors.length; i++) {
        if (i === p || i === c) {
            continue;
        }
        openDoor = doors[i];
    }
    let o = doors.indexOf(openDoor);
    let change = null;
    for (let i=0; i < doors.length; i++) {
        if (i === c || i === o) {
            continue;
        }
        change = doors[i];
    }
    return change;
}

// Keep track of wins and losses
let results = {
    offerWins: 0,
    offerFails: 0,
    originalWins: 0,
    originalFails: 0
};

// The initial selection of doors
let doors = [1, 2, 3];

// Accept the offer
function storeResults(original, offer, prize) {
    // If the offer is accepted
    if (offer === prize) {
        results.offerWins += 1;
    } else {
        results.offerFails += 1;
    }

    // If the offer is refused
    if (original === prize) {
        results.originalWins += 1;
    } else {
        results.originalFails += 1;
    }
}

let games = 100000;
while (games > 0) {
    // The contestant chooses a door
    let choice = selectDoor();

    // Get the door behind which is the prize
    let prize = getPrize();

    // Monty's offer
    let offer = makeADeal(prize, choice);
    // console.log(`The current values are: Choice=${choice}, Offer=${offer}, Prize=${prize}`);

    // Store the results
    storeResults(choice, offer, prize);

    games--;
}

let offerWinPct = ((results.offerWins / (results.offerWins + results.offerFails)) * 100);
let choiceWinPct = ((results.originalWins / (results.originalWins + results.originalFails)) * 100);

console.log(`If Monty's deal is accepted, the contestant wins ${offerWinPct}% of the time.`);
console.log(`If the contestant keeps the original choice, the contestant wins ${choiceWinPct}% of the time.`);
