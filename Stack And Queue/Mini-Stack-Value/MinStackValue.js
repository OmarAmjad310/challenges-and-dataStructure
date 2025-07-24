//Define a Delete middle value implementaion
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    const min = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }

  pop() {
    if (this.stack.length === 0) return null;
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1] ?? null;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getMin() {
    return this.minStack[this.minStack.length - 1] ?? null;
  }

  print() {
    console.log("🧱 Stack:", this.stack);
    console.log("🔍 Current Min:", this.getMin());
    console.log("🔍 Top Value:", this.top());

  }
}

module.exports = MinStack;
