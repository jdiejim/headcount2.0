import React from 'react';
import SchoolDataTable from '../../src/components/SchoolDataTable';
import { shallow } from 'enzyme';

it('renders correct component when it mounts', () => {
  const wrapper = shallow(<SchoolDataTable data={{}} />);

  expect(wrapper.find('.school-table').length).toEqual(1);
});

it('should render the correct amount of table cells', () => {
  const mockData = {
    2006: 0.9,
    2007: 0.8,
    2008: 0.7,
    2009: 1
  };
  const wrapper = shallow(<SchoolDataTable data={mockData} />);

  expect(wrapper.find('TableCell').length).toEqual(4);
});

it('should pass the correct props to table cell', () => {
  const mockData = {
    2006: 0.9,
    2007: 0.8,
    2008: 0.7,
    2009: 1
  };
  const wrapper = shallow(<SchoolDataTable data={mockData} />);
  const { data, year } = wrapper.find('TableCell').get(2).props;

  expect(data).toEqual(0.7);
  expect(year).toEqual('2008');
});
