// Import the TreeNode class and functions from tree.js
const { TreeNode, findSecondMaximum, findSecondMaximumOptimized } = require('./BinaryTreeFindSecondMax');

// Example usage:
// Create a binary tree:
//       5
//      / \
//     3   8
//    / \ / \
//   2  4 7  9

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(8);
root.right.right = new TreeNode(9);

console.log("Tree structure:");
console.log("       5");
console.log("      / \\");
console.log("     3   8");
console.log("    / \\ / \\");
console.log("   2  4 7  9");

console.log("\nSecond maximum value:", findSecondMaximum(root)); // Output: 8
console.log("Second maximum value (optimized):", findSecondMaximumOptimized(root)); // Output: 8

