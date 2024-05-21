import { expect, test } from "@jest/globals";

type HeightValue = number | undefined | null;
type DisplayValue =
  | "phone"
  | "tablet"
  | "desktop"
  | "unknown"
  | undefined
  | null;
type HeightValueProps = {
  phone: HeightValue;
  tablet: HeightValue;
  desktop: HeightValue;
};

const getHeightProps = (
  heightPhone: HeightValue,
  heightTablet: HeightValue,
  heightDesktop: HeightValue
): HeightValueProps => {
  return {
    phone: heightPhone,
    tablet: heightTablet,
    desktop: heightDesktop,
  };
};

const getHeightValue = (
  heightProps: HeightValueProps,
  display: DisplayValue
): string => {
  if (!!heightProps?.phone && display === "phone")
    return `${heightProps?.phone}px`;
  if (!!heightProps?.tablet && display === "tablet")
    return `${heightProps?.tablet}px`;
  if (!!heightProps?.desktop && display === "desktop")
    return `${heightProps?.desktop}px`;
  return "auto";
};

test("Get height result value", () => {
  expect(
    getHeightValue(getHeightProps(undefined, undefined, undefined), undefined)
  ).toEqual("auto");
});

test("Get height result value", () => {
  expect(
    getHeightValue(getHeightProps(18, undefined, undefined), undefined)
  ).toEqual("auto");
});

test("Get height result value", () => {
  expect(
    getHeightValue(getHeightProps(18, undefined, undefined), "desktop")
  ).toEqual("auto");
});

test("Get height result value", () => {
  expect(getHeightValue(getHeightProps(18, 22, undefined), "desktop")).toEqual(
    "auto"
  );
});

test("Get height result value", () => {
  expect(getHeightValue(getHeightProps(18, 22, 32), "desktop")).toEqual("32px");
});

test("Get height result value", () => {
  expect(getHeightValue(getHeightProps(18, 22, undefined), "tablet")).toEqual(
    "22px"
  );
});

test("Get height result value", () => {
  expect(getHeightValue(getHeightProps(18, 22, undefined), null)).toEqual(
    "auto"
  );
});

test("Get height result value", () => {
  expect(getHeightValue(getHeightProps(18, 22, 32), "phone")).toEqual("18px");
});
