// Use the memory module to build an array
import memory = require('./memory');

// Build an array of zero length to represent memory
const Array = function() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
};

// The push method takes a value, makes a place for it, then stores it
Array.prototype.push = function(value) {
    this._resize(this.length + 1);
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
};
