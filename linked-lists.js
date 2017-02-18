"use strict";
var LinkedList = (function () {
    // constructor
    function LinkedList() {
        this.length = 0;
        this.head = null;
    }
    // Method to insert a new value in the list
    LinkedList.prototype.insert = function (index, value) {
        // Make sure the index is valid
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }
        // A node has a value and the link to the next node
        var newNode = {
            value: value,
            next: null
        };
        // If the node to be added is on the front of the list
        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            // find the node after which to insert the new node
            var node = this._find(index - 1);
            // Copy the link to the next node from the previous node
            newNode.next = node.next;
            // The link on the previous node should be the new node
            node.next = newNode;
        }
        // Increase the length of the list
        this.length++;
    };
    // helper to find the node before the insert point
    LinkedList.prototype._find = function (index) {
        var node = this.head;
        for (var i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    };
    // Method to retrieve a value from the list
    LinkedList.prototype.get = function (index) {
        // Make sure the index is valid
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }
        return this._find(index).value;
    };
    // Remove an node from the list
    LinkedList.prototype.remove = function (index) {
        // Make sure the index is valid
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }
        // If removing the first node
        if (index == 0) {
            this.head = this.head.next;
        }
        else {
            var node = this._find(index - 1);
            node.next = node.next.next;
        }
        this.length--;
    };
    LinkedList.prototype.reverse = function () {
        // Get the first node in the list
        var node = this.head;
        // Get the next property of the first node
        // Set the next node to the next property of the first node
        var currentNode = node.next;
        // Set the next property of the first node to null
        node.next = null;
        // Get the next node in the list
        while (currentNode) {
            var nextNode = currentNode.next;
            currentNode.next = node;
            node = currentNode;
            currentNode = nextNode;
        }
        // Set the head to the last node
        this.head = node;
    };
    LinkedList.prototype.isCircular = function () {
        var pointer1 = this.head;
        var pointer2 = this.head.next;
        while (true) {
            // Not circular if a next property is null
            if (!pointer2 || !pointer2.next) {
                return false;
            }
            else if (pointer2 === pointer1 || pointer2.next === pointer1) {
                return true;
            }
            else {
                pointer1 = pointer1.next;
                pointer2 = pointer2.next.next;
            }
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//# sourceMappingURL=linked-lists.js.map