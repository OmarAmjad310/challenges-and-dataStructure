const BinarySearchTree = require('./BinarySearchTree');

const bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(3);
bst.add(7);
bst.add(13);
bst.add(18);

console.log('Contains 7:', bst.contains(7)); // true
console.log('Contains 9:', bst.contains(9)); // false

bst.remove(10);
console.log('After removing 10, root is:', bst.root.value); // e.g., 13