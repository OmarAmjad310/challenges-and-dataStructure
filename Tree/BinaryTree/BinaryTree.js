// binaryTree.js

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Helper method to manually build tree (used in tests)
  setRoot(value) {
    this.root = new TreeNode(value);
    return this.root;
  }

  // Preorder: Root -> Left -> Right
  preorder() {
    const result = [];
    function traverse(node) {
      if (node) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  // Inorder: Left -> Root -> Right
  inorder() {
    const result = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  // Postorder: Left -> Right -> Root
  postorder() {
    const result = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
      }
    }
    traverse(this.root);
    return result;
  }

  /**
   * Print the tree structure in a readable format using indentation
   * Shows hierarchy with direction (left/right)
   */
  print() {
    if (!this.root) {
      console.log('Empty tree');
      return;
    }

    const printNode = (node, prefix = '', isLast = true) => {
      if (node !== null) {
        console.log(prefix + (isLast ? '└── ' : '├── ') + node.value);

        // Prepare prefix for children
        const childPrefix = prefix + (isLast ? '    ' : '│   ');

        // Recursively print children
        const children = [];
        if (node.left) children.push({ node: node.left, isLeft: true });
        if (node.right) children.push({ node: node.right, isLeft: false });

        children.forEach((child, index) => {
          const isLastChild = index === children.length - 1;
          printNode(child.node, childPrefix, isLastChild);
        });
      }
    };

    printNode(this.root, '', true);
  }
}

module.exports = { BinaryTree, TreeNode };