"use strict";
var HashMap = (function () {
    /**
     * Creates an instance of HashMap.
     *
     * @param {number} initialCapacity
     *
     * @memberOf HashMap
     */
    function HashMap(initialCapacity) {
        // Maximum ratio of filled slots to the capacity
        this.MAX_LOAD_RATIO = 0.9;
        // The ratio to use when resizing the hash map
        this.SIZE_RATIO = 3;
        // The number of slots that contain deleted values
        this._deleted = 0;
        this._capacity = initialCapacity || 8;
        this.length = 0;
        this._slots = [];
    }
    /**
     *
     *
     * @private
     * @param {string} string
     * @returns
     *
     * @memberOf HashMap
     */
    HashMap.prototype._hashString = function (string) {
        var hash = 5381;
        for (var i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    };
    /**
     * Retrieve a value from the hash map
     *
     * @param {any} key
     * @returns
     *
     * @memberOf HashMap
     */
    HashMap.prototype.get = function (key) {
        var index = this._findSlot(key);
        if (this._slots[index] === undefined) {
            return undefined;
        }
        return this._slots[index].value;
    };
    /**
     * Add an object to the hash map
     *
     * @param {any} key
     * @param {any} value
     *
     * @memberOf HashMap
     */
    HashMap.prototype.set = function (key, value) {
        var loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > this.MAX_LOAD_RATIO) {
            this._resize(this._capacity * this.SIZE_RATIO);
        }
        var index = this._findSlot(key);
        this._slots[index] = {
            key: key,
            value: value,
            deleted: false
        };
        this.length++;
    };
    /**
     * Find a slot with a given key
     *
     * @private
     * @param {any} key
     * @returns
     *
     * @memberOf HashMap
     */
    HashMap.prototype._findSlot = function (key) {
        var hash = this._hashString(key);
        var start = hash % this._capacity;
        for (var i = start; i < start + this._capacity; i++) {
            var index = i % this._capacity;
            var slot = this._slots[index];
            if (slot === undefined || (slot.key == key && !slot.deleted)) {
                return index;
            }
        }
    };
    /**
     * Resize the hash map
     *
     * @private
     * @param {any} size
     *
     * @memberOf HashMap
     */
    HashMap.prototype._resize = function (size) {
        var oldSlots = this._slots;
        this._capacity = size;
        // reset the length which will be rebuilt as the items are added back
        this.length = 0;
        this._deleted = 0;
        this._slots = [];
        for (var i = 0; i < oldSlots.length; i++) {
            var slot = oldSlots[i];
            if (slot !== undefined && !slot.deleted) {
                this.set(slot.key, slot.value);
            }
        }
    };
    HashMap.prototype.remove = function (key) {
        var index = this._findSlot(key);
        var slot = this._slots[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.deleted = true;
        this.length--;
        this._deleted++;
    };
    return HashMap;
}());
exports.HashMap = HashMap;
//# sourceMappingURL=hash-maps.js.map