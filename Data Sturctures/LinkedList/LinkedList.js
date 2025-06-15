// Define a Node
const Node = require("./classNode")




// Define a LinkedList
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node at the end
  add(data) {

    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove a node by value
  remove(data) {
    if (this.head === null) {
      console.log("There is no node to remove")
        return};

    // If the head is the node to remove
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    // If the node was found, skip it
    if (current.next) {
      current.next = current.next.next;
    }
  }

   include(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true; // Node found
      }
      current = current.next;
    }
    return false; // Node not found
  }

  // Print the list (for testing)
  print() {
    
       if (this.head === null) {
      console.log("There is no list to view.");
      return;
    }
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    console.log("Head ->"+ values.join(" -> ") +" -> null");
  }
  
  insertAt(data,index){

  
    const newNode = new Node(data);

    if (index <= 0 || !this.head) {
      // Insert at the head if index is 0 or list is empty
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let location = 0;

    // Traverse the list to find the correct position or reach the end
    while (current.next && location < index - 1) {
      current = current.next;
      location++;
    }

    // Insert the new node at the end if index is greater than the list length
    newNode.next = current.next;
    current.next = newNode;

   }
}
 

// Example Usage
module.exports = LinkedList;