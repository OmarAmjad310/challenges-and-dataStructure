const { Stack, Queue } = require("./StackAndQueue")

// Check the stack functions 
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); 
console.log(stack.peek()); 
console.log(stack.isEmpty()); 
console.log(stack.pop()); 
console.log(stack.pop()); 
console.log(stack.isEmpty()); 

// Check the Queue functions
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue());
console.log(queue.peek());    
console.log(queue.isEmpty());    
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());    
