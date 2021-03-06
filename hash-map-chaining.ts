// import the linked list class
import { LinkedList } from './linked-lists';

export class HashMapChained {
    // Basic parameters for the hash map
    private _slots: any[];
    private _capacity: number;

    // constructor
    constructor(size) {
        this._capacity = size;
        this._slots = [];
    }

    // hash algorithm to determine the slot index selected
    private _hashString(string: string): number {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }

    // method to insert data
    set(key: string, value: any) {
        // Get the index of the slot
        let index: number = this._findSlot(key);
        // console.log(`The index to set is: ${index}`);
        // variable to store the list object
        let list: any;
        // The index of the node in the list
        let nodeIndex: number;
        // The object containing the value 
        let data = {};
        data[key] = value;
        // console.log(`The data to store is: `, data);

        // Create the linked list if the slot is empty
        if (this._slots[index] === undefined) {
            list = new LinkedList();
            nodeIndex = list.length;
            this._slots[index] = list;
            list.insert(nodeIndex, data);
        } else {
            list = this._slots[index];
            for (let i = 0; i < list.length; i++) {
                // iterate through the list to find the value associated with the given key
                // console.log(`The list contents at the index ${i}: `, list.get(i).hasOwnProperty(key));
                if (list.get(i).hasOwnProperty(key)) {
                    nodeIndex = i;
                    // console.log(`The data object is: `, data);
                    list.update(nodeIndex, data);
                } else {
                    // the key isn't stored so add it to the linked list
                    nodeIndex = list.length;
                    list.insert(nodeIndex, data);
                }
            }
        }
        // console.log(`The list is: `, list);
    }

    // method to retrieve data
    get(key: string) {
        // Get the index of the slot
        let index: number = this._findSlot(key);
        // Iterate through the linked list to find the data
        let list = this._slots[index];
        if (!list) {
            return null;
        }
        // console.log(`The list is: `, list);
        for (let i = 0; i < list.length; i++) {
            // iterate through the list to find the value associated with the given key
            // console.log(`The list contents at the index ${i}: `, list.get(i));
            if (list.get(i).hasOwnProperty(key)) {
                // console.log(`The value is: ${list.get(i)[key]}`);
                return list.get(i)[key];
            }
        }
    }

    // method to delete data
    remove(key: string) {
        // Get the index of the slot
        let index: number = this._findSlot(key);

        // Get the list
        let list = this._slots[index];

        // Iterate over the list until the key is located
        for (let i = 0; i < list.length; i++) {
            if (list.value.key === key) {
                list.remove(i);
            }
        }

    }

    // method to find a slot
    _findSlot(key: string): number {
        // get the hash for the given key
        let index: number = this._hashString(key) % this._capacity;
        return index;
    }
}