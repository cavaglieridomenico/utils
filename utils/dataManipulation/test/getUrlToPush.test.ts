import { expect, test } from "@jest/globals";

//Get a full url
export const getUrlToPush = (url: string) => {
  if (url.includes("http") || url.includes("www")) return url;
  // const urlLocation = window.location.origin;
  const urlLocation = "https://www.google.com";
  return `${urlLocation}/${url.replace("/", "")}`;
};

test("If the input is a base url it is returned, otherwise window.origin + input is returned.", () => {
  expect(getUrlToPush("www.google.com")).toBe("www.google.com");
  expect(getUrlToPush("https://www.google.com")).toBe("https://www.google.com");
  expect(getUrlToPush("login")).toBe("https://www.google.com/login");
  expect(getUrlToPush("/login")).toBe("https://www.google.com/login");
});
