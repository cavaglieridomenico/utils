import { expect, test } from "@jest/globals";

export const VOWELS = "aeiou";
export const getVowelsNumber = (pattern: string, word: string): number => {
  let numberOfVolwes = 0;
  word.split("").forEach((letter) => {
    if (pattern.split("").includes(letter)) numberOfVolwes++;
  });
  return numberOfVolwes;
};

test("Return the number of vowels", () => {
  expect(getVowelsNumber(VOWELS, "dog")).toStrictEqual(1);
});

test("Return the number of vowels", () => {
  expect(getVowelsNumber(VOWELS, "doag")).toStrictEqual(2);
});

test("Return the number of vowels", () => {
  expect(getVowelsNumber(VOWELS, "dagahe")).toStrictEqual(3);
});

const getVowelsNumber2 = (word: string, pattern: string = "aeiou") =>
  word.split("").filter((letter) => pattern.split("").includes(letter)).length;
test("Return the number of vowels", () => {
  expect(getVowelsNumber2("dagahe", VOWELS)).toStrictEqual(3);
});
test("Return the number of vowels", () => {
  expect(getVowelsNumber2("edagahe", VOWELS)).toStrictEqual(4);
});
test("Return the number of vowels", () => {
  expect(getVowelsNumber2("edagahe")).toStrictEqual(4);
});
test("Return the number of vowels", () => {
  expect(getVowelsNumber2("edagahe", "ed")).toStrictEqual(3);
});
