"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import the linked list class
var linked_lists_1 = require("./linked-lists");
var HashMapChained = (function () {
    // constructor
    function HashMapChained(size) {
        this._capacity = size;
        this._slots = [];
    }
    // hash algorithm to determine the slot index selected
    HashMapChained.prototype._hashString = function (string) {
        var hash = 5381;
        for (var i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    };
    // method to insert data
    HashMapChained.prototype.set = function (key, value) {
        // Get the index of the slot
        var index = this._findSlot(key);
        // console.log(`The index to set is: ${index}`);
        // variable to store the list object
        var list;
        // The index of the node in the list
        var nodeIndex;
        // The object containing the value 
        var data = {};
        data[key] = value;
        // console.log(`The data to store is: `, data);
        // Create the linked list if the slot is empty
        if (this._slots[index] === undefined) {
            list = new linked_lists_1.LinkedList();
            nodeIndex = list.length;
            this._slots[index] = list;
            list.insert(nodeIndex, data);
        }
        else {
            list = this._slots[index];
            for (var i = 0; i < list.length; i++) {
                // iterate through the list to find the value associated with the given key
                // console.log(`The list contents at the index ${i}: `, list.get(i).hasOwnProperty(key));
                if (list.get(i).hasOwnProperty(key)) {
                    nodeIndex = i;
                    // console.log(`The data object is: `, data);
                    list.update(nodeIndex, data);
                }
                else {
                    // the key isn't stored so add it to the linked list
                    nodeIndex = list.length;
                    list.insert(nodeIndex, data);
                }
            }
        }
        // console.log(`The list is: `, list);
    };
    // method to retrieve data
    HashMapChained.prototype.get = function (key) {
        // Get the index of the slot
        var index = this._findSlot(key);
        // Iterate through the linked list to find the data
        var list = this._slots[index];
        if (!list) {
            return null;
        }
        // console.log(`The list is: `, list);
        for (var i = 0; i < list.length; i++) {
            // iterate through the list to find the value associated with the given key
            // console.log(`The list contents at the index ${i}: `, list.get(i));
            if (list.get(i).hasOwnProperty(key)) {
                // console.log(`The value is: ${list.get(i)[key]}`);
                return list.get(i)[key];
            }
        }
    };
    // method to delete data
    HashMapChained.prototype.remove = function (key) {
        // Get the index of the slot
        var index = this._findSlot(key);
        // Get the list
        var list = this._slots[index];
        // Iterate over the list until the key is located
        for (var i = 0; i < list.length; i++) {
            if (list.value.key === key) {
                list.remove(i);
            }
        }
    };
    // method to find a slot
    HashMapChained.prototype._findSlot = function (key) {
        // get the hash for the given key
        var index = this._hashString(key) % this._capacity;
        return index;
    };
    return HashMapChained;
}());
exports.HashMapChained = HashMapChained;
//# sourceMappingURL=hash-map-chaining.js.map