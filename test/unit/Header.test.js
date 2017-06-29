import React from 'react';
import Header from '../../src/components/Header';
import { shallow } from 'enzyme';

it('renders correct component when it mounts', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find('.header').length).toEqual(1);
});

it('should have a menu button', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('button').length).toBe(1);
});

it('should display the correct title', () => {
    const wrapper = shallow(<Header headerTitle={'abc'} />);
    const expectedTitle = 'abc';
    const title = wrapper.find('.header-title').props().children;

    expect(title).toBe(expectedTitle);
});

it('triggers a handleLoadMenu', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Header handleLoadMenu={mockFn} />);
  const button = wrapper.find('button');

  button.simulate('click');

  expect(mockFn).toHaveBeenCalledTimes(1);
});
