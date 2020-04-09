import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from "enzyme";

import App from './App';
import Headline from '../../components/Headline';
import TextPanel from '../../components/TextPanel';

import { Container, Grid } from "./App.style";

describe('Rendering App component - ', () => {
  test('Initial App render', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });

  test('Render Container styled-component in App component', () => {
    const component = shallow(<App />);
    expect(component.find(Container).length).toBe(1);
  });

  test('Render Container child component (Grid) with Grid children', () => {
    const component = shallow(<App/>);
    const container = component.find(Container);
    const box = container.find(Grid).first();
    expect(box.length).toBe(1);
    expect(box.children().length).toBe(3);
  });

  test('Render Headline component without crashing', () => {
    const component = shallow(<App/>);
    const container = component.find(Container);
    const box = container.find(Grid).first();
    const item = box.childAt(0);
    expect(item.find(Headline).length).toBe(1);
  });

  test('Render TextPanel components', () => {
    const box = shallow(<App />).find(Container).find(Grid).first();
    const item = box.childAt(1);
    const item2 = box.childAt(2);
    expect(item.find(TextPanel).length).toBe(1);
    expect(item2.find(TextPanel).length).toBe(1);
  });

  test('Send correct prop to Headline component', () => {
    const box = shallow(<App />).find(Container).find(Grid).first();
    const item = box.childAt(0).find(Headline);

    expect(item.prop('totalCount')).toBe(2123);
  });

  test('Send correct prop to TextPanel component - first', () => {
    const box = shallow(<App />).find(Container).find(Grid).first();
    const textPanel = box.childAt(1).find(TextPanel);
    expect(textPanel.prop('color')).toBe('#2ae2ce');
    expect(textPanel.prop('title')).toBe('Total death');
    expect(textPanel.prop('count')).toBe(1331331);
  });

  test('Send correct prop to TextPanel component - second', () => {
    const box = shallow(<App />).find(Container).find(Grid).first();
    const textPanel = box.childAt(2).find(TextPanel);
    expect(textPanel.prop('color')).toBe('#2ae2ce');
    expect(textPanel.prop('title')).toBe('Total overcame');
    expect(textPanel.prop('count')).toBe(13311);
  })
});
