import { expect, test } from "@jest/globals";

/*Return true if 100*/
const checkNumbers = (num1: number, num2: number): boolean => {
  return num1 === 100 || num2 === 100 || num1 + num2 === 100;
};

test("Check numbers", () => {
  expect(checkNumbers(63, 100)).toStrictEqual(true);
});
test("Check numbers", () => {
  expect(checkNumbers(100, 15)).toStrictEqual(true);
});
test("Check numbers", () => {
  expect(checkNumbers(10, 90)).toStrictEqual(true);
});
test("Check numbers", () => {
  expect(checkNumbers(10, 91)).toStrictEqual(false);
});

/*Return the number nearest to 100*/
const checkNumbers2 = (num1: number, num2: number): number => {
  return Math.abs(100 - num1) < Math.abs(100 - num2) ? num1 : num2;
};

test("Check numbers", () => {
  expect(checkNumbers2(63, 100)).toStrictEqual(100);
});
test("Check numbers", () => {
  expect(checkNumbers2(60, 15)).toStrictEqual(60);
});
test("Check numbers", () => {
  expect(checkNumbers2(40, 55)).toStrictEqual(55);
});
test("Check numbers", () => {
  expect(checkNumbers2(200, 55)).toStrictEqual(55);
});

test("Check numbers", () => {
  expect(checkNumbers2(55, 200)).toStrictEqual(55);
});

test("Check numbers", () => {
  expect(checkNumbers2(1000, 20)).toStrictEqual(20);
});

test("Check numbers", () => {
  expect(checkNumbers2(101, 98)).toStrictEqual(101);
});

test("Check numbers", () => {
  expect(checkNumbers2(1000, 10000)).toStrictEqual(1000);
});

test("Check numbers", () => {
  expect(checkNumbers2(10000, 1000)).toStrictEqual(1000);
});

test("Check numbers", () => {
  expect(checkNumbers2(50, 50)).toStrictEqual(50);
});
