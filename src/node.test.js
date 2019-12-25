import Node from "./node";
import { TEST_BOOLEAN, TEST_STRING } from "./testConstants";

let testNode;
describe("Creating a New Node", () => {
  it("Should create a Node object with data and next values when passed as arguments", () => {
    expect.assertions(5);

    testNode = new Node(TEST_STRING, TEST_BOOLEAN);
    expect(testNode).toBeDefined();
    expect(testNode).not.toBeNull();
    expect(testNode).toBeInstanceOf(Node);
    expect(testNode).toHaveProperty("data", TEST_STRING);
    expect(testNode).toHaveProperty("next", TEST_BOOLEAN);
  });

  it("Should create a Node object with undefined data and next values when no arguments are passed", () => {
    expect.assertions(5);

    testNode = new Node();
    expect(testNode).toBeDefined();
    expect(testNode).not.toBeNull();
    expect(testNode).toBeInstanceOf(Node);
    expect(testNode).toHaveProperty("data", undefined);
    expect(testNode).toHaveProperty("next", undefined);
  });
});
