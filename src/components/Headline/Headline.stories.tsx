import React from "react";

import Headline from "./Headline";

export default {
  component: Headline,
  title: "Headline"
};

export const withoutProps = () => <Headline />;

export const withProps = () => <Headline totalCount={1000} />;