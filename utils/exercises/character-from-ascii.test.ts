import { expect, test } from "@jest/globals";

export const getChar = (asciiValue: number): string =>
  String.fromCharCode(asciiValue);

test("Return the number of vowels", () => {
  expect(getChar(65)).toStrictEqual("A");
});
test("Return the number of vowels", () => {
  expect(getChar(115)).toStrictEqual("s");
});
