// RotateLinkedList.test.js
const RotateLinkedList = require('../RotateLinkedlist/Rotatelinkedlist');

describe('RotateLinkedList', () => {
  let list;

  beforeEach(() => {
    list = new RotateLinkedList();
    [10, 20, 30, 40, 50].forEach(num => list.append(num));
  });

  test('rotates left by 2 places', () => {
    list.rotateLeft(2);
    
    const result = [];
    let current = list.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }

    expect(result).toEqual([30, 40, 50, 10, 20]);
  });

  test('rotates left by 0 places (no change)', () => {
    list.rotateLeft(0);
    
    const result = [];
    let current = list.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }

    expect(result).toEqual([10, 20, 30, 40, 50]);
  });

  test('rotates left by length of list (no change)', () => {
    list.rotateLeft(5);
    
    const result = [];
    let current = list.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }

    expect(result).toEqual([10, 20, 30, 40, 50]);
  });

  test('rotates left by negative value (-2)', () => {
    list.rotateLeft(-2);
    
    const result = [];
    let current = list.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }

    expect(result).toEqual([40, 50, 10, 20, 30]);
  });

  test('rotates left by value greater than list length (e.g., 8)', () => {
  list.rotateLeft(8); // List length is 5, so 8 % 5 = 3

  const result = [];
  let current = list.head;
  while (current) {
    result.push(current.data);
    current = current.next;
  }

  expect(result).toEqual([40, 50, 10, 20, 30]);
});

});
