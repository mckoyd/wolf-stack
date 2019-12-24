const Stack = require("./stack");

describe("Creating a New Stack", () => {
  it("Should create an empty stack on instantiation", () => {
    const testStack = new Stack();
    expect(testStack).not.toBeNull();
  });
});
