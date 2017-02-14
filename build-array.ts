// Use the memory module to build an array
import memory = require('./memory');

// Build an array of zero length to represent memory
// The capacity represents the available space allocated
const Array = function () {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
};

// Factor by which to allocate more space than you currently need
// This can optimize the array to O(1) although more memory is
// temporarily lost.

const SIZE_RATIO = 3;

// The push method takes a value, makes a place for it, then stores it
// To accommodate more items, the resize uses a factor
Array.prototype.push = function (value) {
    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
};

// Make room for more memory space
Array.prototype._resize = function (size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
        throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    // Update the capacity to the allocated memory
    this._capacity = size;
};

// Retreiving items from the array by adding the index
// to the memory location for the start of the array - an O(1) cost
Array.prototype.get = function (index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
};

// Remove a value from the end of the array
Array.prototype.pop = function () {
    if (this.length == 0) {
        throw new Error('Index Error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
};

// Inserting a value into any point in the array
Array.prototype.insert = function (index, value) {
    // Check the index is valid
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }
    // Allocate more memory if smaller than needed
    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * SIZE_RATIO);
    }
    // Move everything beyond the index where the value is
    // going to be inserted forward one spot then add the value
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
};

// Removing values
Array.prototype.remove = function (index) {
    // Check the index is valid
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }
    // Copy the values beyond the index and move them forward one spot
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
};
