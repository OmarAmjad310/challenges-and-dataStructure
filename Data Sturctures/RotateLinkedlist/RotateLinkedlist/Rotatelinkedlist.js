const Node = require("../classNode");

class RotateLinkedList {
  constructor() {
    this.head = null;
  }

  // Add node to the end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Rotate list to the left by k positions
  rotateLeft(k) {
    if (!this.head || k === 0) return;

    // Count length
    let length = 1;
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      length++;
    }

    // Normalize k
    if (k < 0) {
      k = length - (Math.abs(k) % length);
    } else {
      k = k % length;
    }

    if (k === 0) return;

    // Traverse to (k - 1)th node
    let current = this.head;
    for (let i = 0; i < k - 1; i++) {
      current = current.next;
    }

    const newHead = current.next;
    current.next = null;
    tail.next = this.head;
    this.head = newHead;
  }

  // Print list
  printList() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log("Head -> " + result.join(" -> ") + " -> null");
  }
}

module.exports = RotateLinkedList;