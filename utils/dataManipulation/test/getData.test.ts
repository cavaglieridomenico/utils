import { expect, test } from "@jest/globals";

// Get the desired value if it is available or an alternative message
export const getData = (value: any, message: string = "Data not available") =>
  value ? value : message;

test("If the input is not undefined it is returned, otherwise a default message is returned", () => {
  expect(getData("Hello!")).toBe("Hello!");
  expect(getData("")).toBe("Data not available");
  expect(getData(null)).toBe("Data not available");
  expect(getData(undefined, "")).toBe("");
  expect(getData(NaN)).toBe("Data not available");
});
