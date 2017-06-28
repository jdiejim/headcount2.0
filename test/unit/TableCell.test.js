import React from 'react';
import TableCell from '../../src/components/TableCell';
import { shallow } from 'enzyme';

it('renders correct component when it mounts', () => {
  const wrapper = shallow(<TableCell data={0.9} year={'2006'} />);

  expect(wrapper.find('.table-cell').length).toEqual(1);
});

it('should render the correct year and data', () => {
  const wrapper = shallow(<TableCell data={0.9} year={'2006'} />);

  expect(wrapper.find('.year-cell').props().children).toEqual('2006');
  expect(wrapper.find('.data-cell p').props().children).toEqual(0.9);
});

it('should render red background color if the data is less than or equal to 0.5', () => {
  const result = '#6FD1BB';
  const wrapper = shallow(<TableCell data={0.9} year={'2006'} />);

  expect(wrapper.find('.data-cell p').props().style.backgroundColor).toEqual(result);
});

it('should render red background color if the data is less than or equal to 0.5', () => {
  const result = '#E58B8B';
  const wrapper = shallow(<TableCell data={0.3} year={'2006'} />);

  expect(wrapper.find('.data-cell p').props().style.backgroundColor).toEqual(result);
});
