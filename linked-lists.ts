export class LinkedList {
    private length;
    private head;


    // constructor
    constructor() {
        this.length = 0;
        this.head = null;
    }

    // Method to insert a new value in the list
    insert(index, value) {
        // Make sure the index is valid
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }

        // A node has a value and the link to the next node
        const newNode = {
            value: value,
            next: null
        };

        // If the node to be added is on the front of the list
        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
            // If the node is in the middle somewhere
        } else {
            // find the node after which to insert the new node
            const node = this._find(index - 1);
            // Copy the link to the next node from the previous node
            newNode.next = node.next;
            // The link on the previous node should be the new node
            node.next = newNode;
        }
        // Increase the length of the list
        this.length++;
    }

    // helper to find the node before the insert point
    _find(index) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    // Method to retrieve a value from the list
    get(index) {
        // Make sure the index is valid
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }

        return this._find(index).value;
    }

    // Remove an item from the list
    remove(index) {
        // Make sure the index is valid
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }

        // If removing the first item
        if (index == 0) {
            this.head = this.head.next;
        // If not the first item
        } else {
            let node = this._find(index - 1);
            node.next = node.next.next;
        }
        this.length--;
    }
}