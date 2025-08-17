// bst.test.js

const BinarySearchTree = require('./BinarySearchTree');

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  describe('Add & Contains', () => {
    it('should create an empty tree initially', () => {
      expect(bst.root).toBeNull();
    });

    it('should add a root node', () => {
      bst.add(10);
      expect(bst.root.value).toBe(10);
      expect(bst.contains(10)).toBe(true);
    });

    it('should add smaller values to the left', () => {
      bst.add(10);
      bst.add(5);
      expect(bst.root.left.value).toBe(5);
    });

    it('should add larger values to the right', () => {
      bst.add(10);
      bst.add(15);
      expect(bst.root.right.value).toBe(15);
    });

    it('should maintain BST property with multiple inserts', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);
      bst.add(7);
      bst.add(13);
      bst.add(18);

      expect(bst.root.value).toBe(10);
      expect(bst.root.left.value).toBe(5);
      expect(bst.root.right.value).toBe(15);
      expect(bst.root.left.left.value).toBe(3);
      expect(bst.root.left.right.value).toBe(7);
      expect(bst.root.right.left.value).toBe(13);
      expect(bst.root.right.right.value).toBe(18);
    });

    it('should not add duplicate values', () => {
      bst.add(10);
      bst.add(10);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();
    });

    it('should correctly report contains', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);

      expect(bst.contains(10)).toBe(true);
      expect(bst.contains(5)).toBe(true);
      expect(bst.contains(15)).toBe(true);
      expect(bst.contains(3)).toBe(true);
      expect(bst.contains(7)).toBe(false);
      expect(bst.contains(20)).toBe(false);
      expect(bst.contains(0)).toBe(false);
    });
  });

  describe('Remove', () => {
    beforeEach(() => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);
      bst.add(7);
      bst.add(13);
      bst.add(18);
    });

    it('should do nothing when removing from empty tree', () => {
      const emptyBST = new BinarySearchTree();
      emptyBST.remove(5);
      expect(emptyBST.root).toBeNull();
    });

    it('should remove a leaf node (e.g. 3)', () => {
      bst.remove(3);
      expect(bst.contains(3)).toBe(false);
      expect(bst.root.left.left).toBeNull(); // 3 was left of 5
    });

    it('should remove a node with one child (e.g. 15 has two children, but test 13)', () => {
      bst.remove(13); // 13 is leaf → test one child case indirectly
      bst.add(14); // now 13 has right child 14
      bst.remove(13);
      expect(bst.contains(13)).toBe(false);
      expect(bst.root.right.left.value).toBe(14);
    });

    it('should remove a node with one child (e.g. 3 has no left, only right)', () => {
      bst.add(4); // 3 -> 4 as right child
      bst.remove(3);
      expect(bst.contains(3)).toBe(false);
      expect(bst.root.left.left.value).toBe(4); // 4 takes place of 3
    });

    it('should remove a node with two children (e.g. root=10)', () => {
      bst.remove(10);
      expect(bst.contains(10)).toBe(false);
      expect(bst.root.value).not.toBe(10);

      // In-order successor of 10 is 13
      expect(bst.root.value).toBe(13);

      // Tree should still be valid
      expect(bst.contains(5)).toBe(true);
      expect(bst.contains(15)).toBe(true);
      expect(bst.contains(3)).toBe(true);
      expect(bst.contains(7)).toBe(true);
      expect(bst.contains(18)).toBe(true);
    });

    it('should remove root when it has only one child', () => {
      const smallBST = new BinarySearchTree();
      smallBST.add(10);
      smallBST.add(8); // root has only left
      smallBST.remove(10);
      expect(smallBST.root.value).toBe(8);
      expect(smallBST.root.left).toBeNull();
      expect(smallBST.root.right).toBeNull();

      const smallBST2 = new BinarySearchTree();
      smallBST2.add(10);
      smallBST2.add(12); // root has only right
      smallBST2.remove(10);
      expect(smallBST2.root.value).toBe(12);
    });
  });
});