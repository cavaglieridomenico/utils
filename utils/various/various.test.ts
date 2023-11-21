import { expect, test } from "@jest/globals";

/*Array without duplicates - Start*/
const getListWithoutDuplicate = (list: string[]) => Array.from(new Set(list));

test("Array without duplicates", () => {
  expect(getListWithoutDuplicate(["cat", "dog", "dog"])).toStrictEqual([
    "cat",
    "dog",
  ]);
});
/*Array without duplicates - End*/

/*New list of Objects - */
const list = [{ pet: "Cat" }, { pet: "Dog" }, { pet: "Rabbit" }];

const getNewList = (list) =>
  list.map((item) => ({
    newPet: item.pet,
    location: "Home",
  }));

test("New list of Objects", () => {
  expect(getNewList(list)).toStrictEqual([
    { newPet: "Cat", location: "Home" },
    { newPet: "Dog", location: "Home" },
    { newPet: "Rabbit", location: "Home" },
  ]);
});
/*New list of Objects - End*/

/*Guess word - Start*/
const guessedLetters = ["c", "a", "t"];

const isRightWord = (list: string[], wordToGuess: string): boolean => {
  return [...wordToGuess].every((letter) => list.includes(letter));
};

test("Check guessed word", () => {
  expect(isRightWord(guessedLetters, "cat")).toStrictEqual(true);
});

test("Check guessed word", () => {
  expect(isRightWord(["x", "a", "d", "c"], "cat")).toStrictEqual(false);
});

test("Check guessed word", () => {
  expect(isRightWord(["a", "t", "c"], "cat")).toStrictEqual(true);
});

test("Check guessed word", () => {
  expect(isRightWord(["c"], "cat")).toStrictEqual(false);
});

test("Check guessed word", () => {
  expect(isRightWord(["j", "f", "l", "r", "a", "t"], "flat")).toStrictEqual(
    true
  );
});
/*Guess word - End*/

/*Cut list - Start*/
const cutList = (list: number[], index: number) => {
  return list.slice(0, index + 1);
};

test("Check cut list", () => {
  expect(cutList([0, 1, 2, 3, 4], 2)).toStrictEqual([0, 1, 2]);
});

test("Check cut list", () => {
  expect(cutList([0, 1, 2, 3, 4], 3)).toStrictEqual([0, 1, 2, 3]);
});

test("Check cut list", () => {
  expect(cutList([0, 1, 2, 3, 4, 5], 2)).toStrictEqual([0, 1, 2]);
});

test("Check cut list", () => {
  expect(cutList([0, 1, 2, 3, 4, 5], 5)).toStrictEqual([0, 1, 2, 3, 4, 5]);
});
/*Cut list - End*/
