import CONSTANTS from "./utils/constants";
import isType from "./utils/isType";
import Node from "./node";

export default class Stack {
  constructor() {
    this.stack = null;
    this.size = 0;
    this.min = [];
  }

  peek() {
    if (this.stack) {
      return this.stack.data;
    }
  }

  push(data) {
    this.setMinimum(data);
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

  isEmpty() {
    return this.size === 0;
  }

  print() {
    const stackItems = [];
    let node = this.stack;
    while (node) {
      if (isType("object", node.data)) {
        node.data = JSON.stringify(node.data);
      }
      stackItems.push(node.data);
      node = node.next;
    }
    return stackItems.join();
  }

  getMinimum() {
    const minLength = this.min.length;
    if (minLength) return this.min[minLength - 1];
  }

  setMinimum(data) {
    if (isNaN(data)) {
      this.min = [];
    } else {
      const topValue = this.peek();
      if (!topValue) {
        this.min.push(data);
      } else {
        const currentMin = this.min[this.min.length - 1];
        data < currentMin ? this.min.push(data) : this.min.push(currentMin);
      }
    }
  }

  clear() {
    if (this.stack) {
      this.stack = null;
      this.size = 0;
      this.min = [];
    }
    return CONSTANTS.CLEARED_MESSAGE;
  }
}
