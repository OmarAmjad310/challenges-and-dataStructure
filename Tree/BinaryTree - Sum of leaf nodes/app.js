// Import the TreeNode class and functions from tree.js
// app.js

const { TreeNode, sumOfLeafNodes } = require('./BinaryTreeSumLeafNodes');

// Construct the binary tree
const root = new TreeNode(9);
root.left = new TreeNode(8);
root.right = new TreeNode(12);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(17);
root.right.right = new TreeNode(23);
root.left.left.right = new TreeNode(4);
// Calculate sum of leaf nodes
const sum = sumOfLeafNodes(root);
console.log("Sum of leaf nodes:", sum); // Expected output: 51
