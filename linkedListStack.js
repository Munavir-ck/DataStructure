class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  pop() {
    this.head = this.head.next;
  }

  print() {
    let curr = this.head;

    console.log(this.head);
    let linkedStack = "";

    while (curr) {
    

      if (curr.value) {
        linkedStack += `${curr.value} `;
        curr = curr.next;
      }
    }

    console.log(linkedStack);
  }
}

const stack = new linkedList();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
stack.print();
