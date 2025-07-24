const MinStack = require("./MinStackValue")


const minstack = new MinStack();
minstack.push(5);
minstack.push(2);
minstack.push(8);
minstack.push(2);
minstack.print();  
minstack.pop();
minstack.print(); 
minstack.push(1);
minstack.top(); 
minstack.print(); 
console.log(minstack.isEmpty()); 



