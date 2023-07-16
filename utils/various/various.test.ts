import { expect, test } from "@jest/globals";

const getListWithoutDuplicate = (list: string[]) => Array.from(new Set(list));

test("Array without duplicates", () => {
  expect(getListWithoutDuplicate(["cat", "dog", "dog"])).toStrictEqual([
    "cat",
    "dog",
  ]);
});

const getNewList = (list) =>
  list.map((item) => ({
    newPet: item.pet,
    location: "Home",
  }));

const list = [{ pet: "Cat" }, { pet: "Dog" }, { pet: "Rabbit" }];

test("New list of Objects", () => {
  expect(getNewList(list)).toStrictEqual([
    { newPet: "Cat", location: "Home" },
    { newPet: "Dog", location: "Home" },
    { newPet: "Rabbit", location: "Home" },
    // "Cats",
    // "Dogs",
    // "Rabbits",
  ]);
});
