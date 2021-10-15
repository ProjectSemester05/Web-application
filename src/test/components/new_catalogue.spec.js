import React from 'react';
import { mount } from 'enzyme';
import NewCatalogueCard from "../../components/cards/new_catalogue"

test('hello world', () => {
  const wrapper = mount(<NewCatalogueCard/>);
  expect(wrapper.text()).toMatch('New Catalogue!');
});