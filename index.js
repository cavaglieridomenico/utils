import { getSelectionSort } from "./utils/sorting/sorting.js";

console.log(getSelectionSort([2, 3, 1]));

const specialCharactersMapWPPL = {
  urzadzenia: "urządzenia",
  chlodnictwo: "chłodnictwo",
  lodowki: "lodówki",
  plyty: "płyty",
  Pralkosuszarki: "pralko-suszarki",
};

const getNewNavigationList = (navigationLIst, specialCharactersMap) => {
  return navigationLIst?.map((navigationItem) =>
    Object.keys(specialCharactersMap).includes(formatName(navigationItem?.name))
      ? {
          ...navigationItem,
          name: specialCharactersMap[formatName(navigationItem?.name)],
        }
      : navigationItem
  );
};

const formatName = (name) => name.toLowerCase().replaceAll(" ", "_");

console.log(
  getNewNavigationList(
    [
      {
        name: "urządzenia",
        href: "/urzadzenia",
      },
      {
        name: "płyty grzewcze",
        href: "/urzadzenia/chlodnictwo",
      },
    ],
    specialCharactersMapWPPL
  )
);
