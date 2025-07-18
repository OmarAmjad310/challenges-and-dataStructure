//Define a Delete middle value implementaion
class Stack {
  constructor(initialValues = []) {
    this.stack = [...initialValues];
  }

  deleteMiddle() {

     if (this.stack.length === 0) {
      console.log("Stack is empty. No middle to delete.");
      return;
    }
    const remove = (stack, current, size) => {
      if (current === Math.floor(size / 2)) {
        stack.pop();
        return;
      }

      const temp = stack.pop();
      remove(stack, current + 1, size);
      stack.push(temp);
    };

    if (this.stack.length === 1) {
      this.stack.pop();
    } else {
      remove(this.stack, 0, this.stack.length);
    }
  }

  push(...values) {
    this.stack.push(...values);
  }

  print() {
    console.log("Stack contents:");
    console.log("Stack:Top -> " + this.stack.slice().reverse().join(" -> "));
    
  }
}

module.exports = Stack;