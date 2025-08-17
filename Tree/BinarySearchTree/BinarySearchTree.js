// bst.js

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return this; // Avoid duplicates

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
    return this;
  }

  _removeNode(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
    } else {
      // Node to remove found

      // Case 1: No child (leaf node)
      if (!node.left && !node.right) {
        return null;
      }

      // Case 2: One child (right exists, no left)
      if (!node.left) {
        return node.right;
      }

      // Case 2: One child (left exists, no right)
      if (!node.right) {
        return node.left;
      }

      // Case 3: Two children
      // Find the smallest value in the right subtree (in-order successor)
      let successor = this._findMin(node.right);
      node.value = successor.value;
      node.right = this._removeNode(node.right, successor.value);
    }

    return node;
  }

  _findMin(node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }
}

module.exports = BinarySearchTree;