// Definition for a binary tree node
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Find the second maximum value in a binary tree
 * @param {TreeNode} root - The root of the binary tree
 * @returns {number|null} - The second maximum value, or null if it doesn't exist
 */
function findSecondMaximum(root) {
    if (!root) {
        return null;
    }
    
    // Use a Set to store unique values
    const values = new Set();
    
    // Helper function for inorder traversal
    function inorderTraversal(node) {
        if (node) {
            inorderTraversal(node.left);
            values.add(node.val);
            inorderTraversal(node.right);
        }
    }
    
    // Collect all unique values from the tree
    inorderTraversal(root);
    
    // Convert Set to array and sort in descending order
    const sortedValues = Array.from(values).sort((a, b) => b - a);
    
    // If we have less than 2 unique values, second max doesn't exist
    if (sortedValues.length < 2) {
        return null;
    }
    
    // Return the second maximum value
    return sortedValues[1];
}

// Alternative approach - more efficient for large trees
function findSecondMaximumOptimized(root) {
    if (!root) {
        return null;
    }
    
    let max = -Infinity;
    let secondMax = -Infinity;
    
    function traverse(node) {
        if (!node) {
            return;
        }
        
        // Update max and secondMax based on current node value
        if (node.val > max) {
            secondMax = max;
            max = node.val;
        } else if (node.val > secondMax && node.val < max) {
            secondMax = node.val;
        }
        
        // Continue traversal
        traverse(node.left);
        traverse(node.right);
    }
    
    traverse(root);
    
    // If secondMax is still -Infinity, it means we didn't find a second maximum
    return secondMax === -Infinity ? null : secondMax;
}

// Export the functions and class for use in other files
module.exports = {
    TreeNode,
    findSecondMaximum,
    findSecondMaximumOptimized
};