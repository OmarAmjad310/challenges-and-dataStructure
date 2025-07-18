const Stack = require("./Delete-themiddle-value")

const myStack = new Stack([1, 2, 3, 4, 5]);
myStack.deleteMiddle();
myStack.print();
myStack.push(6, 7);
myStack.print();
myStack.deleteMiddle();
myStack.print();

