export class HashMap {
    // Maximum ratio of filled slots to the capacity
    private MAX_LOAD_RATIO = 0.9;
    // The ratio to use when resizing the hash map
    private SIZE_RATIO = 3;
    // The array of slots in the hash map
    private _slots: any[];
    // The current capacity of the hash map
    private _capacity: number;
    // The number of slots that contain deleted values
    private _deleted = 0;

    // Public properties
    public length: number;

    /**
     * Creates an instance of HashMap.
     * 
     * @param {number} initialCapacity
     * 
     * @memberOf HashMap
     */
    constructor(initialCapacity: number) {
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
    private _hashString(string: string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }

    /**
     * Retrieve a value from the hash map
     * 
     * @param {any} key
     * @returns
     * 
     * @memberOf HashMap
     */
    get(key) {
        let index = this._findSlot(key);
        if (this._slots[index] === undefined) {
            return undefined;
            // throw new Error('Key error');
        }
        return this._slots[index].value;
    }

    /**
     * Add an object to the hash map
     * 
     * @param {any} key
     * @param {any} value
     * 
     * @memberOf HashMap
     */
    set(key, value) {
        let loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > this.MAX_LOAD_RATIO) {
            this._resize(this._capacity * this.SIZE_RATIO);
        }

        let index = this._findSlot(key);
        this._slots[index] = {
            key: key,
            value: value,
            deleted: false
        };
        this.length++;
    }

    /**
     * Find a slot with a given key
     * 
     * @private
     * @param {any} key
     * @returns
     * 
     * @memberOf HashMap
     */
    private _findSlot(key) {
        let hash = this._hashString(key);
        let start = hash % this._capacity;

        for (let i = start; i < start + this._capacity; i++) {
            let index = i % this._capacity;
            let slot = this._slots[index];
            if (slot === undefined || (slot.key == key && !slot.deleted)) {
                return index;
            }
        }
    }

    /**
     * Resize the hash map
     * 
     * @private
     * @param {any} size
     * 
     * @memberOf HashMap
     */
    private _resize(size) {
        let oldSlots = this._slots;
        this._capacity = size;
        // reset the length which will be rebuilt as the items are added back
        this.length = 0;
        this._deleted = 0;
        this._slots = [];
        for (let i = 0; i < oldSlots.length; i++) {
            let slot = oldSlots[i];
            if (slot !== undefined && !slot.deleted) {
                this.set(slot.key, slot.value);
            }
        }
    }

    remove(key) {
        let index = this._findSlot(key);
        let slot = this._slots[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.deleted = true;
        this.length--;
        this._deleted++;
    }

    keys() {
        let keys = this._slots.filter((slot) => slot && slot.deleted === false).map((slot) => slot.key);
        return keys;
    }
}
