import { expect, test } from "@jest/globals";

type People = {
  firstName: string;
  lastName: string;
  DOB: string;
  department: string;
  salary: string | number;
};

export const people: People[] = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1995",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

export const people2: People[] = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
];

export const people3: People[] = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
];

export const people4: People[] = [
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
];

export const getSalaryAverage = (peopleList: People[]): number =>
  peopleList.reduce((acc, person) => acc + +person.salary, 0) /
  peopleList.length;

const getOlderThanPeople = (peopleList: People[], ageLimit: number) =>
  peopleList.filter(
    (person) =>
      new Date(
        person.DOB.split("/")
          .map((item, index) => (index !== 2 ? item : +item + ageLimit))
          .join("/")
      ).getTime() <= new Date().getTime()
  );

const getOlderThanPeople2 = (peopleList: People[], ageLimit: number) =>
  peopleList.filter(
    (person) =>
      new Date().getFullYear() - new Date(person.DOB).getFullYear() > ageLimit
  );

type FullNameList = { firstName: string; lastName: string };

const getFullName = (peopleList: People[]): FullNameList[] =>
  peopleList.reduce<FullNameList[]>(
    (acc, person) => [
      ...acc,
      { firstName: person.firstName, lastName: person.lastName },
    ],
    []
  );

const getFullName2 = (peopleList: People[]): FullNameList[] =>
  peopleList.map((person) => ({
    firstName: person.firstName,
    lastName: person.lastName,
  }));

const getFullName3 = (peopleList: People[]): string[] =>
  peopleList.map((person) => `${person.firstName} ${person.lastName}`);

type PeopleV2 = People & {
  fullName: string;
};

const getFullName4 = (peopleList: People[]): PeopleV2[] =>
  peopleList.map((person) => ({
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  }));

const getOrderedPeople = (peopleList: People[]): People[] =>
  peopleList
    .slice()
    .sort((a, b) => new Date(b.DOB).getTime() - new Date(a.DOB).getTime());

const getDepartmentPartecipantNumber = (peopleList: People[]) =>
  peopleList.reduce((acc, person) => {
    acc[person.department] = acc[person.department] + 1 || 1;
    return acc;
  }, {});

//Count the quantity
const people5: People[] = [
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
];

const getDepartmentPartecipantNumber2 = (peopleList: People[]) =>
  peopleList.reduce(
    (acc, person) => ({
      ...acc,
      [person.department]: acc[person.department] + 1 || 1,
    }),
    {}
  );

test("Count the quantity", () => {
  expect(getDepartmentPartecipantNumber2(people5)).toStrictEqual({
    Sales: 1,
    Development: 1,
    Marketing: 1,
  });
});

//Count the quantity
const pets = ["dog", "cat", "dog", "goldfish", "cat"];

const countPets = (petList: string[]) =>
  petList.reduce((acc, pet) => ({ ...acc, [pet]: acc[pet] + 1 || 1 }), {});

test("Return number of pets", () => {
  expect(countPets(pets)).toStrictEqual({
    dog: 2,
    cat: 2,
    goldfish: 1,
  });
});

test("Return number of department participants", () => {
  expect(getSalaryAverage(people2)).toStrictEqual(40000);
});

test("Return the salary average", () => {
  expect(getOlderThanPeople(people3, 30)).toStrictEqual([
    {
      firstName: "Sam",
      lastName: "Hughes",
      DOB: "07/07/1978",
      department: "Development",
      salary: "45000",
    },
    {
      firstName: "Terri",
      lastName: "Bishop",
      DOB: "02/04/1989",
      department: "Development",
      salary: "35000",
    },
  ]);
});

test("Return people over 30 years old", () => {
  expect(getOlderThanPeople(people, 30)).toStrictEqual([
    {
      firstName: "Sam",
      lastName: "Hughes",
      DOB: "07/07/1978",
      department: "Development",
      salary: "45000",
    },
    {
      firstName: "Terri",
      lastName: "Bishop",
      DOB: "02/04/1989",
      department: "Development",
      salary: "35000",
    },
    {
      firstName: "Jar",
      lastName: "Burke",
      DOB: "11/01/1985",
      department: "Marketing",
      salary: "38000",
    },
    {
      firstName: "Julio",
      lastName: "Miller",
      DOB: "12/07/1991",
      department: "Sales",
      salary: "40000",
    },
    {
      firstName: "Chester",
      lastName: "Flores",
      DOB: "03/15/1988",
      department: "Development",
      salary: "41000",
    },
    {
      firstName: "Madison",
      lastName: "Marshall",
      DOB: "09/22/1980",
      department: "Sales",
      salary: "32000",
    },
    {
      firstName: "Ava",
      lastName: "Pena",
      DOB: "11/02/1986",
      department: "Development",
      salary: "38000",
    },
    {
      firstName: "Charles",
      lastName: "Campbell",
      DOB: "09/04/1977",
      department: "Sales",
      salary: "42000",
    },
    {
      firstName: "Tiffany",
      lastName: "Lambert",
      DOB: "05/11/1990",
      department: "Development",
      salary: "34000",
    },
    {
      firstName: "Antonio",
      lastName: "Gonzalez",
      DOB: "03/24/1985",
      department: "Office Management",
      salary: "49000",
    },
    {
      firstName: "Aaron",
      lastName: "Garrett",
      DOB: "09/04/1985",
      department: "Development",
      salary: "39000",
    },
  ]);
});

test("Return people over 30 years old", () => {
  expect(getOlderThanPeople2(people, 30)).toStrictEqual([
    {
      firstName: "Sam",
      lastName: "Hughes",
      DOB: "07/07/1978",
      department: "Development",
      salary: "45000",
    },
    {
      firstName: "Terri",
      lastName: "Bishop",
      DOB: "02/04/1989",
      department: "Development",
      salary: "35000",
    },
    {
      firstName: "Jar",
      lastName: "Burke",
      DOB: "11/01/1985",
      department: "Marketing",
      salary: "38000",
    },
    {
      firstName: "Julio",
      lastName: "Miller",
      DOB: "12/07/1991",
      department: "Sales",
      salary: "40000",
    },
    {
      firstName: "Chester",
      lastName: "Flores",
      DOB: "03/15/1988",
      department: "Development",
      salary: "41000",
    },
    {
      firstName: "Madison",
      lastName: "Marshall",
      DOB: "09/22/1980",
      department: "Sales",
      salary: "32000",
    },
    {
      firstName: "Ava",
      lastName: "Pena",
      DOB: "11/02/1986",
      department: "Development",
      salary: "38000",
    },
    {
      firstName: "Charles",
      lastName: "Campbell",
      DOB: "09/04/1977",
      department: "Sales",
      salary: "42000",
    },
    {
      firstName: "Tiffany",
      lastName: "Lambert",
      DOB: "05/11/1990",
      department: "Development",
      salary: "34000",
    },
    {
      firstName: "Antonio",
      lastName: "Gonzalez",
      DOB: "03/24/1985",
      department: "Office Management",
      salary: "49000",
    },
    {
      firstName: "Aaron",
      lastName: "Garrett",
      DOB: "09/04/1985",
      department: "Development",
      salary: "39000",
    },
  ]);
});

test("Return the full name list", () => {
  expect(getFullName(people3)).toStrictEqual([
    {
      firstName: "Sam",
      lastName: "Hughes",
    },
    {
      firstName: "Terri",
      lastName: "Bishop",
    },
  ]);
});

test("Return the full name list", () => {
  expect(getFullName2(people3)).toStrictEqual([
    {
      firstName: "Sam",
      lastName: "Hughes",
    },
    {
      firstName: "Terri",
      lastName: "Bishop",
    },
  ]);
});

test("Return the full name list", () => {
  expect(getFullName2(people4)).toStrictEqual([
    {
      firstName: "Jar",
      lastName: "Burke",
    },
    {
      firstName: "Julio",
      lastName: "Miller",
    },
    {
      firstName: "Chester",
      lastName: "Flores",
    },
  ]);
});

test("Return the full name list", () => {
  expect(getFullName3(people4)).toStrictEqual([
    "Jar Burke",
    "Julio Miller",
    "Chester Flores",
  ]);
});

test("Return the full name list", () => {
  expect(getFullName4(people3)).toStrictEqual([
    {
      firstName: "Sam",
      lastName: "Hughes",
      DOB: "07/07/1978",
      department: "Development",
      salary: "45000",
      fullName: "Sam Hughes",
    },
    {
      firstName: "Terri",
      lastName: "Bishop",
      DOB: "02/04/1989",
      department: "Development",
      salary: "35000",
      fullName: "Terri Bishop",
    },
  ]);
});

test("Return ordered people list from youngest to oldest", () => {
  expect(getOrderedPeople(people3)).toStrictEqual([
    {
      firstName: "Terri",
      lastName: "Bishop",
      DOB: "02/04/1989",
      department: "Development",
      salary: "35000",
    },
    {
      firstName: "Sam",
      lastName: "Hughes",
      DOB: "07/07/1978",
      department: "Development",
      salary: "45000",
    },
  ]);
});

test("Return ordered people list from youngest to oldest", () => {
  expect(getOrderedPeople(people4)).toStrictEqual([
    {
      firstName: "Julio",
      lastName: "Miller",
      DOB: "12/07/1991",
      department: "Sales",
      salary: "40000",
    },
    {
      firstName: "Chester",
      lastName: "Flores",
      DOB: "03/15/1988",
      department: "Development",
      salary: "41000",
    },
    {
      firstName: "Jar",
      lastName: "Burke",
      DOB: "11/01/1985",
      department: "Marketing",
      salary: "38000",
    },
  ]);
});

test("Count the quantity", () => {
  expect(getDepartmentPartecipantNumber(people4)).toStrictEqual({
    Sales: 1,
    Development: 1,
    Marketing: 1,
  });
});

test("Count the quantity", () => {
  expect(getDepartmentPartecipantNumber(people)).toStrictEqual({
    Sales: 3,
    Development: 6,
    Marketing: 2,
    "Office Management": 1,
  });
});

test("Count the quantity", () => {
  expect(getDepartmentPartecipantNumber2(people)).toStrictEqual({
    Sales: 3,
    Development: 6,
    Marketing: 2,
    "Office Management": 1,
  });
});

test("Count the quantity", () => {
  expect(getDepartmentPartecipantNumber2(people4)).toStrictEqual({
    Sales: 1,
    Development: 1,
    Marketing: 1,
  });
});
