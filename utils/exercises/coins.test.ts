import { expect, test } from "@jest/globals";

const getNumberOfCoins = (
  money: number,
  coins = [25, 10, 5, 2, 1]
): number[] => {
  let necessaryCoins: number[] = [];
  coins.forEach((coin) => {
    while (money >= coin) {
      necessaryCoins.push(coin);
      money -= coin;
    }
  });
  return necessaryCoins;
};

test("Return the number of coins", () => {
  expect(getNumberOfCoins(46, [25, 10, 5, 2, 1])).toStrictEqual([
    25, 10, 10, 1,
  ]);
});

test("Return the number of coins", () => {
  expect(getNumberOfCoins(26, [25, 10, 5, 2, 1])).toStrictEqual([25, 1]);
});

test("Return the number of coins", () => {
  expect(getNumberOfCoins(100, [25, 10, 5, 2, 1])).toStrictEqual([
    25, 25, 25, 25,
  ]);
});

test("Return the number of coins", () => {
  expect(getNumberOfCoins(125, [25, 10, 5, 2, 1])).toStrictEqual([
    25, 25, 25, 25, 25,
  ]);
});

test("Return the number of coins", () => {
  expect(getNumberOfCoins(120, [25, 10, 5, 2, 1])).toStrictEqual([
    25, 25, 25, 25, 10, 10,
  ]);
});

test("Return the number of coins", () => {
  expect(getNumberOfCoins(12, [25, 10, 5, 2, 1])).toStrictEqual([10, 2]);
});

test("Return the number of coins", () => {
  expect(getNumberOfCoins(1, [25, 10, 5, 2, 1])).toStrictEqual([1]);
});
