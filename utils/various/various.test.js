import { expect, test } from "@jest/globals";
import {
  images,
  altTagList,
  result,
  images2,
  altTagList2,
  altTagList3,
  result3,
} from "./various-utils";

const getImagesWithNewAltTag = (imageList, altList) => {
  if (imageList?.length !== altList?.length) return imageList;
  let newList = imageList?.map((image, index) => {
    return {
      ...image,
      imageText: altList[index].altProp,
    };
  });
  return newList;
};

test("New array of objects with new props starting from 2 array of objects", () => {
  expect(getImagesWithNewAltTag(images, altTagList)).toStrictEqual(result);
});

test("New array of objects with new props starting from 2 array of objects", () => {
  expect(getImagesWithNewAltTag(images2, altTagList2)).toStrictEqual(images2);
});

test("New array of objects with new props starting from 2 array of objects", () => {
  expect(getImagesWithNewAltTag(images2, altTagList2)).toStrictEqual(images2);
});

test("New array of objects with new props starting from 2 array of objects", () => {
  expect(getImagesWithNewAltTag(images, altTagList3)).toStrictEqual(result3);
});
