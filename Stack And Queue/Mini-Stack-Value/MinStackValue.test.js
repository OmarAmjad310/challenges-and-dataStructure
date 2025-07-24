const Mintest = require('./MinStackValue');

describe('MinStack', () => {
  let stack;

  beforeEach(() => {
    stack = new Mintest();
  });

  test('push and top should work correctly', () => {
    stack.push(5);
    expect(stack.top()).toBe(5);
    stack.push(2);
    expect(stack.top()).toBe(2);
  });

  test('getMin should return the correct minimum', () => {
    stack.push(5);
    expect(stack.getMin()).toBe(5);
    stack.push(2);
    expect(stack.getMin()).toBe(2);
    stack.push(8);
    expect(stack.getMin()).toBe(2);
  });

  test('pop should remove top and update minimum', () => {
    stack.push(3);
    stack.push(1);
    stack.push(2);
    expect(stack.getMin()).toBe(1);
    stack.pop();  // removes 2
    expect(stack.getMin()).toBe(1);
    stack.pop();  // removes 1
    expect(stack.getMin()).toBe(3);
  });

  test('print should not throw an error', () => {
    stack.push(7);
    expect(() => stack.print()).not.toThrow();
  });
});