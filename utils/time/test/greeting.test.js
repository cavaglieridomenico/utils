import { getGreeting } from "../time.js";

test("Get the correct greeting", () => {
  expect(getGreeting(2)).toEqual("Buonanotte");
});

test("Get the correct greeting", () => {
  expect(getGreeting(6)).toEqual("Buongiorno");
});

test("Get the correct greeting", () => {
  expect(getGreeting(11)).toEqual("Buongiorno");
});

test("Get the correct greeting", () => {
  expect(getGreeting(13)).toEqual("Buongiorno");
});

test("Get the correct greeting", () => {
  expect(getGreeting(14)).toEqual("Buon pomeriggio");
});

test("Get the correct greeting", () => {
  expect(getGreeting(18)).toEqual("Buonasera");
});

test("Get the correct greeting", () => {
  expect(getGreeting(22)).toEqual("Buonanotte");
});
