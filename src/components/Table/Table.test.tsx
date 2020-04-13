import React from "react";
import {shallow, mount, ReactWrapper, ShallowWrapper} from "enzyme";

import { countryArr } from "./Table.mock";
import Table from "./Table";

describe('Test Table component', () => {
  describe('Render tests', () => {
    test('Render component without crashing', () => {
      // @ts-ignore
      const component: ShallowWrapper = shallow(<Table data={countryArr}/>);
      expect(component.exists()).toBe(true);
      expect(component).toMatchSnapshot();
    })
  })
})