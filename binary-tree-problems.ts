// import the class
import { BinarySearchTree } from './binary-search-tree';
import { BinaryTree } from './binary-tree';

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

let btree = new BinaryTree();

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
console.log(`\n***** In-Order Traversal *****\n`)
btree.inOrderTraverse(printNode);

// Traverse the binary tree and print the nodes followed by the decendants of the node from left to right
console.log(`\n***** Pre-Order Traversal *****\n`)
btree.preOrderTraverse(printNode);

// Traverse the binary tree starting with the descendants of each node before the node itself
console.log(`\n***** Post-Order Traversal *****\n`)
btree.postOrderTraverse(printNode);

// Search for a specific key
let keys = [1, 8, 25, 12, 13, 50];
console.log(`\n***** Search for Key *****\n`)
keys.forEach((k) => {
    console.log(btree.search(k) ? `Key ${k} found` : `Key ${k} not found`);
});

// find the third largest key in the tree
console.log(`\n***** Search for Third Largest Key *****\n`);
let thirdLargest = btree.nthLargest(3);
console.log(`The third largest key is: ${thirdLargest}`);

// Calculate the height of the binary tree
console.log(`\n***** Get the height of the Tree *****\n`);
let height = btree.calcHeight();
console.log(`The height of the tree is: ${height}`);

console.log(btree);
let myTree = {
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

function isSearchTree(tree) {
    // if no nodes return
    // get the first node
    let root = tree.root;
    return _isSearchTree(root);
}

function _isSearchTree(node) {
    if (node === null) {
        return true;
    }

    if (node.left) {
        if (node.left.key > node.key) {
            return false;
        } else if (node.left.key < node.key) {
            _isSearchTree(node.left);
        }
    }

    if (node.right) {
        if (node.right.key < node.key) {
            return false;
        } else {
            _isSearchTree(node.right);
        }
    }
    return true;
}

console.log(`\n***** Identify Type of Binary Tree *****\n`);
console.log(`My tree is a binary search tree: ${isSearchTree(myTree)}`);
console.log(`My tree is a binary search tree: ${isSearchTree(btree)}`);

