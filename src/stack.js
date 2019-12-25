import Node from "./node";

export default class Stack {
  constructor() {
    this.stack = null;
    this.size = 0;
    this.min = [];
  }

  peek() {
    if (this.stack) return this.stack.data;
  }

  push(data) {
    if (isNaN(data)) {
      this.min = [];
    } else {
      const topValue = this.peek();
      data < topValue ? this.min.push(data) : this.min.push(topValue);
    }
    const node = new Node(data, this.stack);
    this.stack = node;
    this.size++;
  }

  pop() {
    if (this.stack) {
      const topValue = this.peek();
      const restOfStack = this.stack.next;
      this.stack = restOfStack;
      this.min.pop();
      this.size--;
      return topValue;
    }
  }
}
