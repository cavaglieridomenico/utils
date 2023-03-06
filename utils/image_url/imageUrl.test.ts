import { expect, test } from "@jest/globals";

const url =
  "https://hotpointit.vtexassets.com/arquivos/ids/164754/pi-fe1cd3d6-a36b-4128-8196-7089bf7f391d.jpg?v=638098983773830000";

const getResizeImageUrl = (
  imageUrl: any,
  width: string | number = 800,
  height: string | number = "auto"
) => {
  const imageUrlUpToId = imageUrl?.match(/.+ids\/(\d+)/);
  if (!imageUrlUpToId) return imageUrl;
  return `${imageUrlUpToId?.[0]}-${width}-${height}?width=${width}&height=${height}&aspect=true`;
};

test("Get image url", () => {
  expect(getResizeImageUrl(url)).toBe(
    "https://hotpointit.vtexassets.com/arquivos/ids/164754-800-auto?width=800&height=auto&aspect=true"
  );
});

test("Get image url", () => {
  expect(getResizeImageUrl("")).toBe("");
});

test("Get image url", () => {
  expect(getResizeImageUrl(undefined)).toBe(undefined);
});

test("Get image url", () => {
  expect(getResizeImageUrl(null)).toBe(null);
});

test("Get image url", () => {
  expect(getResizeImageUrl(url, 250)).toBe(
    "https://hotpointit.vtexassets.com/arquivos/ids/164754-250-auto?width=250&height=auto&aspect=true"
  );
});

test("Get image url", () => {
  expect(getResizeImageUrl(url, 100, 100)).toBe(
    "https://hotpointit.vtexassets.com/arquivos/ids/164754-100-100?width=100&height=100&aspect=true"
  );
});

const width = 300;
const height = undefined;

test("Get image url", () => {
  expect(getResizeImageUrl(url, width, height)).toBe(
    "https://hotpointit.vtexassets.com/arquivos/ids/164754-300-auto?width=300&height=auto&aspect=true"
  );
});

const width2 = undefined;
const height2 = undefined;

test("Get image url", () => {
  expect(getResizeImageUrl(url, width2, height2)).toBe(
    "https://hotpointit.vtexassets.com/arquivos/ids/164754-800-auto?width=800&height=auto&aspect=true"
  );
});

const width3 = null;
const height3 = null;

test("Get image url", () => {
  expect(getResizeImageUrl(url, width3, height3)).toBe(
    "https://hotpointit.vtexassets.com/arquivos/ids/164754-null-null?width=null&height=null&aspect=true"
  );
});
