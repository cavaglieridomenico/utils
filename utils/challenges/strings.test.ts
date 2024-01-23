import { expect, test } from "@jest/globals";

/*Return the extension of a filename*/

const getExtension = (filename: string) => filename.split(".").pop();

test("Get extension", () => {
  expect(getExtension("sheet.xls")).toStrictEqual("xls");
});

test("Get extension", () => {
  expect(getExtension("my_document.test.home.docx")).toStrictEqual("docx");
});

const getExtensionWithDot = (filename: string) =>
  `.${filename.split(".").pop()}`;

test("Get extension", () => {
  expect(getExtensionWithDot("sheet.xls")).toStrictEqual(".xls");
});

test("Get extension", () => {
  expect(getExtensionWithDot("my_document.test.home.docx")).toStrictEqual(
    ".docx"
  );
});

const getFileExtension = (filename: string) =>
  filename.slice(filename.lastIndexOf("."));

test("Get new word", () => {
  expect(getFileExtension("sheet.xls")).toStrictEqual(".xls");
});

test("Get new word", () => {
  expect(getFileExtension("my_document.test.home.docx")).toStrictEqual(".docx");
});

/*Return a string with the next character in the alphabet*/

const getNewWord = (word: string): string =>
  word
    .split("")
    .map((character) => {
      if (character === "z") return "";
      return String.fromCharCode(character.charCodeAt(0) + 1);
    })
    .join("");

test("Get new word", () => {
  expect(getNewWord("dog")).toStrictEqual("eph");
});

test("Get new word", () => {
  expect(getNewWord("cat")).toStrictEqual("dbu");
});

test("Get new word", () => {
  expect(getNewWord("zorro")).toStrictEqual("pssp");
});

test("Get new word", () => {
  expect(getNewWord("zzz")).toStrictEqual("");
});

/*Return a string with the word "New! " at the beginning*/

const getNewWord2 = (word: string) =>
  /^New! /.test(word) ? word : `New! ${word}`;

test("Get new word", () => {
  expect(getNewWord2("Dog")).toStrictEqual("New! Dog");
});

test("Get new word", () => {
  expect(getNewWord2("New! Dog")).toStrictEqual("New! Dog");
});

const getNewWord3 = (word: string) =>
  word.indexOf("New! ") === 0 ? word : `New! ${word}`;

test("Get new word", () => {
  expect(getNewWord3("Dog")).toStrictEqual("New! Dog");
});

test("Get new word", () => {
  expect(getNewWord3("New! Dog")).toStrictEqual("New! Dog");
});

/*Returns a new string with the first 3 and last 3 characters of another string joined*/

const getNewWord4 = (word: string) =>
  word.length < 3 ? word : word.slice(0, 3) + word.slice(-3);

test("Get new word", () => {
  expect(getNewWord4("megamind")).toStrictEqual("megind");
});

test("Get new word", () => {
  expect(getNewWord4("bo")).toStrictEqual("bo");
});

test("Get new word", () => {
  expect(getNewWord4("extrafresh")).toStrictEqual("extesh");
});

/*Returns a new string to extract the first half of a string of even length no odd*/

const getNewWord5 = (str: string) =>
  str.length % 2 !== 0 ? str : str.slice(0, str.length / 2);

test("Get new word", () => {
  expect(getNewWord5("dogo")).toStrictEqual("do");
});

test("Get new word", () => {
  expect(getNewWord5("dog")).toStrictEqual("dog");
});

/*Returns a new string by concatenating two string except their first character*/

const getNewWord6 = (str1: string, str2: string) =>
  str1.slice(1) + str2.slice(1);

test("Get new word", () => {
  expect(getNewWord6("dogo", "mogo")).toStrictEqual("ogoogo");
});

test("Get new word", () => {
  expect(getNewWord6("cat", "dog")).toStrictEqual("atog");
});

/*Check if the occurrence number of a carecter in a string is 2 to 4*/

const getOccurrenceNumber = (
  word: string,
  characterToFind: string
): boolean => {
  let occurrence = 0;
  word
    .split("")
    .forEach((character) => character === characterToFind && occurrence++);
  return occurrence >= 2 && occurrence <= 4;
};

test("Check occurrence number", () => {
  expect(getOccurrenceNumber("avengers", "e")).toStrictEqual(true);
});

test("Check occurrence number", () => {
  expect(getOccurrenceNumber("avengers", "v")).toStrictEqual(false);
});

test("Check occurrence number", () => {
  expect(getOccurrenceNumber("cracco", "c")).toStrictEqual(true);
});

test("Check occurrence number", () => {
  expect(getOccurrenceNumber("cracco", "z")).toStrictEqual(false);
});

test("Check occurrence number", () => {
  expect(getOccurrenceNumber("crcaccoc", "c")).toStrictEqual(false);
});

const countOccorrences = (word: string, characterToFind: string): number =>
  word.split("").filter((character) => character === characterToFind).length;

const getOccurrenceNumber2 = (word: string, characterToFind: string): boolean =>
  countOccorrences(word, characterToFind) >= 2 &&
  countOccorrences(word, characterToFind) <= 4;

test("Get occurrence number", () => {
  expect(getOccurrenceNumber2("avengers", "e")).toStrictEqual(true);
});

test("Get occurrence number", () => {
  expect(getOccurrenceNumber2("avengers", "v")).toStrictEqual(false);
});

test("Get occurrence number", () => {
  expect(getOccurrenceNumber2("cracco", "c")).toStrictEqual(true);
});

test("Get occurrence number", () => {
  expect(getOccurrenceNumber2("cracco", "z")).toStrictEqual(false);
});

test("Get occurrence number", () => {
  expect(getOccurrenceNumber2("crcaccoc", "c")).toStrictEqual(false);
});
