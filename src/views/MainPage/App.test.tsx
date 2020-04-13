import React from 'react';
import { shallow, mount, ReactWrapper, ShallowWrapper } from "enzyme";

import { StoreProvider } from "../../Context/Store";

import App from './App';
import Headline from '../../components/Headline';
import TextPanel from '../../components/TextPanel';

import { Container, Grid } from "./App.style";

describe('Rendering App component - ', () => {
  test('Initial App render', () => {
    const component: ReactWrapper = mount(<StoreProvider><App /></StoreProvider>);
    const container: ReactWrapper = component.find(Container);
    expect(component.exists()).toBe(true);
    expect(container.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
