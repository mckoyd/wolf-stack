const CONSTANTS = require("./utils/constants");

const isType = require("./utils/isType");

const Node = require("./node");

class Stack {
  constructor() {
    this._stack = null;
    this._min = [];
    this.size = 0;
  }

  peek() {
    if (this._stack) {
      return this._stack.data;
    }
  }

  push(data) {
    this._setMinimum(data);

    const node = new Node(data, this._stack);
    this._stack = node;
    this.size++;
  }

  pop() {
    if (this._stack) {
      const topValue = this.peek();
      const restOfStack = this._stack.next;
      this._stack = restOfStack;

      this._min.pop();

      this.size--;
      return topValue;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    const stackItems = [];
    let node = this._stack;

    while (node) {
      if (isType("object", node.data)) {
        node.data = JSON.stringify(node.data);
      }

      stackItems.push(node.data);
      node = node.next;
    }

    const stringifiedStack = stackItems.join(", ");
    return stringifiedStack;
  }

  getMinimum() {
    const minLength = this._min.length;
    if (minLength) return this._min[minLength - 1];
  }

  clear() {
    if (this._stack) {
      this._stack = null;
      this._min = [];
      this.size = 0;
    }
  }

  _setMinimum(data) {
    if (isNaN(data)) {
      this._min = [];
    } else {
      const topValue = this.peek();

      if (!topValue) {
        this._min.push(data);
      } else {
        const currentMin = this._min[this._min.length - 1];
        data < currentMin ? this._min.push(data) : this._min.push(currentMin);
      }
    }
  }

}

module.exports = Stack;