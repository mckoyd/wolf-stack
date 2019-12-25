import isType from "./isType";
import { STACK_TEST_VALUES } from "../testConstants";

const {
  TEST_ARRAY,
  TEST_STRING,
  TEST_OBJECT,
  TEST_BOOLEAN,
  TEST_NUMBER
} = STACK_TEST_VALUES;

describe("`isType` method", () => {
  it("Should return true if the value is the type that was passed in", () => {
    expect(isType("array", TEST_ARRAY)).toBe(true);
    expect(isType("boolean", TEST_BOOLEAN)).toBe(true);
    expect(isType("number", TEST_NUMBER)).toBe(true);
    expect(isType("object", TEST_OBJECT)).toBe(true);
    expect(isType("string", TEST_STRING)).toBe(true);
  });

  it("Should return false if the value is not the type that was passed in", () => {
    expect(isType("number", TEST_ARRAY)).toBe(false);
    expect(isType("object", TEST_BOOLEAN)).toBe(false);
    expect(isType("boolean", TEST_NUMBER)).toBe(false);
    expect(isType("string", TEST_OBJECT)).toBe(false);
    expect(isType("array", TEST_STRING)).toBe(false);
  });
});
