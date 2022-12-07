import { expect, test } from "@jest/globals";

//Find appliance in dataLayer filterChainedDetails
const getRecipeAppliance = (filterChainedDetails: string) => {
  const dataLayerfilterChainedDetailsList: string[] =
    filterChainedDetails?.split("&filters ");

  const targetFilter = dataLayerfilterChainedDetailsList.find((item) =>
    item.includes("appliances=")
  );
  return targetFilter?.replace("filters ", "").replace("appliances=", "");
};

test("Get the recipe appliance", () => {
  expect(getRecipeAppliance("filters appliances=microonde")).toBe("microonde");
  expect(
    getRecipeAppliance(
      "filters appliances=microonde&filters dishes=primi e secondi&filters dishes=dolci"
    )
  ).toBe("microonde");
  expect(
    getRecipeAppliance(
      "filters dishes=primi e secondi&filters dishes=dolci&filters appliances=forno"
    )
  ).toBe("forno");
  expect(getRecipeAppliance("filters appliances=slower juiser")).toBe(
    "slower juiser"
  );
  expect(
    getRecipeAppliance(
      "filters appliances=slower juiser&filters dishes=estratti"
    )
  ).toBe("slower juiser");
  expect(
    getRecipeAppliance(
      "filters dishes=estratti&filters appliances=slower juiser"
    )
  ).toBe("slower juiser");
  expect(
    getRecipeAppliance(
      "filters dishes=primi e secondi&filters dishes=antipasti&filters appliances=forno"
    )
  ).toBe("forno");
  expect(
    getRecipeAppliance(
      "filters dishes=primi e secondi&filters dishes=antipasti&filters appliances=il mio forno"
    )
  ).toBe("il mio forno");
});
