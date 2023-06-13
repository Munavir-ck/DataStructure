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

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  listSize() {
    return console.log(this.size);
  }

  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let curr = this.head;
      let linkedList = "";
      while (curr) {
        linkedList += `${curr.value} `;
        curr = curr.next;
      }
      console.log(linkedList);
    }
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;

      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
  }
  delete(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      let i = 0;
      while (curr.next) {
        if (curr.next.value === value) {
          let deleted = curr.next;
          curr.next = deleted.next;
        } else {
          curr = curr.next;
        }
      }
    }
  }

  insert(value, index) {
    const node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      let insert = curr.next;
      curr.next = node;
      node.next = insert;
    }
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  duplicate() {
    let curr = this.head;

    while (curr) {
      let innerCurr = curr;
      while (innerCurr.next) {
        if (curr.value === innerCurr.next.value) {
          let deleted = innerCurr.next;
          innerCurr.next = deleted.next;
        }
        if (innerCurr.next) {
          innerCurr = innerCurr.next;
        }

        console.log(innerCurr);
      }

      curr = curr.next;
    }
  }
}

const list = new linkedList();

list.prepend(23);
list.prepend(44);
list.append(56);
list.append(67);
// list.delete(23)
list.insert(30, 3);
list.append(56);
list.append(6);
list.append(67);
list.listSize();
list.duplicate();
list.print();
