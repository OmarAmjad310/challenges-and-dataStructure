// Definition for a binary tree node
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sumOfLeafNodes(root) {
    // Base case: if the node is null, return 0
    if (!root) {
        return 0;
    }

    // If it's a leaf node (no left or right child)
    if (!root.left && !root.right) {
        return root.val;
    }

    // Recursively calculate sum from left and right subtrees
    return sumOfLeafNodes(root.left) + sumOfLeafNodes(root.right);
}

// Export the functions and class for use in other files
module.exports = { TreeNode, sumOfLeafNodes };