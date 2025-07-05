const LinkedList = require ("../Mergsorted/mergsorted");

const { mergeTwoLists, arrayToList, printList,  } = LinkedList;


// Helper function to convert linked list to array for easy assertion
function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.data);
    head = head.next;
  }
  return result;
}

test('merge two non-empty sorted lists', () => {
  const list1 = arrayToList([1, 3, 5]);
  const list2 = arrayToList([2, 4, 6]);
  const mergedHead = mergeTwoLists(list1, list2);
  expect(listToArray(mergedHead)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('first list is empty', () => {
  const list1 = null;
  const list2 = arrayToList([2, 4, 6]);
  const mergedHead = mergeTwoLists(list1, list2);
  expect(listToArray(mergedHead)).toEqual([2, 4, 6]);
});

test('second list is empty', () => {
  const list1 = arrayToList([1, 3, 5]);
  const list2 = null;
  const mergedHead = mergeTwoLists(list1, list2);
  expect(listToArray(mergedHead)).toEqual([1, 3, 5]);
});

test('both lists are empty', () => {
  const list1 = null;
  const list2 = null;
  const mergedHead = mergeTwoLists(list1, list2);
  expect(mergedHead).toBeNull();
});

test('lists with duplicate values', () => {
  const list1 = arrayToList([1, 2, 2]);
  const list2 = arrayToList([2, 3, 4]);
  const mergedHead = mergeTwoLists(list1, list2);
  expect(listToArray(mergedHead)).toEqual([1, 2, 2, 2, 3, 4]);
});
