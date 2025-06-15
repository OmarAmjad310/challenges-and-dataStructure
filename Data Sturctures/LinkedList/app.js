const LinkedList = require("./LinkedList")

const list = new LinkedList();
list.print();
list.remove(5);
list.add(10);
list.add(20);
list.add(30);
list.print(); // Output: 10 -> 20 -> 30

list.remove(20);
list.print(); // Output: 10 -> 30
console.log(list.include(20)); 
console.log(list.include(30)); 
list.insertAt(20,1)
list.insertAt(40,5)
list.print();