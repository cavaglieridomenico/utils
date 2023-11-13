import { expect, test } from "@jest/globals";

type TictactoeValue = null | "x" | "o";
type TictactoeValues = [
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue
];

const getTictactoeWinner = (
  list: TictactoeValues
): TictactoeValue | undefined => {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombination.length; i++) {
    const [a, b, c] = winCombination[i];
    if (list[a] && list[a] === list[b] && list[a] === list[c]) {
      return list[a];
    }
  }
};

test("Array without duplicates", () => {
  expect(
    getTictactoeWinner(["x", null, "x", "x", null, "x", null, null, "o"])
  ).toEqual(undefined);
});

test("Array without duplicates", () => {
  expect(
    getTictactoeWinner(["x", null, "x", "x", null, "x", "x", "o", "o"])
  ).toEqual("x");
});

test("Array without duplicates", () => {
  expect(
    getTictactoeWinner(["x", null, "x", "x", null, "x", "o", "o", "o"])
  ).toEqual("o");
});

test("Array without duplicates", () => {
  expect(
    getTictactoeWinner(["x", "o", "o", "x", "o", "x", "o", "o", "x"])
  ).toEqual("o");
});
