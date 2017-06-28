import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import ComparisonDetail from '../../src/components/ComparisonDetail';
import { mount } from 'enzyme';

it('renders correct component when it mounts', () => {
  const wrapper = mount(<App/>)
  expect(wrapper.find('ComparisonDetail').length).toEqual(1)
});
