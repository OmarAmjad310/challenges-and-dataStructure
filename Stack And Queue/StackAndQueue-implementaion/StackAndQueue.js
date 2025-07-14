//Define a Stack implementaion
class Stack {
  constructor() {
    this.items = [];
  }

  // Add item to top
  push(element) {
    this.items.push(element);
  }

  // Remove item from top
  pop() {
    return this.items.pop();
  }

  // View top item
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

//Define a Queue implementaion

class Queue {
  constructor() {
    this.items = [];
  }

  // Add item to end
  enqueue(element) {
    this.items.push(element);
  }

  // Remove item from front
  dequeue() {
    return this.items.shift();
  }

  // View front item
  peek() {
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = {
  Stack,
  Queue
};