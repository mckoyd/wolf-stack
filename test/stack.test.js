const CONSTANTS = require("../src/utils/constants");
const Stack = require("../src/stack");

let testStack;
const {
  TEST_ARRAY,
  TEST_STRING,
  TEST_OBJECT,
  TEST_BOOLEAN,
  TEST_NUMBER,
  CLEARED_MESSAGE
} = CONSTANTS;

describe("Creating a New Stack and Using Stack Methods", () => {
  beforeEach(() => {
    testStack = new Stack();
  });

  it("Should create an empty stack on instantiation", () => {
    expect.assertions(4);
    expect(testStack).toEqual(new Stack());
    expect(testStack).toBeDefined();
    expect(testStack).not.toBeNull();
    expect(testStack).toBeInstanceOf(Stack);
  });

  it("`peek` should return undefined if stack is empty", () => {
    expect.assertions(1);
    expect(testStack.peek()).toBeUndefined();
  });

  it("`peek` should return the value at the top of the stack if stack is not empty", () => {
    expect.assertions(1);
    testStack.push(TEST_STRING);
    expect(testStack.peek()).toEqual(TEST_STRING);
  });

  it("`push` should add a value to the top of the stack when called", () => {
    expect.assertions(2);
    testStack.push(TEST_STRING);
    expect(testStack.peek()).toEqual(TEST_STRING);
    testStack.push(TEST_OBJECT);
    expect(testStack.peek()).toEqual(TEST_OBJECT);
  });

  it("`push` should add any type of value to the stack", () => {
    expect.assertions(5);
    testStack.push(TEST_ARRAY);
    expect(testStack.peek()).toMatchObject(TEST_ARRAY);
    testStack.push(TEST_OBJECT);
    expect(testStack.peek()).toMatchObject(TEST_OBJECT);
    testStack.push(TEST_STRING);
    expect(testStack.peek()).toEqual(TEST_STRING);
    testStack.push(TEST_NUMBER);
    expect(testStack.peek()).toEqual(TEST_NUMBER);
    testStack.push(TEST_BOOLEAN);
    expect(testStack.peek()).toEqual(TEST_BOOLEAN);
  });

  it("`pop` should return undefined if stack is empty", () => {
    expect.assertions(1);
    const poppedValue = testStack.pop();
    expect(poppedValue).toBeUndefined();
  });

  it("`pop` should return the top element after removing it from the stack", () => {
    expect.assertions(5);
    testStack.push(TEST_STRING);
    testStack.push(TEST_NUMBER);
    let stackSize = testStack.size;
    let topElement = testStack.peek();
    let poppedValue = testStack.pop();
    expect(testStack.size).toEqual(stackSize - 1);
    expect(poppedValue).toEqual(topElement);
    topElement = testStack.peek();
    poppedValue = testStack.pop();
    expect(poppedValue).toEqual(topElement);
    expect(testStack.size).toEqual(stackSize - 2);
    expect(testStack.peek()).toBeUndefined();
  });

  it("`isEmpty` should return `true` if stack is empty when called", () => {
    expect.assertions(1);
    expect(testStack.isEmpty()).toBe(true);
  });

  it("`isEmpty` should return `false` if stack has one or more values when called", () => {
    expect.assertions(1);
    testStack.push(TEST_STRING);
    expect(testStack.isEmpty()).toBe(false);
  });

  it("`print` should display stack as a string", () => {
    expect.assertions(1);
    const stringStack = '{"testObj":true}, 230, false';
    testStack.push(TEST_BOOLEAN);
    testStack.push(TEST_NUMBER);
    testStack.push(TEST_OBJECT);
    expect(testStack.print()).toEqual(stringStack);
  });

  it("`getMinimumOfStack` returns undefined if stack is not exclusively number values", () => {
    expect.assertions(1);
    testStack.push(TEST_NUMBER);
    testStack.push(TEST_STRING);
    expect(testStack.getMinimum()).toBeUndefined();
  });

  it("`getMinimumOfStack` returns the minimum value of a stack of numbers", () => {
    expect.assertions(2);
    testStack.push(TEST_NUMBER);
    testStack.push(TEST_NUMBER - 100);
    testStack.push(TEST_NUMBER + 30);
    testStack.push(TEST_NUMBER - 50);
    expect(testStack.getMinimum()).toBeDefined();
    expect(testStack.getMinimum()).toEqual(TEST_NUMBER - 100);
  });

  it("`clear` empties the stack", () => {
    expect.assertions(3);
    testStack.push(TEST_NUMBER);
    testStack.push(TEST_STRING);
    expect(testStack).not.toBeNull();
    testStack.clear();
    expect(testStack.isEmpty()).toBe(true);
    expect(testStack.size).toBeFalsy();
  });

  it("`clear` ignores an empty stack", () => {
    expect.assertions(3);
    expect(testStack.isEmpty()).toBe(true);
    testStack.clear();
    expect(testStack.isEmpty()).toBe(true);
    expect(testStack.size).toBeFalsy();
  });
});

describe("Using Stack Properties", () => {
  beforeEach(() => {
    testStack = new Stack();
  });

  it("has a size property that returns the length of the stack", () => {
    expect.assertions(4);
    let initialSize = testStack.size;
    expect(initialSize).toBeFalsy();
    testStack.push(TEST_NUMBER);
    expect(testStack.size).toEqual(initialSize + 1);
    testStack.push(TEST_OBJECT);
    expect(testStack.size).toEqual(initialSize + 2);
    testStack.pop();
    expect(testStack.size).toEqual(initialSize + 1);
  });
});
