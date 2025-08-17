
// example.js
const { BinaryTree, TreeNode } = require('./binaryTree'); // ← Added TreeNode here

const tree = new BinaryTree();
const root = tree.setRoot(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.right = new TreeNode(6);

tree.print();