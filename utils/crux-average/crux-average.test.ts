import { expect, test } from "@jest/globals";

const getAverageList = (lists: number[][]): number[] => {
  let newList = [];
  return newList;
};

test("Return a new array of average values", () => {
  expect(
    getAverageList([
      [2, 3, 4],
      [2, 3, 4],
    ])
  ).toStrictEqual([]);
});
