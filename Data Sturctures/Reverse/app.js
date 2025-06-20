const ReverseList = require("./Reverse/reverse")


const list = new ReverseList();

list. reverse();

list.insertFirst(3);
list.insertFirst(2);
list.insertFirst(2);
list.insertFirst(1);
list.printList();
list.reverse();
list.printList();
