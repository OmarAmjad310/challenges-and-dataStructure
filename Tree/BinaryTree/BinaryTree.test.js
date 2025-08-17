// binaryTree.test.js

const { BinaryTree, TreeNode } = require('./binaryTree');

describe('BinaryTree Traversals', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  describe('Empty Tree', () => {
    it('should return empty arrays for all traversals', () => {
      expect(tree.preorder()).toEqual([]);
      expect(tree.inorder()).toEqual([]);
      expect(tree.postorder()).toEqual([]);
    });
  });

  describe('Single Node Tree', () => {
    beforeEach(() => {
      tree.setRoot(1);
    });

    it('should return [1] for all traversals', () => {
      expect(tree.preorder()).toEqual([1]);
      expect(tree.inorder()).toEqual([1]);
      expect(tree.postorder()).toEqual([1]);
    });
  });

  describe('Full Binary Tree (3 nodes)', () => {
    let root, left, right;
    beforeEach(() => {
      root = tree.setRoot(1);
      left = new TreeNode(2);
      right = new TreeNode(3);
      root.left = left;
      root.right = right;
    });

    /*
        Tree:
          1
         / \
        2   3
    */

    it('should perform correct preorder (root, left, right)', () => {
      expect(tree.preorder()).toEqual([1, 2, 3]);
    });

    it('should perform correct inorder (left, root, right)', () => {
      expect(tree.inorder()).toEqual([2, 1, 3]);
    });

    it('should perform correct postorder (left, right, root)', () => {
      expect(tree.postorder()).toEqual([2, 3, 1]);
    });
  });

  describe('Complex Tree', () => {
    let root, left, right, leftLeft, leftRight, rightRight;
    beforeEach(() => {
      root = tree.setRoot(1);
      left = new TreeNode(2);
      right = new TreeNode(3);
      leftLeft = new TreeNode(4);
      leftRight = new TreeNode(5);
      rightRight = new TreeNode(6);

      root.left = left;
      root.right = right;
      left.left = leftLeft;
      left.right = leftRight;
      right.right = rightRight;
    });

    /*
        Tree:
            1
           / \
          2   3
         / \   \
        4   5   6
    */

    it('should perform correct preorder', () => {
      expect(tree.preorder()).toEqual([1, 2, 4, 5, 3, 6]);
    });

    it('should perform correct inorder', () => {
      expect(tree.inorder()).toEqual([4, 2, 5, 1, 3, 6]);
    });

    it('should perform correct postorder', () => {
      expect(tree.postorder()).toEqual([4, 5, 2, 6, 3, 1]);
    });
  });
});