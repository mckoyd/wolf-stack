class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  peek() {
    if (!this.top) {
      return;
    }
    return this.top.data;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    }
    return false;
  }

  print() {

  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      this.size + 1;
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
    this.size++;
  }

  pop() {
    if(!this.top) {
      return;
    }
    this.size--;
    return this.top.data;
  }
};

module.exports = Stack;