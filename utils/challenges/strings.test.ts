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

const getNewWorld = (word: string): string =>
  word
    .split("")
    .map((character) => {
      if (character === "z") return "";
      return String.fromCharCode(character.charCodeAt(0) + 1);
    })
    .join("");

test("Get extension", () => {
  expect(getNewWorld("dog")).toStrictEqual("eph");
});

test("Get extension", () => {
  expect(getNewWorld("cat")).toStrictEqual("dbu");
});

test("Get extension", () => {
  expect(getNewWorld("zorro")).toStrictEqual("pssp");
});

test("Get extension", () => {
  expect(getNewWorld("zzz")).toStrictEqual("");
});
