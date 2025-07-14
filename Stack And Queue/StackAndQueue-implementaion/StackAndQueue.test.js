const { Stack , Queue } = require('./StackAndQueue'); 
describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push adds elements to the stack', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
  });

  test('pop removes and returns the top element', () => {
    stack.push(30);
    stack.push(40);
    expect(stack.pop()).toBe(40);
    expect(stack.peek()).toBe(30);
  });

  test('isEmpty returns true for a new stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue adds elements to the queue', () => {
    queue.enqueue('A');
    queue.enqueue('B');
    expect(queue.peek()).toBe('A');
  });

  test('dequeue removes and returns the front element', () => {
    queue.enqueue('X');
    queue.enqueue('Y');
    expect(queue.dequeue()).toBe('X');
    expect(queue.peek()).toBe('Y');
  });

  test('isEmpty returns true for a new queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });
});