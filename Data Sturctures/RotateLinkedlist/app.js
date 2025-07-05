const Rotatelinkedlist = require("./RotateLinkedlist/Rotatelinkedlist")

const list = new Rotatelinkedlist();
[10, 20, 30, 40, 50, 60].forEach(num => list.append(num));

console.log("Before rotation:");
list.printList();

list.rotateLeft(9);  // Rotate by k = 3

console.log("After rotation:");
list.printList();


/*const ReverseList = require("./Reverse/reverse")


const list = new ReverseList();

list. reverse();

list.insertFirst(3);
list.insertFirst(2);
list.insertFirst(2);
list.insertFirst(1);
list.printList();
list.reverse();
list.printList();*/


////////////////////

/*const { mergeTwoLists, arrayToList, printList} = require ("./Mergsorted/mergsorted");

const list1 = arrayToList([1, 3, 5, 9]);

const list2 = arrayToList([2, 4, 6, 8])

const mergedList = mergeTwoLists(list1, list2);
printList(mergedList);*/ 