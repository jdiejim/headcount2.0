import React from 'react';
import LoadMenu from '../../src/components/LoadMenu';
import { shallow } from 'enzyme';

it('renders correct component when it mounts', () => {
  const wrapper = shallow(<LoadMenu />);

  expect(wrapper.find('aside').length).toEqual(1);
});

it('renders correct class name if isHidden changes', () => {
  const hiddenWrapper = shallow(<LoadMenu isHidden={true} />);
  const wrapper = shallow(<LoadMenu isHidden={false} />);

  expect(hiddenWrapper.find('.menu-show').length).toEqual(0);
  expect(wrapper.find('.menu-show').length).toEqual(1);
});

it('should have a close button', () => {
    const wrapper = shallow(<LoadMenu />);

    expect(wrapper.find('.hide-menu').length).toBe(1);
});

it('triggers a handleLoadMenu', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<LoadMenu handleLoadMenu={mockFn} />);
  const button = wrapper.find('.hide-menu');

  button.simulate('click');

  expect(mockFn).toHaveBeenCalledTimes(1);
});
