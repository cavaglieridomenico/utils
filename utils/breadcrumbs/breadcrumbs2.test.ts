import { expect, test } from "@jest/globals";

const specialCharactersMapWPPL: BreadcrumbMapping[] = [
  {
    breadcrumbLabel: "urzadzenia",
    breadcrumbLabelWithSpecialCharacters: "urządzenia",
  },
  {
    breadcrumbLabel: "chlodnictwo",
    breadcrumbLabelWithSpecialCharacters: "chłodnictwo",
  },
  {
    breadcrumbLabel: "lodowki",
    breadcrumbLabelWithSpecialCharacters: "lodówki",
  },
  {
    breadcrumbLabel: "plyty grzewcze",
    breadcrumbLabelWithSpecialCharacters: "płyty grzewcze",
  },
  {
    breadcrumbLabel: "pralkosuszarki",
    breadcrumbLabelWithSpecialCharacters: "pralko-suszarki",
  },
  {
    breadcrumbLabel: "zamrazarki",
    breadcrumbLabelWithSpecialCharacters: "zamrażarki",
  },
  {
    breadcrumbLabel: "kuchnie wolnostojace",
    breadcrumbLabelWithSpecialCharacters: "kuchnie wolnostojące",
  },
];

const specialCharactersMapBKDE: BreadcrumbMapping[] = [
  {
    breadcrumbLabel: "hausgeraete",
    breadcrumbLabelWithSpecialCharacters: "hausgeräte",
  },
  {
    breadcrumbLabel: "waeschetrockner",
    breadcrumbLabelWithSpecialCharacters: "wäschetrockner",
  },
  {
    breadcrumbLabel: "geschirrspueler",
    breadcrumbLabelWithSpecialCharacters: "geschirrspüler",
  },
  {
    breadcrumbLabel: "kuehlen & gefrieren",
    breadcrumbLabelWithSpecialCharacters: "kühlen & gefrieren",
  },
  {
    breadcrumbLabel: "herde & backoefen",
    breadcrumbLabelWithSpecialCharacters: "herde & backöfen",
  },
  {
    breadcrumbLabel: "gefriergeraete",
    breadcrumbLabelWithSpecialCharacters: "gefriergeräte",
  },
  {
    breadcrumbLabel: "kuehl-gefrierkombinationen",
    breadcrumbLabelWithSpecialCharacters: "kühl-gefrierkombinationen",
  },
  {
    breadcrumbLabel: "kuehlschraenke",
    breadcrumbLabelWithSpecialCharacters: "kühlschränke",
  },
  {
    breadcrumbLabel: "zubehoer",
    breadcrumbLabelWithSpecialCharacters: "zubehör",
  },
  {
    breadcrumbLabel: "kuehlschraenke & kuehl-gefrierkombinationen",
    breadcrumbLabelWithSpecialCharacters:
      "kühlschränke & kühl-gefrierkombinationen",
  },
];

interface BreadcrumbMapping {
  breadcrumbLabel: string;
  breadcrumbLabelWithSpecialCharacters: string;
}

interface NavigationItem {
  name: string;
  href: string;
  __typename: string;
}

const replaceHref = (isReplaceHref: boolean, hrefValue: string) =>
  isReplaceHref ? hrefValue.replace(/---/g, "-") : hrefValue;

export const getListWithSpecialCharacters = (
  navigationList: NavigationItem[],
  specialCharactersMap: BreadcrumbMapping[],
  isReplaceHref: boolean
): NavigationItem[] => {
  return navigationList?.map((navigationItem: NavigationItem) => {
    const categoryMapping = specialCharactersMap?.find(
      (mapping) =>
        mapping?.breadcrumbLabel?.toLowerCase() ===
        navigationItem?.name?.toLocaleLowerCase()
    );

    return {
      ...navigationItem,
      name: categoryMapping
        ? categoryMapping.breadcrumbLabelWithSpecialCharacters
        : navigationItem.name,
      href: replaceHref(isReplaceHref, navigationItem.href),
    };
  });
};

const navList1: NavigationItem[] = [
  {
    name: "hausgeraete",
    href: "/hausgeraete",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "kochen & backen",
    href: "/hausgeraete/kochen---backen",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "herde & backoefen",
    href: "/hausgeraete/kochen---backen/herde---backoefen",
    __typename: "SearchBreadcrumb",
  },
];

test("Return new mapped navigation list", () => {
  expect(
    getListWithSpecialCharacters(navList1, specialCharactersMapBKDE, true)
  ).toStrictEqual([
    {
      name: "hausgeräte",
      href: "/hausgeraete",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "kochen & backen",
      href: "/hausgeraete/kochen-backen",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "herde & backöfen",
      href: "/hausgeraete/kochen-backen/herde-backoefen",
      __typename: "SearchBreadcrumb",
    },
  ]);
});

const navList2: NavigationItem[] = [
  {
    name: "hausgeraete",
    href: "/hausgeraete",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "kochen & backen",
    href: "/hausgeraete/kochen---backen",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "herde & backoefen",
    href: "/hausgeraete/kochen---backen/herde---backoefen",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "Backofen",
    href: "/hausgeraete/kochen---backen/herde---backoefen/backofen?map=category-1,category-2,category-3,geratetyp-",
    __typename: "SearchBreadcrumb",
  },
];

test("Return new mapped navigation list", () => {
  expect(
    getListWithSpecialCharacters(navList2, specialCharactersMapBKDE, true)
  ).toStrictEqual([
    {
      name: "hausgeräte",
      href: "/hausgeraete",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "kochen & backen",
      href: "/hausgeraete/kochen-backen",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "herde & backöfen",
      href: "/hausgeraete/kochen-backen/herde-backoefen",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "Backofen",
      href: "/hausgeraete/kochen-backen/herde-backoefen/backofen?map=category-1,category-2,category-3,geratetyp-",
      __typename: "SearchBreadcrumb",
    },
  ]);
});

const navList3: NavigationItem[] = [
  {
    name: "hausgeraete",
    href: "/hausgeraete",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "kochen & backen",
    href: "/hausgeraete/kochen---backen",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "herde & backoefen",
    href: "/hausgeraete/kochen---backen/herde---backoefen",
    __typename: "SearchBreadcrumb",
  },
  {
    name: "Backofen",
    href: "/hausgeraete/kochen---backen/herde---backoefen/backofen?map=category-1,category-2,category-3,geratetyp-",
    __typename: "SearchBreadcrumb",
  },
];

test("Return new mapped navigation list", () => {
  expect(getListWithSpecialCharacters(navList3, [], true)).toStrictEqual([
    {
      name: "hausgeraete",
      href: "/hausgeraete",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "kochen & backen",
      href: "/hausgeraete/kochen-backen",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "herde & backoefen",
      href: "/hausgeraete/kochen-backen/herde-backoefen",
      __typename: "SearchBreadcrumb",
    },
    {
      name: "Backofen",
      href: "/hausgeraete/kochen-backen/herde-backoefen/backofen?map=category-1,category-2,category-3,geratetyp-",
      __typename: "SearchBreadcrumb",
    },
  ]);
});
