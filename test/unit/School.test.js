import React from 'react';
import School from '../../src/components/School';
import { shallow } from 'enzyme';

it('renders correct component when it mounts', () => {
  const school = {
    data: { 2006: 0.1 },
    location: 'Hogwarts'
  };
  const wrapper = shallow(<School school={school} selectedSchools={[]} />);

  expect(wrapper.find('.school-card').length).toEqual(1);
});

it('should render the correct school', () => {
  const school = {
    data: { 2006: 0.1 },
    location: 'Hogwarts'
  };
  const wrapper = shallow(<School school={school} selectedSchools={[]} />);

  expect(wrapper.find('.school-title').props().children).toEqual('hogwarts');
});

it('should run function when clicked', () => {
  const school = {
    data: { 2006: 0.1 },
    location: 'Hogwarts'
  };
  const mockFn = jest.fn();
  const wrapper = shallow(<School school={school} selectedSchools={[]} handleSelectSchool={mockFn} />);
  const article = wrapper.find('.school-card');

  article.simulate('click');
  article.simulate('click');
  article.simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(3);
});

it('should calculate and render the average of all the data', () => {
  const result = 0.85;
  const school = {
    data: { 2006: 0.9, 2007: 0.8, 2008: 0.7, 2009: 1 },
    location: 'Hogwarts'
  };
  const wrapper = shallow(<School school={school} selectedSchools={[]} />);

  expect(wrapper.find('.school-average').props().children).toEqual(result);
});

it('should render red background color if the average of the data is less than or equal to 0.5', () => {
  const result = '#F0CECE';
  const school = {
    data: { 2006: 0.1, 2007: 0.2, 2008: 0.3, 2009: 0.4 },
    location: 'Hogwarts'
  };
  const wrapper = shallow(<School school={school} selectedSchools={[]} />);

  expect(wrapper.props().style.backgroundColor).toEqual(result);
});

it('should render green background color if the average of the data is greater than 0.5', () => {
  const result = '#D0EFE8';
  const school = {
    data: { 2006: 0.9, 2007: 0.8, 2008: 0.7, 2009: 1 },
    location: 'Hogwarts'
  };
  const wrapper = shallow(<School school={school} selectedSchools={[]} />);

  expect(wrapper.props().style.backgroundColor).toEqual(result);
});

it('should render school data table if the school is selected', () => {
  const school = {
    data: { 2006: 0.9, 2007: 0.8, 2008: 0.7, 2009: 1 },
    location: 'Hogwarts'
  };
  const wrapper = shallow(<School school={school} selectedSchools={[school]} />);

  expect(wrapper.find('SchoolDataTable').length).toEqual(1);
});
