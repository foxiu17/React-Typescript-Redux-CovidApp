import React from 'react';
import { shallow, mount, ReactWrapper, ShallowWrapper } from "enzyme";
import TextPanel from "./TextPanel";

describe('Test TextPanel component', () => {
  describe("Render tests", () => {
    test('Render component without crashing - without props', () => {
      const component: ShallowWrapper = shallow(<TextPanel />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });

    test('Render component without crashing - with props', () => {
      const component: ShallowWrapper = shallow(<TextPanel color="#2ae2ce" title="Total death" count={1000} />);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    });
  });
});