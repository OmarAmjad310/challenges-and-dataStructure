const Stack = require('./Delete-themiddle-value');

describe('Stack class functionality', () => {
  test('deleteMiddle removes the middle element from odd-sized stack', () => {
    const stack = new Stack([10, 20, 30, 40, 50]);
    stack.deleteMiddle();
    expect(stack.stack).toEqual([10, 20, 40, 50]); // 30 removed
  });

  test('deleteMiddle removes the middle element from even-sized stack', () => {
    const stack = new Stack([10, 20, 30, 40, 50, 60]);
    stack.deleteMiddle();
    expect(stack.stack).toEqual([10, 20, 40, 50, 60]); // 30 removed
  });

  test('deleteMiddle removes the only element from single-item stack', () => {
    const stack = new Stack([99]);
    stack.deleteMiddle();
    expect(stack.stack).toEqual([]); // 99 removed
  });

  test('test the case when the stack is empty', () => {
  const stack = new Stack([]);

  console.log = jest.fn(); // Mock console.log

  stack.deleteMiddle();

  expect(console.log).toHaveBeenCalledWith("Stack is empty. No middle to delete.");
  expect(stack.stack).toEqual([]); // Still empty
});
  
});