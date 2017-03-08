"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class to build a node for the binary tree
 *
 * @class Node
 */
var Node = (function () {
    function Node(key) {
        this.key = key || null;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
/**
 * Class to instantiate a binary tree
 *
 * @export
 * @class BinaryTree
 */
var BinaryTree = (function () {
    function BinaryTree() {
        // The root node is empty when the tree is constructed
        this.root = null;
    }
    // Insert a new key in the tree
    BinaryTree.prototype.insert = function (key) {
        // Start by constructing a node with the new key
        var newNode = new Node(key);
        // If the root node is empty, set the root to the new node
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            // If the root exists, search for a location based on value
            this._insert(this.root, newNode);
        }
    };
    // helper function to determine where the new node goes
    BinaryTree.prototype._insert = function (node, newNode) {
        // Smaller values go left
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this._insert(node.left, newNode);
            }
            // larger values go right    
        }
        else if (newNode.key > node.key) {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this._insert(node.right, newNode);
            }
        }
    };
    // Search for a key 
    BinaryTree.prototype.dfSearch = function (key) {
        return this._dfSearch(this.root, key);
    };
    // Helper method to check a node for a value
    BinaryTree.prototype._dfSearch = function (node, key) {
        // If the node is empty then the value was not found
        if (node === null) {
            return false;
        }
        // If the value is less than the current key keep going left
        if (key < node.key) {
            return this._dfSearch(node.left, key);
            // If the value is greater than the current key keep going right
        }
        else if (key > node.key) {
            return this._dfSearch(node.right, key);
        }
        else {
            // If the value is neither greater than or less than the key, it must be the value
            return true;
        }
    };
    BinaryTree.prototype.bfSearch = function (key) {
        var queue = [this.root];
        while (queue.length) {
            var node = queue.shift();
            if (node.key === key) {
                return node;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        console.log("The key was not found");
        return null;
    };
    // Traverse the tree in sorting order
    BinaryTree.prototype.inOrderTraverse = function (cb) {
        this._inOrderTraverse(this.root, cb);
    };
    // Helper function to execute at each node to get the nodes in ascending order
    BinaryTree.prototype._inOrderTraverse = function (node, cb) {
        // As long as the node exists
        if (node !== null) {
            // Start checking the left side for the lowest value
            this._inOrderTraverse(node.left, cb);
            // Run the callback when the end is reached
            cb(node.key);
            // Then start checking the right side
            this._inOrderTraverse(node.right, cb);
        }
    };
    // Use pre-order Traverse to print each node prior to it's descendants
    BinaryTree.prototype.preOrderTraverse = function (cb) {
        this._preOrderTraverse(this.root, cb);
    };
    // Helper function to select the nodes and each descendant starting on the left side of the tree before going to the right side
    BinaryTree.prototype._preOrderTraverse = function (node, cb) {
        // Base case to know when to stop 
        if (node !== null) {
            // print the node key, then check left and right
            cb(node.key);
            this._preOrderTraverse(node.left, cb);
            this._preOrderTraverse(node.right, cb);
        }
    };
    // Use post order traverse to select the descendants of a node prior to the parent node
    BinaryTree.prototype.postOrderTraverse = function (cb) {
        this._postOrderTraverse(this.root, cb);
    };
    // Helper function to visit each descendant of a node before the node itself
    BinaryTree.prototype._postOrderTraverse = function (node, cb) {
        if (node !== null) {
            // Check left and right before printing the node key
            this._postOrderTraverse(node.left, cb);
            this._postOrderTraverse(node.right, cb);
            cb(node.key);
        }
    };
    // Return the minimum value/key in the tree
    BinaryTree.prototype.min = function () {
        return this._min(this.root);
    };
    // Helper function to return the bottom left node in the tree
    BinaryTree.prototype._min = function (node) {
        // Keep going left until it reaches the bottom left node
        if (node) {
            while (node && node.left) {
                node = node.left;
            }
            // The lowest key on the left is the minimum number
            return node.key;
        }
        return null;
    };
    // Return the maximum value/key in the tree
    BinaryTree.prototype.max = function () {
        return this._max(this.root);
    };
    // Helper function to return the value at the bottom right node
    BinaryTree.prototype._max = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            // The lowest key on the right is the minimum number
            return node.key;
        }
        return null;
    };
    // Remove a key from the tree
    BinaryTree.prototype.remove = function (key) {
    };
    // Calculate the height of the tree
    BinaryTree.prototype.calcHeight = function () {
        return this._calcHeight(this.root);
    };
    // Helper method to calculate the height of the tree
    BinaryTree.prototype._calcHeight = function (node) {
        if (node !== null) {
            return 1 + Math.max(this._calcHeight(node.left), this._calcHeight(node.right));
        }
        else {
            return 0;
        }
    };
    // Get the nth largest key in the tree
    BinaryTree.prototype.nthLargest = function (place) {
        var values = [];
        this.inOrderTraverse(function (value) {
            values.push(value);
        });
        console.log("The list of keys in the tree is: ", values);
        var p = values.length - place;
        return values[p];
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
//# sourceMappingURL=binary-tree.js.map