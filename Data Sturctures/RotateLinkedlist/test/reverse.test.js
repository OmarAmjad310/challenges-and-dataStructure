const ReverseList = require ("../Reverse/reverse");


test('should create an empty linked list', () => {
  const reverse = new ReverseList();
    expect(reverse.head).toBeNull();
  });

  test('should reverse an empty list', () => {
  const reverse = new ReverseList();
    expect(reverse.head).toBeNull();
  });

  test('should reverse a single-node list', () => {
    const reverse = new ReverseList();
    reverse.insertFirst(1);
    expect(reverse.head.data).toBe(1);
    expect(reverse.head.next).toBeNull();
  });

   test('should reverse a multi-node list with duplicates', () => {

        const reverse = new ReverseList();

    reverse.insertFirst(1);
    reverse.insertFirst(2);
    reverse.insertFirst(2);
    reverse.insertFirst(3);
    reverse.insertFirst(4);

    
    // Check the reversed order
    let current = reverse.head;
    expect(current.data).toBe(4);
    
    current = current.next;
    expect(current.data).toBe(3);

    current = current.next;
    expect(current.data).toBe(2);
    
    current = current.next;
    expect(current.data).toBe(2);
    
    current = current.next;
    expect(current.data).toBe(1);
    expect(current.next).toBeNull();
  });

   test('should reverse a multi-node list with duplicates', () => {

        const reverse = new ReverseList();

    reverse.insertFirst(1);
    reverse.insertFirst(2);
    reverse.insertFirst(2);
    reverse.insertFirst(3);
    reverse.insertFirst(4);

    
    // Check the reversed order
    let current = reverse.head;
    expect(current.data).toBe(4);
    
    current = current.next;
    expect(current.data).toBe(3);

    current = current.next;
    expect(current.data).toBe(2);
    
    current = current.next;
    expect(current.data).toBe(2);
    
    current = current.next;
    expect(current.data).toBe(1);
    expect(current.next).toBeNull();
  });