// tree.test.js

const { TreeNode, findSecondMaximum, findSecondMaximumOptimized } = require('./BinaryTreeFindSecondMax');

// Helper to create a simple tree
const createTree = () => {
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
    root.right.left = new TreeNode(7);
    root.right.right = new TreeNode(9);
    return root;
};

describe('findSecondMaximum', () => {
    describe('Second maximum value in the tree', () => {
        test('should return the second maximum value in a normal tree', () => {
            const root = createTree();
            expect(findSecondMaximum(root)).toBe(8);
            expect(findSecondMaximumOptimized(root)).toBe(8);
        });

        test('should work with duplicate values but multiple distinct values', () => {
            //       10
            //      /  \
            //     5    10
            //    / \     \
            //   5   8     15
            const root = new TreeNode(10);
            root.left = new TreeNode(5);
            root.right = new TreeNode(10);
            root.left.left = new TreeNode(5);
            root.left.right = new TreeNode(8);
            root.right.right = new TreeNode(15);

            // Distinct: 15, 10, 8, 5 → second max is 10
            expect(findSecondMaximum(root)).toBe(10);
            expect(findSecondMaximumOptimized(root)).toBe(10);
        });
    });

    describe('When the tree has only one value (or all duplicates)', () => {
        test('should return null for a single node tree', () => {
            const root = new TreeNode(42);
            expect(findSecondMaximum(root)).toBeNull();
            expect(findSecondMaximumOptimized(root)).toBeNull();
        });

        test('should return null for a tree with all duplicate values', () => {
            //     7
            //    / \
            //   7   7
            const root = new TreeNode(7);
            root.left = new TreeNode(7);
            root.right = new TreeNode(7);

            expect(findSecondMaximum(root)).toBeNull();
            expect(findSecondMaximumOptimized(root)).toBeNull();
        });

        test('should return null for empty tree', () => {
            const emptyTree = null;
            expect(findSecondMaximum(emptyTree)).toBeNull();
            expect(findSecondMaximumOptimized(emptyTree)).toBeNull();
        });
    });

    describe('When the tree has negative values', () => {
        test('should correctly find second maximum with negative values', () => {
            //       -1
            //      /  \
            //    -5    3
            //         / \
            //       -2   2
            const root = new TreeNode(-1);
            root.left = new TreeNode(-5);
            root.right = new TreeNode(3);
            root.right.left = new TreeNode(-2);
            root.right.right = new TreeNode(2);

            // Values: -5, -2, -1, 2, 3 → second max is 2
            expect(findSecondMaximum(root)).toBe(2);
            expect(findSecondMaximumOptimized(root)).toBe(2);
        });

        test('should handle all negative values', () => {
            //       -5
            //      /  \
            //    -10  -3
            //        /  \
            //      -7   -1
            const root = new TreeNode(-5);
            root.left = new TreeNode(-10);
            root.right = new TreeNode(-3);
            root.right.left = new TreeNode(-7);
            root.right.right = new TreeNode(-1);

            // Values: -10, -7, -5, -3, -1 → second max is -3
            expect(findSecondMaximum(root)).toBe(-3);
            expect(findSecondMaximumOptimized(root)).toBe(-3);
        });

        test('should handle mix of positive, negative, and zero', () => {
            //       0
            //      / \
            //    -10  5
            //        / \
            //      -1   5
            const root = new TreeNode(0);
            root.left = new TreeNode(-10);
            root.right = new TreeNode(5);
            root.right.left = new TreeNode(-1);
            root.right.right = new TreeNode(5);

            // Distinct: 5, 0, -1, -10 → second max is 0
            expect(findSecondMaximum(root)).toBe(0);
            expect(findSecondMaximumOptimized(root)).toBe(0);
        });
    });

    // Test both functions behave the same
    describe('Consistency between implementations', () => {
        test('both functions should return same result for same input', () => {
            const testCases = [
                createTree(),
                new TreeNode(100),
                null,
                (() => {
                    const r = new TreeNode(-1);
                    r.left = new TreeNode(-5);
                    r.right = new TreeNode(-2);
                    return r;
                })()
            ];

            testCases.forEach(root => {
                const result1 = findSecondMaximum(root);
                const result2 = findSecondMaximumOptimized(root);
                expect(result1).toBe(result2);
            });
        });
    });
});