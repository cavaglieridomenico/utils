import { expect, test } from "@jest/globals";

interface SpecialCharactersMap {
  [key: string]: string;
}

const specialCharactersMapWPPL: SpecialCharactersMap = {
  urzadzenia: "urządzenia",
  chlodnictwo: "chłodnictwo",
  lodowki: "lodówki",
  plyty_grzewcze: "płyty grzewcze",
  pralkosuszarki: "pralko-suszarki",
};

const specialCharactersMapBKDE: SpecialCharactersMap = {
  hausgeraete: "hausgeräte",
  waeschetrockner: "wäschetrockner",
  geschirrspueler: "geschirrspüler",
  "kuehlen_&_gefrieren": "kühlen & gefrieren",
};

interface NavigationItem {
  name: string;
  href: string;
}

const formatName = (name: string) => name.toLowerCase().replace(/ /g, "_");

const getNewNavigationList = (
  navigationLIst: NavigationItem[],
  specialCharactersMap: SpecialCharactersMap
): NavigationItem[] => {
  return navigationLIst?.map((navigationItem: NavigationItem) =>
    Object.keys(specialCharactersMap).includes(formatName(navigationItem?.name))
      ? {
          ...navigationItem,
          name: specialCharactersMap[formatName(navigationItem?.name)],
        }
      : navigationItem
  );
};

export const getListWithSpecialCharacters = (
  navigationLIst: NavigationItem[],
  language: string
): NavigationItem[] => {
  if (language !== "pl" && language !== "de") return navigationLIst;
  if (language === "pl")
    return getNewNavigationList(navigationLIst, specialCharactersMapWPPL);
  if (language === "de")
    return getNewNavigationList(navigationLIst, specialCharactersMapBKDE);
  return navigationLIst;
};

const navListCrash = [];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navListCrash, "pl")).toStrictEqual([]);
});

const navListCrash2 = undefined;

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navListCrash2, "pl")).toStrictEqual(
    undefined
  );
});

const navListCrash3 = null;

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navListCrash3, "pl")).toStrictEqual(
    undefined
  );
});

const navListCrash4 = [
  {
    name: "urzadzenia",
    href: "/urzadzenia",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "pranie",
    href: "/urzadzenia/pranie",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "Pralkosuszarki",
    href: "/urzadzenia/pranie/pralkosuszarki",
    __typename: "SearchBreadcrumb",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navListCrash4, undefined)).toStrictEqual([
    {
      name: "urzadzenia",
      href: "/urzadzenia",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "pranie",
      href: "/urzadzenia/pranie",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "Pralkosuszarki",
      href: "/urzadzenia/pranie/pralkosuszarki",
      __typename: "SearchBreadcrumb",
    },
  ]);
});

const navListCrash5 = [
  {
    name: "urzadzenia",
    href: "/urzadzenia",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "pranie",
    href: "/urzadzenia/pranie",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "Pralkosuszarki",
    href: "/urzadzenia/pranie/pralkosuszarki",
    __typename: "SearchBreadcrumb",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navListCrash5, null)).toStrictEqual([
    {
      name: "urzadzenia",
      href: "/urzadzenia",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "pranie",
      href: "/urzadzenia/pranie",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "Pralkosuszarki",
      href: "/urzadzenia/pranie/pralkosuszarki",
      __typename: "SearchBreadcrumb",
    },
  ]);
});

const navListCrash6 = [
  {
    name: "urzadzenia",
    href: "/urzadzenia",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "pranie",
    href: "/urzadzenia/pranie",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "Pralkosuszarki",
    href: "/urzadzenia/pranie/pralkosuszarki",
    __typename: "SearchBreadcrumb",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navListCrash6, "")).toStrictEqual([
    {
      name: "urzadzenia",
      href: "/urzadzenia",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "pranie",
      href: "/urzadzenia/pranie",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "Pralkosuszarki",
      href: "/urzadzenia/pranie/pralkosuszarki",
      __typename: "SearchBreadcrumb",
    },
  ]);
});

const navListWPPL = [
  {
    name: "urzadzenia",
    href: "/urzadzenia",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "pranie",
    href: "/urzadzenia/pranie",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "Pralkosuszarki",
    href: "/urzadzenia/pranie/pralkosuszarki",
    __typename: "SearchBreadcrumb",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navListWPPL, "pl")).toStrictEqual([
    {
      name: "urządzenia",
      href: "/urzadzenia",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "pranie",
      href: "/urzadzenia/pranie",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "pralko-suszarki",
      href: "/urzadzenia/pranie/pralkosuszarki",
      __typename: "SearchBreadcrumb",
    },
  ]);
});

const navList1 = [
  {
    name: "urzadzenia",
    href: "/urzadzenia",
  },
  {
    name: "pranie",
    href: "/urzadzenia/pranie",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navList1, "it")).toStrictEqual([
    {
      name: "urzadzenia",
      href: "/urzadzenia",
    },
    {
      name: "pranie",
      href: "/urzadzenia/pranie",
    },
  ]);
});

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navList1, "pl")).toStrictEqual([
    {
      name: "urządzenia",
      href: "/urzadzenia",
    },
    {
      name: "pranie",
      href: "/urzadzenia/pranie",
    },
  ]);
});

const navList2 = [
  {
    name: "urzadzenia",
    href: "/urzadzenia",
  },
  {
    name: "chlodnictwo",
    href: "/urzadzenia/chlodnictwo",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navList2, "pl")).toStrictEqual([
    {
      name: "urządzenia",
      href: "/urzadzenia",
    },
    {
      name: "chłodnictwo",
      href: "/urzadzenia/chlodnictwo",
    },
  ]);
});

const navList3 = [
  {
    name: "urzadzenia",
    href: "/urzadzenia",
  },
  {
    name: "Plyty Grzewcze",
    href: "/urzadzenia/chlodnictwo",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navList3, "pl")).toStrictEqual([
    {
      name: "urządzenia",
      href: "/urzadzenia",
    },
    {
      name: "płyty grzewcze",
      href: "/urzadzenia/chlodnictwo",
    },
  ]);
});

const navList4 = [
  {
    name: "hausgeraete",
    href: "/hausgeraete",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "waschen & trocknen",
    href: "/hausgeraete/waschen---trocknen",
    __typename: "SearchBreadcrumb",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navList3, "pl")).toStrictEqual([
    {
      name: "urządzenia",
      href: "/urzadzenia",
    },
    {
      name: "płyty grzewcze",
      href: "/urzadzenia/chlodnictwo",
    },
  ]);
});

const navList5 = [
  {
    id: 1,
    name: "hausgeraete",
    href: "/hausgeraete",
    __typename: "Category",
  },
  {
    id: 3,
    name: "waschen & trocknen",
    href: "/hausgeraete/waschen---trocknen",
    __typename: "Category",
  },
  {
    id: 14,
    name: "waeschetrockner",
    href: "/hausgeraete/waschen---trocknen/waeschetrockner",
    __typename: "Category",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navList5, "de")).toStrictEqual([
    {
      id: 1,
      name: "hausgeräte",
      href: "/hausgeraete",
      __typename: "Category",
    },
    {
      id: 3,
      name: "waschen & trocknen",
      href: "/hausgeraete/waschen---trocknen",
      __typename: "Category",
    },
    {
      id: 14,
      name: "wäschetrockner",
      href: "/hausgeraete/waschen---trocknen/waeschetrockner",
      __typename: "Category",
    },
  ]);
});

const navList6 = [
  {
    name: "hausgeraete",
    href: "/hausgeraete",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "geschirrspueler",
    href: "/hausgeraete/geschirrspueler",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "geschirrspueler",
    href: "/hausgeraete/geschirrspueler/geschirrspueler",
    __typename: "SearchBreadcrumb",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navList6, "de")).toStrictEqual([
    {
      name: "hausgeräte",
      href: "/hausgeraete",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "geschirrspüler",
      href: "/hausgeraete/geschirrspueler",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "geschirrspüler",
      href: "/hausgeraete/geschirrspueler/geschirrspueler",
      __typename: "SearchBreadcrumb",
    },
  ]);
});

const navList7 = [
  {
    name: "hausgeraete",
    href: "/hausgeraete",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "kuehlen & gefrieren",
    href: "/hausgeraete/kuehlen---gefrieren",
    __typename: "SearchBreadcrumb",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navList7, "de")).toStrictEqual([
    {
      name: "hausgeräte",
      href: "/hausgeraete",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "kühlen & gefrieren",
      href: "/hausgeraete/kuehlen---gefrieren",
      __typename: "SearchBreadcrumb",
    },
  ]);
});

const navList8 = [
  {
    id: 1,
    name: "hausgeraete",
    href: "/hausgeraete",
    __typename: "Category",
  },
  {
    id: 4,
    name: "kuehlen & gefrieren",
    href: "/hausgeraete/kuehlen---gefrieren",
    __typename: "Category",
  },
  {
    id: 18,
    name: "gefriergeraete",
    href: "/hausgeraete/kuehlen---gefrieren/gefriergeraete",
    __typename: "Category",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navList8, "de")).toStrictEqual([
    {
      id: 1,
      name: "hausgeräte",
      href: "/hausgeraete",
      __typename: "Category",
    },
    {
      id: 4,
      name: "kühlen & gefrieren",
      href: "/hausgeraete/kuehlen---gefrieren",
      __typename: "Category",
    },
    {
      id: 18,
      name: "gefriergeraete",
      href: "/hausgeraete/kuehlen---gefrieren/gefriergeraete",
      __typename: "Category",
    },
  ]);
});
