import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import ComparisonDataTable from '../../src/components/ComparisonDataTable';
import { mount } from 'enzyme';

it('renders correct component when it mounts', () => {
  const wrapper = mount(<App/>)
  expect(wrapper.find('ComparisonDataTable').length).toEqual(1)
});
