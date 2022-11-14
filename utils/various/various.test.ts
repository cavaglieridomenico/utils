import { expect, test } from "@jest/globals";

const getListWithoutDuplicate = (list: string[]) => Array.from(new Set(list));

test("Array without duplicates", () => {
  expect(getListWithoutDuplicate(["cat", "dog", "dog"])).toStrictEqual([
    "cat",
    "dog",
  ]);
});
