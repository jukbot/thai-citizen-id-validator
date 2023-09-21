import { describe, test, expect } from "vitest";
import validateThaiID from "../lib/validator";

describe("validateThaiID Function", () => {
  test("Case 1: Valid ID Correct pattern", () => {
    expect(validateThaiID("1112034563562")).toBeTruthy();
  });

  test("Case 2: Invalid ID Wrong pattern", () => {
    expect(validateThaiID("1101700230705")).toBeFalsy();
  });

  test("Case 3: Invalid ID Less than 13 characters", () => {
    expect(validateThaiID("110170023073")).toBeFalsy();
  });

  test("Case 4: Invalid ID Mixed characters", () => {
    expect(validateThaiID("11017002070d3")).toBeFalsy();
  });

  test("Case 5: Invalid ID Mixed characters", () => {
    expect(validateThaiID("rytege54fsfsf")).toBeFalsy();
  });

  test("Case 6: Invalid ID Just 0", () => {
    expect(validateThaiID("0")).toBeFalsy();
  });

  test("Case 7: Invalid ID Special character", () => {
    expect(validateThaiID("-")).toBeFalsy();
  });

  test("Case 8: Invalid ID Blank character", () => {
    expect(validateThaiID("")).toBeFalsy();
  });

  test("Case 9: Invalid ID NULL", () => {
    expect(validateThaiID(null)).toBeFalsy();
  });

  test("Case 10: Invalid ID Only text character", () => {
    expect(validateThaiID("blablabla")).toBeFalsy();
  });

  test("Case 11: Invalid ID Undefined input", () => {
    expect(validateThaiID(undefined)).toBeFalsy();
  });
});
