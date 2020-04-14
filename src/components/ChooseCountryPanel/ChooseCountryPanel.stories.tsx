import React from "react";

import ChooseCountryPanel from "./ChooseCountryPanel";

import { MockCountries } from "./ChooseCountryPanel.mock";

export default {
  component: ChooseCountryPanel,
  title: "ChooseCountryPanel"
};

// @ts-ignore
export const initial = () => <ChooseCountryPanel countries={MockCountries}  currentValue="" />;