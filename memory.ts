// The word's worst allocator
const memory = new Float64Array(1024);
let head = 0;

export const allocate = function(size) {
    if (head + size > memory.length) {
        return null;
    }
    var start = head;
    head += size;
    return start;
};

export const free = function(ptr) {
};

export const copy = function(to, from, size) {
    if (from === to) {
        return;
    }
    else if (from > to) {
        // Iterate forwards
        for (let i=0; i<size; i++) {
            set(to + i, get(from + i));
        }
    }
    else {
        // Iterate backwards
        for (let i=size - 1; i>=0; i--) {
            set(to + i, get(from + i));
        }
    }
};

export const get = function(ptr) {
    return memory[ptr];
};

export const set = function(ptr, value) {
    memory[ptr] = value;
};
