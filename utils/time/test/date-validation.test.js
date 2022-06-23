import { isValidDay, isValidMonth, isValidYear } from "../time.js";

test("it should return true if the input is a valid day of date format, otherwise false", () => {
  expect(isValidDay(1)).toBe(true);
  expect(isValidDay(12)).toBe(true);
  expect(isValidDay("1")).toBe(true);
  expect(isValidDay("15")).toBe(true);
  expect(isValidDay(0)).toBe(false);
  expect(isValidDay(32)).toBe(false);
  expect(isValidDay("2 ")).toBe(true);
  expect(isValidDay("  2  ")).toBe(true);
  expect(isValidDay(" 0 ")).toBe(false);
  expect(isValidDay(" 32 ")).toBe(false);
  expect(isValidDay("0")).toBe(false);
  expect(isValidDay("32")).toBe(false);
  expect(isValidDay("Ciao")).toBe(false);
});

test("it should return true if the input is a valid month of date format, otherwise false", () => {
  expect(isValidMonth(1)).toBe(true);
  expect(isValidMonth(12)).toBe(true);
  expect(isValidMonth("1")).toBe(true);
  expect(isValidMonth("12")).toBe(true);
  expect(isValidMonth(0)).toBe(false);
  expect(isValidMonth(13)).toBe(false);
  expect(isValidMonth("2 ")).toBe(true);
  expect(isValidMonth("  2  ")).toBe(true);
  expect(isValidMonth(" 0 ")).toBe(false);
  expect(isValidMonth(" 13 ")).toBe(false);
  expect(isValidMonth("0")).toBe(false);
  expect(isValidMonth("13")).toBe(false);
  expect(isValidMonth("Ciao")).toBe(false);
});

test("it should return true if the input is a valid month of date format, otherwise false", () => {
  expect(isValidYear(0)).toBe(true);
  expect(isValidYear(9999)).toBe(true);
  expect(isValidYear("0")).toBe(true);
  expect(isValidYear("9999")).toBe(true);
  expect(isValidYear(10000)).toBe(false);
  expect(isValidYear("2022 ")).toBe(true);
  expect(isValidYear("  1200  ")).toBe(true);
  expect(isValidYear(" 13000 ")).toBe(false);
  expect(isValidYear("99999")).toBe(false);
  expect(isValidYear("0000")).toBe(true);
  expect(isValidYear("Ciao")).toBe(false);
});
