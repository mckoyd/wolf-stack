import isType from "../src/utils/isType";
import CONSTANTS from "../src/utils/constants";

const {
  TEST_ARRAY,
  TEST_STRING,
  TEST_OBJECT,
  TEST_BOOLEAN,
  TEST_NUMBER
} = CONSTANTS;

describe("`isType` method", () => {
  it("Should return true if the value is the type that was passed in", () => {
    expect.assertions(5);

    expect(isType("array", TEST_ARRAY)).toBe(true);
    expect(isType("boolean", TEST_BOOLEAN)).toBe(true);
    expect(isType("number", TEST_NUMBER)).toBe(true);
    expect(isType("object", TEST_OBJECT)).toBe(true);
    expect(isType("string", TEST_STRING)).toBe(true);
  });

  it("Should return false if the value is not the type that was passed in", () => {
    expect.assertions(5);

    expect(isType("number", TEST_ARRAY)).toBe(false);
    expect(isType("object", TEST_BOOLEAN)).toBe(false);
    expect(isType("boolean", TEST_NUMBER)).toBe(false);
    expect(isType("string", TEST_OBJECT)).toBe(false);
    expect(isType("array", TEST_STRING)).toBe(false);
  });
});
