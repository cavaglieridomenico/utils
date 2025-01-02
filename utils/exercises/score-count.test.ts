import { expect, test } from "@jest/globals";

export const getScore = (resultList: string[]): number =>
  resultList.reduce((acc, result) => {
    const [x, y] = result.split(":");
    const scoreValue = x > y ? 3 : x === y ? 1 : 0;
    return (acc += scoreValue);
  }, 0);

test("Return the score", () => {
  expect(getScore(["3:1"])).toStrictEqual(3);
});
test("Return the score", () => {
  expect(getScore(["1:1"])).toStrictEqual(1);
});
test("Return the score", () => {
  expect(getScore(["3:1", "4:2"])).toStrictEqual(6);
});
test("Return the score", () => {
  expect(getScore(["1:1", "2:1"])).toStrictEqual(4);
});
test("Return the score", () => {
  expect(getScore(["1:1", "2:1"])).toStrictEqual(4);
});
test("Return the score", () => {
  expect(getScore(["1:1", "2:6", "2:2", "3:5"])).toStrictEqual(2);
});
