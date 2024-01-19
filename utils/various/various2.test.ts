import { expect, test } from "@jest/globals";

/*Array without duplicates - Start*/
const getLoadingValue = (
  shouldResize: boolean,
  fetchpriority: "high" | "low" | "auto"
) => {
  return shouldResize ? "lazy" : fetchpriority === "high" ? "eager" : "auto";
  //   if (shouldResize) {
  //     return "lazy";
  //   } else if (fetchpriority === "high") {
  //     return "eager";
  //   } else {
  //     return "auto";
  //   }
};

test("Loading value", () => {
  expect(getLoadingValue(true, "high")).toStrictEqual("lazy");
});

test("Loading value", () => {
  expect(getLoadingValue(false, "high")).toStrictEqual("eager");
});

test("Loading value", () => {
  expect(getLoadingValue(false, "auto")).toStrictEqual("auto");
});

test("Loading value", () => {
  expect(getLoadingValue(false, "low")).toStrictEqual("auto");
});

const getFetchPriority = (
  isMobileDevice: boolean,
  positionNumber: number | undefined
): "high" | "low" => {
  if (positionNumber) {
    return isMobileDevice
      ? positionNumber === 1
        ? "high"
        : "low"
      : positionNumber < 4
      ? "high"
      : "low";
  }

  return "low";
};

test("Fetch priority value", () => {
  expect(getFetchPriority(false, 1)).toStrictEqual("high");
});

test("Fetch priority value", () => {
  expect(getFetchPriority(false, 4)).toStrictEqual("low");
});

test("Fetch priority value", () => {
  expect(getFetchPriority(false, 0)).toStrictEqual("low");
});
