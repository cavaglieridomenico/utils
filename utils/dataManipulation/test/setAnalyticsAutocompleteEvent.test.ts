import { expect, test } from "@jest/globals";

const setAnalyticsAutocompleteEvent = (resultsList?: any) => {
  let numberOfResults: number;
  resultsList && Array.isArray(resultsList)
    ? (numberOfResults = resultsList.length)
    : (numberOfResults = 0);
  return numberOfResults;
};

test("", () => {
  expect(setAnalyticsAutocompleteEvent([])).toBe(0);
  expect(setAnalyticsAutocompleteEvent()).toBe(0);
  expect(setAnalyticsAutocompleteEvent(undefined)).toBe(0);
  expect(setAnalyticsAutocompleteEvent(null)).toBe(0);
  expect(setAnalyticsAutocompleteEvent("hello")).toBe(0);
  expect(setAnalyticsAutocompleteEvent({ prop: [1, 2, 3] })).toBe(0);
  expect(setAnalyticsAutocompleteEvent([1, 2, 3])).toBe(3);
});

const setAnalyticsAutocompleteEvent2 = (resultsList?: any) => {
  let numberOfResults: number;
  resultsList ? (numberOfResults = resultsList.length) : (numberOfResults = 0);
  return numberOfResults;
};

test("", () => {
  expect(setAnalyticsAutocompleteEvent2([])).toBe(0);
});
