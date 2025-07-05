const linkedlist = require ("../LinkedList");

test ("adding node to the end of a linked-list", () => {
  const list = new linkedlist ();
  list.add(80);
  expect(list.head.data).toBe(80);
});

test ("removing a node by value from linked-list", () => {
  const list = new linkedlist ();
  list.remove(80);
  expect(list.data).toBe();
});

test ("searching for a vaule through linked-list",() => {

 const list = new linkedlist ();
  list.add(90);
  let result = list.include(90);
  expect(result).toBe(true);
});

test ("the node is exists in the linked list", () => {
  const list = new linkedlist ();
  list.add(70);
  let result = list.include(100);
  expect(result).toBe(false);
});

test ("inserts a node at the specified index in the linked list", () => {
  const list = new linkedlist ();
  list.add(60);
  list.add(80);
  list.insertAt(10,1);
  expect(list.head.data).toBe(60);
  expect(list.head.next.data).toBe(10);
  expect(list.head.next.next.data).toBe(80);
})
