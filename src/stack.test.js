const Stack = require("./stack");
const {
  TEST_ARRAY,
  TEST_STRING,
  TEST_OBJECT,
  TEST_BOOLEAN
} = require("./testConstants");
let testStack;

describe("Creating a New Stack and Using Stack Methods", () => {
  it("Should create an empty stack on instantiation", () => {
    expect.assertions(4);

    const testStack = new Stack();
    expect(testStack).toEqual({});
    expect(testStack).toBeDefined();
    expect(testStack).not.toBeNull();
    expect(testStack).toBeInstanceOf(Stack);
  });

  it("`peek` should return undefined if stack is empty", () => {
    expect.assertions(1);

    const testStack = new Stack();
    expect(testStack.peek()).toBeNull();
  });

  it("`peek` should return the value at the top of the stack if stack is not empty", () => {
    expect.assertions(1);

    const testStack = new Stack();
    testStack.push(TEST_STRING);
    expect(testStack.peek()).toEqual(TEST_STRING);
  });

  it("`push` should add a value to the top of the stack when called", () => {
    expect.assertions(2);

    const testStack = new Stack();
    testStack.push(TEST_STRING);
    expect(testStack.peek()).toEqual(TEST_STRING);
    testStack.push(TEST_OBJECT);
    expect(testStack.peek()).toEqual(TEST_OBJECT);
  });

  it("`push` should add any type of value to the stack", () => {
    expect.assertions(5);

    const testStack = new Stack();
    testStack.push(TEST_ARRAY);
    expect(testStack.peek()).toContainEqual(TEST_STRING);
    testStack.push(TEST_OBJECT);
    expect(testStack.peek()).toContainEqual(TEST_OBJECT);
    testStack.push(TEST_STRING);
    expect(testStack.peek()).toContainEqual(TEST_STRING);
    testStack.push(TEST_NUMBER);
    expect(testStack.peek()).toContainEqual(TEST_NUMBER);
    testStack.push(TEST_BOOLEAN);
    expect(testStack.peek()).toContainEqual(TEST_BOOLEAN);
  });

  it("`pop` should return undefined if stack is empty", () => {
    expect.assertions(1);

    const testStack = new Stack();
    const poppedValue = testStack.pop();
    expect(poppedValue).toBeUndefined();
  });

  it("`pop` should return the top element after removing it from the stack", () => {
    expect.assertions(5);

    const testStack = new Stack();
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

    const testStack = new Stack();
    expect(testStack.isEmpty()).toBe(true);
  });

  it("`isEmpty` should return `false` if stack has one or more values when called", () => {
    expect.assertions(1);

    const testStack = new Stack();
    testStack.push(TEST_STRING);
    expect(testStack.isEmpty()).toBe(false);
  });

  it("`print` should display stack as a string", () => {
    expect.assertions(1);

    const stringStack = 'true,230,{"testObj":true}';
    const testStack = new Stack();
    testStack.push(TEST_BOOLEAN);
    testStack.push(TEST_NUMBER);
    testStack.push(TEST_OBJECT);
    expect(testStack.print()).toEqual(stringStack);
  });
});

describe("Using Stack Properties", () => {
  beforeEach(() => {
    testStack = new Stack();
  });

  it("has a size property that returns the length of the stack", () => {
    expect.assertions(4);

    const testStack = new Stack();
    let initialSize = testStack.size;
    expect(initialSize).toBeFalsy();
    testStack.push(TEST_NUMBER);
    expect(testStack.size).toEqual(initialSize + 1);
    testStack.push(TEST_OBJECT);
    expect(testStack.size).toEqual(initialSize + 2);
    testStack.pop();
    expect(testStack.size).toEqual(initialSize + 1);
  });

  it("has a min property that returns undefined if stack is not exclusively number values", () => {
    expect.assertions(1);

    const testStack = new Stack();
    testStack.push(TEST_NUMBER);
    testStack.push(TEST_STRING);
    expect(testStack.min).toBeUndefined();
  });

  it("has a min property that returns the minimum value of a stack of numbers", () => {
    expect.assertions(2);

    const testStack = new Stack();
    testStack.push(TEST_NUMBER);
    testStack.push(TEST_NUMBER - 100);
    testStack.push(TEST_NUMBER + 30);
    testStack.push(TEST_NUMBER - 50);

    expect(testStack.min).toBeDefined();
    expect(testStack.min).toEqual(TEST_NUMBER - 100);
  });
});
