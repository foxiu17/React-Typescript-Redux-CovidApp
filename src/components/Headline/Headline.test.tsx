import React from "react";
import { shallow, render, mount } from "enzyme";

import Headline from './Headline';

import { Container, Grid, Title, Subtitle } from "./Headline.style";

describe('Headline component', () => {
  describe('Rendering Headline component', () => {
    test('Render Headline component', () => {
      const component = shallow(<Headline />);
      expect(component.exists()).toBe(true);
    });

    test('Render main elements', () => {
      const component = shallow(<Headline/>);
      expect(component.find(Container).length).toBe(1);
      expect(component.find(Container).children().length).toBe(1);
    });

    test('Render content', () => {
      const box = shallow(<Headline/>).find(Container).find(Grid).first();
      expect(box.children().length).toBe(2);
      const title = box.childAt(0);
      const subtitle = box.childAt(1);

      expect(title.find(Title).length).toBe(1);
      expect(subtitle.find(Subtitle).length).toBe(1);
    })
  });
});