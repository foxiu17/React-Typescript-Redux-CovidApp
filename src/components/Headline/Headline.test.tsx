import React from "react";
import {shallow, mount, ReactWrapper, ShallowWrapper} from "enzyme";

import Headline from './Headline';

import { Container, Grid, Title, Subtitle } from "./Headline.style";

describe('Headline component', () => {
  describe('Render components', () => {
    test('Render Headline component', () => {
      const component: ShallowWrapper = shallow(<Headline />);
      expect(component.exists()).toBe(true);
    });

    test('Render main elements', () => {
      const component: ShallowWrapper = shallow(<Headline/>);
      expect(component.find(Container).length).toBe(1);
      expect(component.find(Container).children().length).toBe(1);
    });

    test('Render content', () => {
      const box: ShallowWrapper = shallow(<Headline/>).find(Container).find(Grid).first();
      const title: ShallowWrapper = box.childAt(0);
      const subtitle: ShallowWrapper = box.childAt(1);
      expect(box.children().length).toBe(2);

      expect(title.find(Title).length).toBe(1);
      expect(subtitle.find(Subtitle).length).toBe(1);
    });
  });

  describe('Receive props', () => {
    test('Receive correct totalCount prop', () => {
      const prop: number = 1000;
      const component: ReactWrapper = mount(<Headline totalCount={prop} />);
      expect(component.prop('totalCount')).toBe(prop);
    });
  })
});