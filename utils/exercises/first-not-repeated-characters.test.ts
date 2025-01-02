import { expect, test } from "@jest/globals";

const getFirstNotRepeatedCharacters = (word: string): string | undefined =>
  word
    .split("")
    .find(
      (letter, index, array) =>
        array.slice(index + 1).indexOf(letter) === -1 &&
        array.slice(0, index).indexOf(letter) === -1
    );

test("Return a string of unique characters", () => {
  expect(getFirstNotRepeatedCharacters("dooggy")).toStrictEqual("d");
});
test("Return a string of unique characters", () => {
  expect(getFirstNotRepeatedCharacters("ddooggyya")).toStrictEqual("a");
});
test("Return a string of unique characters", () => {
  expect(getFirstNotRepeatedCharacters("didooggyya")).toStrictEqual("i");
});
test("Return a string of unique characters", () => {
  expect(getFirstNotRepeatedCharacters("didooggyyai")).toStrictEqual("a");
});
test("Return a string of unique characters", () => {
  expect(getFirstNotRepeatedCharacters("abacddbec")).toStrictEqual("e");
});

const getFirstNotRepeatedCharacters2 = (word: string): string | undefined =>
  word
    .split("")
    .find(
      (letter, index, array) =>
        array.filter((itemInArray) => itemInArray === letter).length === 1
    );

test("Return a string of unique characters", () => {
  expect(getFirstNotRepeatedCharacters2("dooggy")).toStrictEqual("d");
});
test("Return a string of unique characters", () => {
  expect(getFirstNotRepeatedCharacters2("abacddbec")).toStrictEqual("e");
});

const getFirstNotRepeatedCharacters3 = (word: string): string | undefined =>
  word
    .split("")
    .find(
      (letter, index, array) =>
        array.indexOf(letter) === array.lastIndexOf(letter)
    );

test("Return a string of unique characters", () => {
  expect(getFirstNotRepeatedCharacters3("dooggy")).toStrictEqual("d");
});
test("Return a string of unique characters", () => {
  expect(getFirstNotRepeatedCharacters3("abacddbec")).toStrictEqual("e");
});
