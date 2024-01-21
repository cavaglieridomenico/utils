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

test("Get extension", () => {
  expect(getFileExtension("sheet.xls")).toStrictEqual(".xls");
});

test("Get extension", () => {
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

test("Get extension", () => {
  expect(getNewWord("dog")).toStrictEqual("eph");
});

test("Get extension", () => {
  expect(getNewWord("cat")).toStrictEqual("dbu");
});

test("Get extension", () => {
  expect(getNewWord("zorro")).toStrictEqual("pssp");
});

test("Get extension", () => {
  expect(getNewWord("zzz")).toStrictEqual("");
});

/*Return a string with the word "New! " at the beginning*/

const getNewWord2 = (word: string) =>
  /^New! /.test(word) ? word : `New! ${word}`;

test("Get extension", () => {
  expect(getNewWord2("Dog")).toStrictEqual("New! Dog");
});

test("Get extension", () => {
  expect(getNewWord2("New! Dog")).toStrictEqual("New! Dog");
});

const getNewWord3 = (word: string) =>
  word.indexOf("New! ") === 0 ? word : `New! ${word}`;

test("Get extension", () => {
  expect(getNewWord3("Dog")).toStrictEqual("New! Dog");
});

test("Get extension", () => {
  expect(getNewWord3("New! Dog")).toStrictEqual("New! Dog");
});
