import { expect, test } from "@jest/globals";

const getStatus = (value?: any) => {
  if (value) {
    return "exists";
  } else {
    return "does not exist";
  }
};

test("", () => {
  expect(getStatus([])).toBe("exists");
  expect(getStatus()).toBe("does not exist");
  expect(getStatus({})).toBe("exists");
});

const getStatus2 = (value?: any) => {
  return value ? "exists" : "does not exist";
};

test("", () => {
  expect(getStatus2([])).toBe("exists");
  expect(getStatus2()).toBe("does not exist");
  expect(getStatus2({})).toBe("exists");
});
