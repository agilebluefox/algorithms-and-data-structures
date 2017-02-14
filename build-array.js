"use strict";
// Use the memory module to build an array
var memory = require("./memory");
// Build an array of zero length to represent memory
var Array = function () {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
};
// The push method takes a value, makes a place for it, then stores it
Array.prototype.push = function (value) {
    this._resize(this.length + 1);
    memory.set(this.ptr + this.length, value);
    this.length++;
};
//# sourceMappingURL=build-array.js.map