"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The word's worst allocator
var memory = new Float64Array(1024);
var head = 0;
exports.allocate = function (size) {
    if (head + size > memory.length) {
        return null;
    }
    var start = head;
    head += size;
    return start;
};
exports.free = function (ptr) {
};
exports.copy = function (to, from, size) {
    if (from === to) {
        return;
    }
    else if (from > to) {
        // Iterate forwards
        for (var i = 0; i < size; i++) {
            exports.set(to + i, exports.get(from + i));
        }
    }
    else {
        // Iterate backwards
        for (var i = size - 1; i >= 0; i--) {
            exports.set(to + i, exports.get(from + i));
        }
    }
};
exports.get = function (ptr) {
    return memory[ptr];
};
exports.set = function (ptr, value) {
    memory[ptr] = value;
};
//# sourceMappingURL=memory.js.map