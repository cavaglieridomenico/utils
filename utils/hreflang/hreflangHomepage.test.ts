import { expect, test } from "@jest/globals";

type HreflangItem = {
  link: string;
  country: string;
};

type Falsy = false | 0 | "" | null | undefined;

type Account = string | Falsy;

type Language = string | Falsy;

const whirlpoolData: HreflangItem[] = [
  {
    link: "https://www.whirlpool.pl/",
    country: "pl-PL",
  },
  {
    link: "https://www.whirlpool.fr/",
    country: "fr-FR",
  },
  {
    link: "https://www.whirlpool.it/",
    country: "it-IT",
  },
  {
    link: "https://www.whirlpool.eu/",
    country: "x-default",
  },
  {
    link: "https://www.whirlpool.at/",
    country: "de-AT",
  },
  {
    link: "https://www.whirlpool.bg/",
    country: "bg-BG",
  },
  {
    link: "https://www.whirlpool.hr/",
    country: "hr-HR",
  },
  {
    link: "https://www.whirlpool.dk/",
    country: "da-DK",
  },
  {
    link: "https://www.whirlpool.ee/",
    country: "et-EE",
  },
  {
    link: "https://www.whirlpool.fi/",
    country: "fi-FI",
  },
  {
    link: "https://www.whirlpool.de/",
    country: "de-DE",
  },
  {
    link: "https://www.whirlpool.gr/",
    country: "el-GR",
  },
  {
    link: "https://www.whirlpool.ie/",
    country: "en-IE",
  },
  {
    link: "https://www.whirlpool.lv/",
    country: "lv-LV",
  },
  {
    link: "https://www.whirlpool.lt/",
    country: "lt-LT",
  },
  {
    link: "https://www.whirlpool.rs/",
    country: "sr-RS",
  },
  {
    link: "https://www.whirlpool.si/",
    country: "sl-SI",
  },
  {
    link: "https://www.whirlpool.be/fr_BE",
    country: "fr-BE",
  },
  {
    link: "https://www.whirlpool.be/nl_BE",
    country: "nl-BE",
  },
  {
    link: "https://www.whirlpool.cz/",
    country: "cs-CZ",
  },
  {
    link: "https://www.whirlpool.hu/",
    country: "hu-HU",
  },
  {
    link: "https://www.whirlpool.nl/",
    country: "nl-NL",
  },
  {
    link: "https://www.whirlpool.pt/",
    country: "pt-PT",
  },
  {
    link: "https://www.whirlpool.ro/",
    country: "ro-RO",
  },
  {
    link: "https://www.whirlpool.sk/",
    country: "sk-SK",
  },
  {
    link: "https://www.whirlpool.es/",
    country: "es-ES",
  },
  {
    link: "https://www.whirlpool.com.eg/en_EG",
    country: "en-EG",
  },
  {
    link: "https://www.whirlpool.com.eg/ar_EG",
    country: "ar-EG",
  },
  {
    link: "https://www.whirlpool.sa/en_SA",
    country: "en-SA",
  },
  {
    link: "https://www.whirlpool.sa/ar_SA",
    country: "ar-SA",
  },
  {
    link: "https://www.whirlpool.co.za/",
    country: "en-ZA",
  },
  {
    link: "https://www.whirlpool.ma/",
    country: "fr-MA",
  },
  {
    link: "https://www.whirlpool.se/",
    country: "sv-SE",
  },
  {
    link: "https://www.whirlpool.ae/en_AE",
    country: "en-AE",
  },
  {
    link: "https://www.whirlpool.com.ua/",
    country: "uk-UA",
  },
];

const hotpointData: HreflangItem[] = [
  {
    link: "https://www.hotpoint.it/",
    country: "it-IT",
  },
  {
    link: "https://www.hotpoint.bg/",
    country: "bg-BG",
  },
  {
    link: "https://www.hotpoint.ee/",
    country: "et-EE",
  },
  {
    link: "https://www.hotpoint.fr/",
    country: "fr-FR",
  },
  {
    link: "https://www.hotpoint.co.uk/",
    country: "en-GB",
  },
  {
    link: "https://www.hotpoint.ie/",
    country: "en-IE",
  },
  {
    link: "https://www.hotpoint.lt/",
    country: "lt-LT",
  },
  {
    link: "https://www.hotpoint.es/",
    country: "es-ES",
  },
  {
    link: "https://www.hotpoint.lv/",
    country: "lv-LV",
  },
  {
    link: "https://www.hotpoint.pl/",
    country: "pl-PL",
  },
  {
    link: "https://www.hotpoint.pt/",
    country: "pt-PT",
  },
  {
    link: "https://www.hotpoint.ro/",
    country: "ro-RO",
  },
  {
    link: "https://www.hotpoint.eu/",
    country: "x-default",
  },
];

const bauknechtdeData: HreflangItem[] = [
  {
    link: "https://www.bauknecht.de/",
    country: "de-DE",
  },
  {
    link: "https://www.bauknecht.at/",
    country: "de-AT",
  },
  {
    link: "https://www.bauknecht.be/fr_BE",
    country: "fr-BE",
  },
  {
    link: "https://www.bauknecht.be/nl_BE",
    country: "nl-BE",
  },
  {
    link: "https://www.bauknecht.dk/",
    country: "da-DK",
  },
  {
    link: "https://www.bauknecht.nl/",
    country: "nl-NL",
  },
  {
    link: "https://www.bauknecht.ch/de_CH",
    country: "de-CH",
  },
  {
    link: "https://www.bauknecht.ch/fr_CH",
    country: "fr-CH",
  },
  {
    link: "https://www.bauknecht.ch/de_CH",
    country: "de-CH",
  },
  {
    link: "https://www.bauknecht.lu/",
    country: "fr-LU",
  },
  {
    link: "https://www.bauknecht.eu/",
    country: "x-default",
  },
  {
    link: "https://www.bauknecht.no/",
    country: "no-NO",
  },
  {
    link: "https://www.bauknecht.se/",
    country: "sv-SE",
  },
];

const getHreflangItems = (
  account: Account,
  locale: Language
): HreflangItem[] | undefined => {
  if (getHreflangData(account)?.length === 0) return undefined;
  let firstHreflangItem = getFirstHreflangItem(account, locale);
  if (
    !firstHreflangItem ||
    getHreflangData(account)?.indexOf(firstHreflangItem) === 0
  )
    return getHreflangData(account);

  return [
    firstHreflangItem,
    ...getHreflangData(account).filter(
      (hreflangItem: HreflangItem) => hreflangItem !== firstHreflangItem
    ),
  ];
};

const getFirstHreflangItem = (
  account: Account,
  locale: Language
): HreflangItem | undefined => {
  if (!locale) return undefined;
  return getHreflangData(account)?.find(
    (hreflangItem: HreflangItem) => hreflangItem.country === locale
  );
};

const getHreflangData = (account: Account): HreflangItem[] => {
  switch (account) {
    case "plwhirlpool":
      return whirlpoolData;
    case "frwhirlpool":
      return whirlpoolData;
    case "itwhirlpool":
      return whirlpoolData;
    case "bauknechtde":
      return bauknechtdeData;
    case "hotpointit":
      return hotpointData;
    case "hotpointuk":
      return hotpointData;
    default:
      return [];
  }
};

test("Return hreflang item list - WP PL", () => {
  expect(getHreflangItems("plwhirlpool", "pl-PL")).toStrictEqual([
    {
      link: "https://www.whirlpool.pl/",
      country: "pl-PL",
    },
    {
      link: "https://www.whirlpool.fr/",
      country: "fr-FR",
    },
    {
      link: "https://www.whirlpool.it/",
      country: "it-IT",
    },
    {
      link: "https://www.whirlpool.eu/",
      country: "x-default",
    },
    {
      link: "https://www.whirlpool.at/",
      country: "de-AT",
    },
    {
      link: "https://www.whirlpool.bg/",
      country: "bg-BG",
    },
    {
      link: "https://www.whirlpool.hr/",
      country: "hr-HR",
    },
    {
      link: "https://www.whirlpool.dk/",
      country: "da-DK",
    },
    {
      link: "https://www.whirlpool.ee/",
      country: "et-EE",
    },
    {
      link: "https://www.whirlpool.fi/",
      country: "fi-FI",
    },
    {
      link: "https://www.whirlpool.de/",
      country: "de-DE",
    },
    {
      link: "https://www.whirlpool.gr/",
      country: "el-GR",
    },
    {
      link: "https://www.whirlpool.ie/",
      country: "en-IE",
    },
    {
      link: "https://www.whirlpool.lv/",
      country: "lv-LV",
    },
    {
      link: "https://www.whirlpool.lt/",
      country: "lt-LT",
    },
    {
      link: "https://www.whirlpool.rs/",
      country: "sr-RS",
    },
    {
      link: "https://www.whirlpool.si/",
      country: "sl-SI",
    },
    {
      link: "https://www.whirlpool.be/fr_BE",
      country: "fr-BE",
    },
    {
      link: "https://www.whirlpool.be/nl_BE",
      country: "nl-BE",
    },
    {
      link: "https://www.whirlpool.cz/",
      country: "cs-CZ",
    },
    {
      link: "https://www.whirlpool.hu/",
      country: "hu-HU",
    },
    {
      link: "https://www.whirlpool.nl/",
      country: "nl-NL",
    },
    {
      link: "https://www.whirlpool.pt/",
      country: "pt-PT",
    },
    {
      link: "https://www.whirlpool.ro/",
      country: "ro-RO",
    },
    {
      link: "https://www.whirlpool.sk/",
      country: "sk-SK",
    },
    {
      link: "https://www.whirlpool.es/",
      country: "es-ES",
    },
    {
      link: "https://www.whirlpool.com.eg/en_EG",
      country: "en-EG",
    },
    {
      link: "https://www.whirlpool.com.eg/ar_EG",
      country: "ar-EG",
    },
    {
      link: "https://www.whirlpool.sa/en_SA",
      country: "en-SA",
    },
    {
      link: "https://www.whirlpool.sa/ar_SA",
      country: "ar-SA",
    },
    {
      link: "https://www.whirlpool.co.za/",
      country: "en-ZA",
    },
    {
      link: "https://www.whirlpool.ma/",
      country: "fr-MA",
    },
    {
      link: "https://www.whirlpool.se/",
      country: "sv-SE",
    },
    {
      link: "https://www.whirlpool.ae/en_AE",
      country: "en-AE",
    },
    {
      link: "https://www.whirlpool.com.ua/",
      country: "uk-UA",
    },
  ]);
});

test("Return hreflang item list - WP FR", () => {
  expect(getHreflangItems("frwhirlpool", "fr-FR")).toStrictEqual([
    {
      link: "https://www.whirlpool.fr/",
      country: "fr-FR",
    },
    {
      link: "https://www.whirlpool.pl/",
      country: "pl-PL",
    },
    {
      link: "https://www.whirlpool.it/",
      country: "it-IT",
    },
    {
      link: "https://www.whirlpool.eu/",
      country: "x-default",
    },
    {
      link: "https://www.whirlpool.at/",
      country: "de-AT",
    },
    {
      link: "https://www.whirlpool.bg/",
      country: "bg-BG",
    },
    {
      link: "https://www.whirlpool.hr/",
      country: "hr-HR",
    },
    {
      link: "https://www.whirlpool.dk/",
      country: "da-DK",
    },
    {
      link: "https://www.whirlpool.ee/",
      country: "et-EE",
    },
    {
      link: "https://www.whirlpool.fi/",
      country: "fi-FI",
    },
    {
      link: "https://www.whirlpool.de/",
      country: "de-DE",
    },
    {
      link: "https://www.whirlpool.gr/",
      country: "el-GR",
    },
    {
      link: "https://www.whirlpool.ie/",
      country: "en-IE",
    },
    {
      link: "https://www.whirlpool.lv/",
      country: "lv-LV",
    },
    {
      link: "https://www.whirlpool.lt/",
      country: "lt-LT",
    },
    {
      link: "https://www.whirlpool.rs/",
      country: "sr-RS",
    },
    {
      link: "https://www.whirlpool.si/",
      country: "sl-SI",
    },
    {
      link: "https://www.whirlpool.be/fr_BE",
      country: "fr-BE",
    },
    {
      link: "https://www.whirlpool.be/nl_BE",
      country: "nl-BE",
    },
    {
      link: "https://www.whirlpool.cz/",
      country: "cs-CZ",
    },
    {
      link: "https://www.whirlpool.hu/",
      country: "hu-HU",
    },
    {
      link: "https://www.whirlpool.nl/",
      country: "nl-NL",
    },
    {
      link: "https://www.whirlpool.pt/",
      country: "pt-PT",
    },
    {
      link: "https://www.whirlpool.ro/",
      country: "ro-RO",
    },
    {
      link: "https://www.whirlpool.sk/",
      country: "sk-SK",
    },
    {
      link: "https://www.whirlpool.es/",
      country: "es-ES",
    },
    {
      link: "https://www.whirlpool.com.eg/en_EG",
      country: "en-EG",
    },
    {
      link: "https://www.whirlpool.com.eg/ar_EG",
      country: "ar-EG",
    },
    {
      link: "https://www.whirlpool.sa/en_SA",
      country: "en-SA",
    },
    {
      link: "https://www.whirlpool.sa/ar_SA",
      country: "ar-SA",
    },
    {
      link: "https://www.whirlpool.co.za/",
      country: "en-ZA",
    },
    {
      link: "https://www.whirlpool.ma/",
      country: "fr-MA",
    },
    {
      link: "https://www.whirlpool.se/",
      country: "sv-SE",
    },
    {
      link: "https://www.whirlpool.ae/en_AE",
      country: "en-AE",
    },
    {
      link: "https://www.whirlpool.com.ua/",
      country: "uk-UA",
    },
  ]);
});

test("Return hreflang item list - WP IT", () => {
  expect(getHreflangItems("itwhirlpool", "it-IT")).toStrictEqual([
    {
      link: "https://www.whirlpool.it/",
      country: "it-IT",
    },
    {
      link: "https://www.whirlpool.pl/",
      country: "pl-PL",
    },
    {
      link: "https://www.whirlpool.fr/",
      country: "fr-FR",
    },
    {
      link: "https://www.whirlpool.eu/",
      country: "x-default",
    },
    {
      link: "https://www.whirlpool.at/",
      country: "de-AT",
    },
    {
      link: "https://www.whirlpool.bg/",
      country: "bg-BG",
    },
    {
      link: "https://www.whirlpool.hr/",
      country: "hr-HR",
    },
    {
      link: "https://www.whirlpool.dk/",
      country: "da-DK",
    },
    {
      link: "https://www.whirlpool.ee/",
      country: "et-EE",
    },
    {
      link: "https://www.whirlpool.fi/",
      country: "fi-FI",
    },
    {
      link: "https://www.whirlpool.de/",
      country: "de-DE",
    },
    {
      link: "https://www.whirlpool.gr/",
      country: "el-GR",
    },
    {
      link: "https://www.whirlpool.ie/",
      country: "en-IE",
    },
    {
      link: "https://www.whirlpool.lv/",
      country: "lv-LV",
    },
    {
      link: "https://www.whirlpool.lt/",
      country: "lt-LT",
    },
    {
      link: "https://www.whirlpool.rs/",
      country: "sr-RS",
    },
    {
      link: "https://www.whirlpool.si/",
      country: "sl-SI",
    },
    {
      link: "https://www.whirlpool.be/fr_BE",
      country: "fr-BE",
    },
    {
      link: "https://www.whirlpool.be/nl_BE",
      country: "nl-BE",
    },
    {
      link: "https://www.whirlpool.cz/",
      country: "cs-CZ",
    },
    {
      link: "https://www.whirlpool.hu/",
      country: "hu-HU",
    },
    {
      link: "https://www.whirlpool.nl/",
      country: "nl-NL",
    },
    {
      link: "https://www.whirlpool.pt/",
      country: "pt-PT",
    },
    {
      link: "https://www.whirlpool.ro/",
      country: "ro-RO",
    },
    {
      link: "https://www.whirlpool.sk/",
      country: "sk-SK",
    },
    {
      link: "https://www.whirlpool.es/",
      country: "es-ES",
    },
    {
      link: "https://www.whirlpool.com.eg/en_EG",
      country: "en-EG",
    },
    {
      link: "https://www.whirlpool.com.eg/ar_EG",
      country: "ar-EG",
    },
    {
      link: "https://www.whirlpool.sa/en_SA",
      country: "en-SA",
    },
    {
      link: "https://www.whirlpool.sa/ar_SA",
      country: "ar-SA",
    },
    {
      link: "https://www.whirlpool.co.za/",
      country: "en-ZA",
    },
    {
      link: "https://www.whirlpool.ma/",
      country: "fr-MA",
    },
    {
      link: "https://www.whirlpool.se/",
      country: "sv-SE",
    },
    {
      link: "https://www.whirlpool.ae/en_AE",
      country: "en-AE",
    },
    {
      link: "https://www.whirlpool.com.ua/",
      country: "uk-UA",
    },
  ]);
});

test("Return hreflang item list - HP IT", () => {
  expect(getHreflangItems("hotpointit", "it-IT")).toStrictEqual([
    {
      link: "https://www.hotpoint.it/",
      country: "it-IT",
    },
    {
      link: "https://www.hotpoint.bg/",
      country: "bg-BG",
    },
    {
      link: "https://www.hotpoint.ee/",
      country: "et-EE",
    },
    {
      link: "https://www.hotpoint.fr/",
      country: "fr-FR",
    },
    {
      link: "https://www.hotpoint.co.uk/",
      country: "en-GB",
    },
    {
      link: "https://www.hotpoint.ie/",
      country: "en-IE",
    },
    {
      link: "https://www.hotpoint.lt/",
      country: "lt-LT",
    },
    {
      link: "https://www.hotpoint.es/",
      country: "es-ES",
    },
    {
      link: "https://www.hotpoint.lv/",
      country: "lv-LV",
    },
    {
      link: "https://www.hotpoint.pl/",
      country: "pl-PL",
    },
    {
      link: "https://www.hotpoint.pt/",
      country: "pt-PT",
    },
    {
      link: "https://www.hotpoint.ro/",
      country: "ro-RO",
    },
    {
      link: "https://www.hotpoint.eu/",
      country: "x-default",
    },
  ]);
});

test("Return hreflang item list - HP IT", () => {
  expect(getHreflangItems("hotpointuk", "en-GB")).toStrictEqual([
    {
      link: "https://www.hotpoint.co.uk/",
      country: "en-GB",
    },
    {
      link: "https://www.hotpoint.it/",
      country: "it-IT",
    },
    {
      link: "https://www.hotpoint.bg/",
      country: "bg-BG",
    },
    {
      link: "https://www.hotpoint.ee/",
      country: "et-EE",
    },
    {
      link: "https://www.hotpoint.fr/",
      country: "fr-FR",
    },
    {
      link: "https://www.hotpoint.ie/",
      country: "en-IE",
    },
    {
      link: "https://www.hotpoint.lt/",
      country: "lt-LT",
    },
    {
      link: "https://www.hotpoint.es/",
      country: "es-ES",
    },
    {
      link: "https://www.hotpoint.lv/",
      country: "lv-LV",
    },
    {
      link: "https://www.hotpoint.pl/",
      country: "pl-PL",
    },
    {
      link: "https://www.hotpoint.pt/",
      country: "pt-PT",
    },
    {
      link: "https://www.hotpoint.ro/",
      country: "ro-RO",
    },
    {
      link: "https://www.hotpoint.eu/",
      country: "x-default",
    },
  ]);
});

test("Return hreflang item list - BK DE", () => {
  expect(getHreflangItems("bauknechtde", "de-DE")).toStrictEqual([
    {
      link: "https://www.bauknecht.de/",
      country: "de-DE",
    },
    {
      link: "https://www.bauknecht.at/",
      country: "de-AT",
    },
    {
      link: "https://www.bauknecht.be/fr_BE",
      country: "fr-BE",
    },
    {
      link: "https://www.bauknecht.be/nl_BE",
      country: "nl-BE",
    },
    {
      link: "https://www.bauknecht.dk/",
      country: "da-DK",
    },
    {
      link: "https://www.bauknecht.nl/",
      country: "nl-NL",
    },
    {
      link: "https://www.bauknecht.ch/de_CH",
      country: "de-CH",
    },
    {
      link: "https://www.bauknecht.ch/fr_CH",
      country: "fr-CH",
    },
    {
      link: "https://www.bauknecht.ch/de_CH",
      country: "de-CH",
    },
    {
      link: "https://www.bauknecht.lu/",
      country: "fr-LU",
    },
    {
      link: "https://www.bauknecht.eu/",
      country: "x-default",
    },
    {
      link: "https://www.bauknecht.no/",
      country: "no-NO",
    },
    {
      link: "https://www.bauknecht.se/",
      country: "sv-SE",
    },
  ]);
});

test("Return hreflang item list - CC DE", () => {
  expect(getHreflangItems("deccwhirlpool", "de-DE")).toStrictEqual(undefined);
});

test("Return hreflang item list", () => {
  expect(getHreflangItems(undefined, "de-DE")).toStrictEqual(undefined);
});

test("Return hreflang item list", () => {
  expect(getHreflangItems("ccwhirlpoolde", undefined)).toStrictEqual(undefined);
});

test("Return hreflang item list", () => {
  expect(getHreflangItems(undefined, undefined)).toStrictEqual(undefined);
});

test("Return hreflang item list", () => {
  expect(getHreflangItems(null, "it-IT")).toStrictEqual(undefined);
});

test("Return hreflang item list", () => {
  expect(getHreflangItems(null, null)).toStrictEqual(undefined);
});

test("Return hreflang item list", () => {
  expect(getHreflangItems("ccwhirlpoolde", null)).toStrictEqual(undefined);
});

test("Return hreflang item list: correct account, wrong locale", () => {
  expect(getHreflangItems("plwhirlpool", undefined)).toStrictEqual([
    {
      link: "https://www.whirlpool.pl/",
      country: "pl-PL",
    },
    {
      link: "https://www.whirlpool.fr/",
      country: "fr-FR",
    },
    {
      link: "https://www.whirlpool.it/",
      country: "it-IT",
    },
    {
      link: "https://www.whirlpool.eu/",
      country: "x-default",
    },
    {
      link: "https://www.whirlpool.at/",
      country: "de-AT",
    },
    {
      link: "https://www.whirlpool.bg/",
      country: "bg-BG",
    },
    {
      link: "https://www.whirlpool.hr/",
      country: "hr-HR",
    },
    {
      link: "https://www.whirlpool.dk/",
      country: "da-DK",
    },
    {
      link: "https://www.whirlpool.ee/",
      country: "et-EE",
    },
    {
      link: "https://www.whirlpool.fi/",
      country: "fi-FI",
    },
    {
      link: "https://www.whirlpool.de/",
      country: "de-DE",
    },
    {
      link: "https://www.whirlpool.gr/",
      country: "el-GR",
    },
    {
      link: "https://www.whirlpool.ie/",
      country: "en-IE",
    },
    {
      link: "https://www.whirlpool.lv/",
      country: "lv-LV",
    },
    {
      link: "https://www.whirlpool.lt/",
      country: "lt-LT",
    },
    {
      link: "https://www.whirlpool.rs/",
      country: "sr-RS",
    },
    {
      link: "https://www.whirlpool.si/",
      country: "sl-SI",
    },
    {
      link: "https://www.whirlpool.be/fr_BE",
      country: "fr-BE",
    },
    {
      link: "https://www.whirlpool.be/nl_BE",
      country: "nl-BE",
    },
    {
      link: "https://www.whirlpool.cz/",
      country: "cs-CZ",
    },
    {
      link: "https://www.whirlpool.hu/",
      country: "hu-HU",
    },
    {
      link: "https://www.whirlpool.nl/",
      country: "nl-NL",
    },
    {
      link: "https://www.whirlpool.pt/",
      country: "pt-PT",
    },
    {
      link: "https://www.whirlpool.ro/",
      country: "ro-RO",
    },
    {
      link: "https://www.whirlpool.sk/",
      country: "sk-SK",
    },
    {
      link: "https://www.whirlpool.es/",
      country: "es-ES",
    },
    {
      link: "https://www.whirlpool.com.eg/en_EG",
      country: "en-EG",
    },
    {
      link: "https://www.whirlpool.com.eg/ar_EG",
      country: "ar-EG",
    },
    {
      link: "https://www.whirlpool.sa/en_SA",
      country: "en-SA",
    },
    {
      link: "https://www.whirlpool.sa/ar_SA",
      country: "ar-SA",
    },
    {
      link: "https://www.whirlpool.co.za/",
      country: "en-ZA",
    },
    {
      link: "https://www.whirlpool.ma/",
      country: "fr-MA",
    },
    {
      link: "https://www.whirlpool.se/",
      country: "sv-SE",
    },
    {
      link: "https://www.whirlpool.ae/en_AE",
      country: "en-AE",
    },
    {
      link: "https://www.whirlpool.com.ua/",
      country: "uk-UA",
    },
  ]);
});

test("Return hreflang item list: correct account, wrong locale", () => {
  expect(getHreflangItems("frwhirlpool", undefined)).toStrictEqual([
    {
      link: "https://www.whirlpool.pl/",
      country: "pl-PL",
    },
    {
      link: "https://www.whirlpool.fr/",
      country: "fr-FR",
    },
    {
      link: "https://www.whirlpool.it/",
      country: "it-IT",
    },
    {
      link: "https://www.whirlpool.eu/",
      country: "x-default",
    },
    {
      link: "https://www.whirlpool.at/",
      country: "de-AT",
    },
    {
      link: "https://www.whirlpool.bg/",
      country: "bg-BG",
    },
    {
      link: "https://www.whirlpool.hr/",
      country: "hr-HR",
    },
    {
      link: "https://www.whirlpool.dk/",
      country: "da-DK",
    },
    {
      link: "https://www.whirlpool.ee/",
      country: "et-EE",
    },
    {
      link: "https://www.whirlpool.fi/",
      country: "fi-FI",
    },
    {
      link: "https://www.whirlpool.de/",
      country: "de-DE",
    },
    {
      link: "https://www.whirlpool.gr/",
      country: "el-GR",
    },
    {
      link: "https://www.whirlpool.ie/",
      country: "en-IE",
    },
    {
      link: "https://www.whirlpool.lv/",
      country: "lv-LV",
    },
    {
      link: "https://www.whirlpool.lt/",
      country: "lt-LT",
    },
    {
      link: "https://www.whirlpool.rs/",
      country: "sr-RS",
    },
    {
      link: "https://www.whirlpool.si/",
      country: "sl-SI",
    },
    {
      link: "https://www.whirlpool.be/fr_BE",
      country: "fr-BE",
    },
    {
      link: "https://www.whirlpool.be/nl_BE",
      country: "nl-BE",
    },
    {
      link: "https://www.whirlpool.cz/",
      country: "cs-CZ",
    },
    {
      link: "https://www.whirlpool.hu/",
      country: "hu-HU",
    },
    {
      link: "https://www.whirlpool.nl/",
      country: "nl-NL",
    },
    {
      link: "https://www.whirlpool.pt/",
      country: "pt-PT",
    },
    {
      link: "https://www.whirlpool.ro/",
      country: "ro-RO",
    },
    {
      link: "https://www.whirlpool.sk/",
      country: "sk-SK",
    },
    {
      link: "https://www.whirlpool.es/",
      country: "es-ES",
    },
    {
      link: "https://www.whirlpool.com.eg/en_EG",
      country: "en-EG",
    },
    {
      link: "https://www.whirlpool.com.eg/ar_EG",
      country: "ar-EG",
    },
    {
      link: "https://www.whirlpool.sa/en_SA",
      country: "en-SA",
    },
    {
      link: "https://www.whirlpool.sa/ar_SA",
      country: "ar-SA",
    },
    {
      link: "https://www.whirlpool.co.za/",
      country: "en-ZA",
    },
    {
      link: "https://www.whirlpool.ma/",
      country: "fr-MA",
    },
    {
      link: "https://www.whirlpool.se/",
      country: "sv-SE",
    },
    {
      link: "https://www.whirlpool.ae/en_AE",
      country: "en-AE",
    },
    {
      link: "https://www.whirlpool.com.ua/",
      country: "uk-UA",
    },
  ]);
});

test("Return hreflang item list: correct account, wrong locale", () => {
  expect(getHreflangItems("itwhirlpool", undefined)).toStrictEqual([
    {
      link: "https://www.whirlpool.pl/",
      country: "pl-PL",
    },
    {
      link: "https://www.whirlpool.fr/",
      country: "fr-FR",
    },
    {
      link: "https://www.whirlpool.it/",
      country: "it-IT",
    },
    {
      link: "https://www.whirlpool.eu/",
      country: "x-default",
    },
    {
      link: "https://www.whirlpool.at/",
      country: "de-AT",
    },
    {
      link: "https://www.whirlpool.bg/",
      country: "bg-BG",
    },
    {
      link: "https://www.whirlpool.hr/",
      country: "hr-HR",
    },
    {
      link: "https://www.whirlpool.dk/",
      country: "da-DK",
    },
    {
      link: "https://www.whirlpool.ee/",
      country: "et-EE",
    },
    {
      link: "https://www.whirlpool.fi/",
      country: "fi-FI",
    },
    {
      link: "https://www.whirlpool.de/",
      country: "de-DE",
    },
    {
      link: "https://www.whirlpool.gr/",
      country: "el-GR",
    },
    {
      link: "https://www.whirlpool.ie/",
      country: "en-IE",
    },
    {
      link: "https://www.whirlpool.lv/",
      country: "lv-LV",
    },
    {
      link: "https://www.whirlpool.lt/",
      country: "lt-LT",
    },
    {
      link: "https://www.whirlpool.rs/",
      country: "sr-RS",
    },
    {
      link: "https://www.whirlpool.si/",
      country: "sl-SI",
    },
    {
      link: "https://www.whirlpool.be/fr_BE",
      country: "fr-BE",
    },
    {
      link: "https://www.whirlpool.be/nl_BE",
      country: "nl-BE",
    },
    {
      link: "https://www.whirlpool.cz/",
      country: "cs-CZ",
    },
    {
      link: "https://www.whirlpool.hu/",
      country: "hu-HU",
    },
    {
      link: "https://www.whirlpool.nl/",
      country: "nl-NL",
    },
    {
      link: "https://www.whirlpool.pt/",
      country: "pt-PT",
    },
    {
      link: "https://www.whirlpool.ro/",
      country: "ro-RO",
    },
    {
      link: "https://www.whirlpool.sk/",
      country: "sk-SK",
    },
    {
      link: "https://www.whirlpool.es/",
      country: "es-ES",
    },
    {
      link: "https://www.whirlpool.com.eg/en_EG",
      country: "en-EG",
    },
    {
      link: "https://www.whirlpool.com.eg/ar_EG",
      country: "ar-EG",
    },
    {
      link: "https://www.whirlpool.sa/en_SA",
      country: "en-SA",
    },
    {
      link: "https://www.whirlpool.sa/ar_SA",
      country: "ar-SA",
    },
    {
      link: "https://www.whirlpool.co.za/",
      country: "en-ZA",
    },
    {
      link: "https://www.whirlpool.ma/",
      country: "fr-MA",
    },
    {
      link: "https://www.whirlpool.se/",
      country: "sv-SE",
    },
    {
      link: "https://www.whirlpool.ae/en_AE",
      country: "en-AE",
    },
    {
      link: "https://www.whirlpool.com.ua/",
      country: "uk-UA",
    },
  ]);
});
