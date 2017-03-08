"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binary_tree_1 = require("./binary-tree");
// Create a binary tree
// let bstree = new BinarySearchTree(1, 'ball');
// bstree.insert(2, 'racquet');
// bstree.insert(7, 'train');
// bstree.insert(15, 'car');
// bstree.insert(13, 'court');
// bstree.insert(9, 'can');
// bstree.insert(17, 'desk');
// bstree.insert(8, 'computer');
// bstree.insert(11, 'shirt');
// bstree.insert(10, 'chair');
// bstree.insert(19, 'microwave');
// bstree.insert(25, 'refrigerator');
// bstree.insert(21, 'shoe');
// bstree.insert(27, 'table');
// bstree.insert(36, 'whiteboard');
// bstree.insert(31, 'coffee');
// bstree.insert(33, 'bottle');
// Create a binary search tree and insert some keys
var btree = new binary_tree_1.BinaryTree();
btree.insert(7);
btree.insert(15);
btree.insert(5);
btree.insert(3);
btree.insert(9);
btree.insert(8);
btree.insert(10);
btree.insert(13);
btree.insert(12);
btree.insert(14);
btree.insert(20);
btree.insert(18);
btree.insert(25);
btree.insert(6);
// Simply log a value to the console
function printNode(value) {
    console.log(value);
}
// Traverse the binary tree and print the nodes in ascending order
console.log("\n***** In-Order Traversal *****\n");
btree.inOrderTraverse(printNode);
// Traverse the binary tree and print the nodes followed by the decendants of the node from left to right
console.log("\n***** Pre-Order Traversal *****\n");
btree.preOrderTraverse(printNode);
// Traverse the binary tree starting with the descendants of each node before the node itself
console.log("\n***** Post-Order Traversal *****\n");
btree.postOrderTraverse(printNode);
// Search for a specific key
var keys = [1, 8, 25, 12, 13, 50];
console.log("\n***** Search for Key *****\n");
keys.forEach(function (k) {
    console.log(btree.dfSearch(k) ? "Key " + k + " found" : "Key " + k + " not found");
});
// find the third largest key in the tree
console.log("\n***** Search for Third Largest Key *****\n");
var thirdLargest = btree.nthLargest(3);
console.log("The third largest key is: " + thirdLargest);
// Calculate the height of the binary tree
console.log("\n***** Get the height of the Tree *****\n");
var height = btree.calcHeight();
console.log("The height of the tree is: " + height);
// Print out the tree structure to use as a guide
console.log(btree);
// Make a tree that doesn't follow the requirements of the binary search tree
var myTree = {
    root: {
        key: 1,
        left: {
            key: 2,
            left: null,
            right: null
        },
        right: {
            key: 3,
            left: null,
            right: null
        }
    }
};
// Function to determine whether a binary tree is a binary search tree
function isSearchTree(tree) {
    // if no nodes return
    // get the first node
    var root = tree.root;
    return _isSearchTree(root);
}
// Helper function to evaluate tree type
function _isSearchTree(node) {
    // If the node is null then no requirements for a search tree were found
    if (node === null) {
        return true;
    }
    // Check the left node key is less than the node key
    if (node.left) {
        // If the left node key is greater it's not a search tree
        if (node.left.key > node.key) {
            return false;
            // otherwise keep going left
        }
        else if (node.left.key < node.key) {
            _isSearchTree(node.left);
        }
    }
    // Check the right node key is greater than the node key
    if (node.right) {
        // If the right node key is less it's not a search tree
        if (node.right.key < node.key) {
            return false;
            // otherwise keep going right
        }
        else {
            _isSearchTree(node.right);
        }
    }
    // if all checks pass the requirements it's a search tree
    return true;
}
// Check the trees and determine which are binary search trees
console.log("\n***** Identify Type of Binary Tree *****\n");
console.log("My tree is a binary search tree: " + isSearchTree(myTree));
console.log("Btree is a binary search tree: " + isSearchTree(btree));
//# sourceMappingURL=binary-tree-problems.js.map