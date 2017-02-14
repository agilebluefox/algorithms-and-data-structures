// Use the memory module to build an array
import memory = require('./memory');

// Build an array of zero length to represent memory
// The capacity represents the available space allocated
const Array = function() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
};

// Factor by which to allocate more space than you currently need
// This can optimize the array to O(1) although more memory is
// temporarily lost.

Array.SIZE_RATIO = 3;

// The push method takes a value, makes a place for it, then stores it
// To accommodate more items, the resize uses a factor
Array.prototype.push = function(value) {
    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
};

// Make room for more memory space
Array.prototype._resize = function(size) {
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
