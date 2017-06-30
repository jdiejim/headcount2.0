import React from 'react';
import ComparisonTableCell from '../../src/components/ComparisonTableCell';
import { shallow } from 'enzyme';

it('should render a year and a value if only 1 data point is passed', () => {
  const dom = shallow(<ComparisonTableCell data={[0.407]} year={'2004'} />)

  expect(dom.find('.year-cell').text()).toEqual('2004');
  expect(dom.find('.data-cell')).toHaveLength(1);
  expect(dom.find('.data-cell').text()).toEqual('0.407')
})

it('should render a year and two values if 2 data points are passed', () => {
  const dom = shallow(<ComparisonTableCell data={[0.407, 0.515]} year={'2004'} />)

  expect(dom.find('.year-cell').text()).toEqual('2004');
  expect(dom.find('.data-cell')).toHaveLength(2);
})

it('should render a bg color of green if the data value is > than 0.5', () => {
  const result = '#6FD1BB';
  const dom = shallow(<ComparisonTableCell data={[0.515]} year={'2004'} />);

  expect(dom.find('.data-cell p').props().style.backgroundColor).toEqual(result);
})

it('should render a bg color of red if the data value is < than 0.5', () => {
  const result = '#E58B8B';
  const dom = shallow(<ComparisonTableCell data={[0.407]} year={'2004'} />);

  expect(dom.find('.data-cell p').props().style.backgroundColor).toEqual(result);
})
