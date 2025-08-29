// TreeNode.test.js

const { TreeNode, sumOfLeafNodes } = require('./BinaryTreeSumLeafNodes');

describe('sumOfLeafNodes', () => {
    test('should return the correct sum for a tree with positive leaf values', () => {
        // Build tree:
        //       1
        //      / \
        //     2   3
        //    / \   \
        //   4   5   6
        // Leaves: 4, 5, 6 → Sum = 15

        const root = new TreeNode(9);
        root.left = new TreeNode(8);
        root.right = new TreeNode(12);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(7);
        root.right.left = new TreeNode(17);
        root.right.right = new TreeNode(23);
        root.left.left.right = new TreeNode(4);

        expect(sumOfLeafNodes(root)).toBe(51);
    });

    test('should return the correct sum for a tree with negative leaf values', () => {
        // Build tree:
        //       -1
        //      /  \
        //    -2    -3
        //   /       \
        // -4         -5
        // Leaves: -4, -5 → Sum = -9

        const root = new TreeNode(-1);
        root.left = new TreeNode(-2);
        root.right = new TreeNode(-3);
        root.left.left = new TreeNode(-4);
        root.right.right = new TreeNode(-5); // Fixed: moved inside the test

        expect(sumOfLeafNodes(root)).toBe(-9);
    });

    test('should handle a single node tree (root is leaf)', () => {
        const root = new TreeNode(42);
        expect(sumOfLeafNodes(root)).toBe(42);
    });

    test('should return 0 for an empty tree', () => {
        expect(sumOfLeafNodes(null)).toBe(0);
    });
});