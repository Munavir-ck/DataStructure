class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  dequeue() {
    this.head = this.head.next;
  }

  print() {
    let curr = this.head;
    let linkedList = "";
    while (curr) {
      linkedList += `${curr.value} `;
      curr = curr.next;
    }
    console.log(linkedList);
  }
}

const queue = new Queue();

queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.enqueue(400);
queue.dequeue();
queue.print();
