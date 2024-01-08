import { expect, test } from "@jest/globals";

/*Return true if 100*/
const checkNumbers = (num1: number, num2: number): any => {
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
/*End of Return true if 100*/
