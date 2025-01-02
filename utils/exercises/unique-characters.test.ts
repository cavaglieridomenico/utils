import { expect, test } from "@jest/globals";

const getUniqueCharacters = (word: string): string =>
  [...new Set(word.split(""))].join("");

test("Return a string of unique characters", () => {
  expect(getUniqueCharacters("dooggy")).toStrictEqual("dogy");
});
test("Return a string of unique characters", () => {
  expect(getUniqueCharacters("ddooggyy")).toStrictEqual("dogy");
});

const getUniqueCharacters2 = (word: string): string => {
  let currentLetter: string = word[0];
  let uniqueCharacterList: string[] = [currentLetter];
  word.split("").forEach((letter) => {
    if (letter !== currentLetter) {
      uniqueCharacterList.push(letter);
      currentLetter = letter;
    }
  });
  return uniqueCharacterList.join("");
};

test("Return a string of unique characters", () => {
  expect(getUniqueCharacters2("dooggy")).toStrictEqual("dogy");
});
test("Return a string of unique characters", () => {
  expect(getUniqueCharacters2("ddooggyy")).toStrictEqual("dogy");
});

const getUniqueCharacters3 = (word: string): string =>
  word
    .split("")
    .filter(
      (letter, index, array) => array.slice(index + 1).indexOf(letter) === -1
    )
    .join("");

test("Return a string of unique characters", () => {
  expect(getUniqueCharacters3("dooggy")).toStrictEqual("dogy");
});
test("Return a string of unique characters", () => {
  expect(getUniqueCharacters3("ddooggyy")).toStrictEqual("dogy");
});
