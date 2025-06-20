//Define a node
const Node = require("../classNode")

class LinkedList {
  constructor() {
    this.head = null;
  
  }

  insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    printList() {

    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }

    console.log("Head -> " + values.join(" -> ") + " -> Null");
   }
   
reverse() {
        if (this.head === null) {
      console.log("There is no item to reverse.");
      return;
       }

        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

module.exports = LinkedList;