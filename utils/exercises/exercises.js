const getEvenNumbers = (list) =>
  list.reduce((acc, listItem) => {
    if (listItem % 2 === 0) acc++;
    return acc;
  }, 0);

const getEvenNumbers2 = (list) =>
  list.filter((itemList) => itemList % 2 === 0).length;

const getevenNumbersUpToValue = (number) => {
  let newList = [];
  for (let i = 0; i <= number; i++) {
    newList.push(i);
  }
  return newList;
};

const valueToPass = 6;

const isAscendingList = (list) => {
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] !== "number" || list[i + 1] <= list[i]) {
      return false;
    }
  }
  return true;
};

export const getLargestEvenNumber = (list) =>
  list
    .filter((number) => number % 2 === 0)
    .sort((a, b) => a - b)
    .reverse()[0];

export const getLargestEvenNumber2 = (list) =>
  Math.max(...list.filter((number) => number % 2 === 0));

export const replaceFirstNumber = (string) => string.replace(/[0-9]/, "$");

export const isLeapYear = (number) => number % 4 === 0;

export const isContainedObject = (obj1, obj2) =>
  Object.keys(obj1).every((key) => obj2[key]);

export const parseCSV = (string) =>
  string.split(/\n/).map((newString) => newString.split(","));

const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16);
export const getRandomHexColor = () => {
  return `#${Array.from({ length: 6 }).map(getRandomHexNumber).join("")}`;
};

export const isForAllItems = (list, callback) =>
  list.every((item) => callback(item));

export const isForAllItems2 = (list, callback) => {
  for (let i = 0; i < list.length; i++) {
    if (!callback(list[i])) {
      return false;
    }
  }
  return true;
};

export const getAlphabeticalOrder = (word) =>
  word
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

export const VOWELS = "aeiou";
export const getVowelsNumber = (pattern, word) => {
  let numberOfVolwes = 0;
  word.split("").forEach((letter) => {
    if (pattern.split("").includes(letter)) numberOfVolwes++;
  });
  return numberOfVolwes;
};
