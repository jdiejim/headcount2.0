import React from 'react';
import School from '../../src/components/School';
import { shallow, mount } from 'enzyme';

it('renders correct component when it mounts', () => {
  const wrapper = shallow(<School school={{}} selectedSchools={[]} />);

  expect(wrapper.find('.school-card').length).toEqual(1);
});

it('should render the correct school', () => {
  const school = {
    data: { 2006: 0.1 },
    info: [{ data: 1 }],
    location: 'Hogwarts'
  };
  const wrapper = shallow(<School school={school} selectedSchools={[]} />);

  expect(wrapper.find('.school-title').props().children).toEqual('Hogwarts');
});

it('should run function when clicked', () => {
  const school = {
    data: { 2006: 0.1 },
    info: [{ data: 1 }],
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
