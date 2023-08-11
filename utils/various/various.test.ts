import { expect, test } from "@jest/globals";

/*Array without duplicates*/
const getListWithoutDuplicate = (list: string[]) => Array.from(new Set(list));

test("Array without duplicates", () => {
  expect(getListWithoutDuplicate(["cat", "dog", "dog"])).toStrictEqual([
    "cat",
    "dog",
  ]);
});

/*New list of Objects*/
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

/*New list of Objects*/
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
