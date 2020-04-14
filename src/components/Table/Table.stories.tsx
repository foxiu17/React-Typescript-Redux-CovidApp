import React from "react";

import Table from "./Table";

import { countryArr } from "./Table.mock";

export default {
  component: Table,
  title: "Table"
};

// @ts-ignore
export const withData = () => <Table data={countryArr} />;