import React from 'react';

import TextPanel from "./TextPanel";

export default {
  component: TextPanel,
  title: "TextPanel"
};

export const withoutProps = () => <TextPanel />;

export const greenWithProps = () => <TextPanel color="#2ae2ce" title="Total death" count={1000} />;

export const blueWithProps = () => <TextPanel color="#2232ce" title="Total death" count={1000} />;

export const withNotAllProps = () => <TextPanel title="Test title Storybook" />;