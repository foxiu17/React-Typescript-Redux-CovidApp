import React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from "enzyme";

import ChooseCountryPanel from "./ChooseCountryPanel";


describe('Test ChooseCountryPanel component', () => {
  describe('Render tests', () => {
    test('Render component without crashing', () => {
      const submitFunc= jest.fn();
      const handleChange = jest.fn();
      const component: ShallowWrapper = shallow(<ChooseCountryPanel countries={[]} handleChange={handleChange} submitFunc={submitFunc} currentValue='' />);

      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    })
  })
})