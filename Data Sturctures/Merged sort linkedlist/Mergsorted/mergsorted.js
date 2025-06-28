const Node = require("../classNode")


// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }
}

function mergeTwoLists(current1, current2) {
  // Create a dummy node to act as the start of the merged list
  const dummy = new Node(0);
  let current = dummy;

  // Traverse both lists
  while (current1 !== null && current2 !== null) {
    if (current1.data < current2.data) {
      current.next = current1;
      current1 = current1.next;
    } else {
      current.next = current2;
      current2 = current2.next;
    }
    current = current.next;
  }

  // If one list is exhausted, attach the remaining elements from the other list
  current.next = current1 || current2;

  return dummy.next; // The merged list starts after the dummy node
}


// Helper function to create a linked list from an array
function arrayToList(arr) {
  const dummy = new Node(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new Node(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print a linked list
function printList(head) {
  let result = '';
  while (head) {
    result += head.data + ' -> ';
    head = head.next;
  }
  console.log(result + 'NULL');
}


module.exports = {
  arrayToList,
  mergeTwoLists,
  printList
}