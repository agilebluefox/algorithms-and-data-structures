"use strict";
// Import the LinkedList class
var linked_lists_1 = require("./linked-lists");
// Create a linked list
var myLinkedList = new linked_lists_1.LinkedList();
/**
 * Insert nodes in a linked list for demo purposes
 *
 * @param {*} linkedList
 * @param {number} numberItems
 */
function populateLinkedList(linkedList, numberItems) {
    for (var i = 0; i < numberItems; i++) {
        var randomValue = getRandValue(1, 100);
        linkedList.insert(i, randomValue);
    }
    return linkedList;
}
/**
 * Get a random value
 *
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} The random number generated between the minimum and maximum values inclusive.
 */
function getRandValue(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}
// Insert some dummy nodes
var items = getRandValue(30, 179);
var demo = populateLinkedList(myLinkedList, items);
// Print items in the demo linked list
console.log("\n***** The demo linked list *****\n");
console.log("The linked list has " + demo.length + " items in the list.\n");
console.log("The 1st item in the list is: ", demo._find(0));
console.log("The 2nd item in the list is: ", demo._find(1));
console.log("The last item in the list is: ", demo._find(demo.length - 1));
console.log("\n***** End demo linked list *****\n");
function countTheElements(list) {
    var index = 0;
    var currentNode = list._find(index);
    var count = 0;
    while (currentNode.next) {
        count += 1;
        index += 1;
        currentNode = list._find(index);
    }
    console.log("The last node in the list is at index " + count + ".");
    var elements = count + 1;
    return elements;
}
function findMiddleIndex(elements) {
    var midIdx = Math.floor(elements / 2);
    console.log("The index of the middle item is: " + midIdx + "\n");
    return midIdx;
}
console.log("\n***** Find the middle element of the linked list *****\n");
var numberOfElements = countTheElements(demo);
console.log("\nThe list contains " + numberOfElements + " elements.");
var middleElement = demo._find(findMiddleIndex(numberOfElements));
console.log("\nThe middle element at in the list is: ", middleElement);
console.log("\n***** End finding the middle element *****\n");
//# sourceMappingURL=linked-list-interviews.js.map