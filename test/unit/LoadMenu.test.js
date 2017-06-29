import React from 'react';
import LoadMenu from '../../src/components/LoadMenu';
import { shallow } from 'enzyme';

it('renders correct component when it mounts', () => {
  const wrapper = shallow(<LoadMenu dbKeys={{}} />);

  expect(wrapper.find('aside').length).toEqual(1);
});

it('renders correct class name if isHidden changes', () => {
  const hiddenWrapper = shallow(<LoadMenu dbKeys={{}} isHidden={true} />);
  const wrapper = shallow(<LoadMenu dbKeys={{}} isHidden={false} />);

  expect(hiddenWrapper.find('.menu-show').length).toEqual(0);
  expect(wrapper.find('.menu-show').length).toEqual(1);
});

it('should have a close button', () => {
    const wrapper = shallow(<LoadMenu dbKeys={{}} />);

    expect(wrapper.find('.hide-menu').length).toBe(1);
});

it('triggers a handleLoadMenu function', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<LoadMenu dbKeys={{}} handleLoadMenu={mockFn} />);
  const button = wrapper.find('.hide-menu');

  button.simulate('click');

  expect(mockFn).toHaveBeenCalledTimes(1);
});

it('should have the correct amount of tabs passed', () => {
  const tabs = {
    thirdGrade: {
      name: '3rd Grade Tests',
      tab: '3rd Grade Tests',
    },
    eighthGrade: {
      name: '8th Grade Tests',
      tab: '8th Grade Tests',
    },
    aveRaceMath: {
      name: 'Average Race Ethnicity Math Scores',
      tab: 'Average Race Math',
    }
  }
  const wrapper = shallow(<LoadMenu dbKeys={tabs} />);

  expect(wrapper.find('.db-btn').length).toEqual(3);
});

it('renders correct class name for selected tab', () => {
  const tabs = {
    thirdGrade: {
      name: '3rd Grade Tests',
      tab: '3rd Grade Tests',
    },
    eighthGrade: {
      name: '8th Grade Tests',
      tab: '8th Grade Tests',
    }
  };
  const wrapper = shallow(<LoadMenu dbKeys={tabs} selectedKey={'thirdGrade'} />);
  const selectedTab = wrapper.find('.selected');
  const tabBtns = wrapper.find('.db-btn');

  expect(selectedTab.length).toEqual(1);
  expect(tabBtns.length).toEqual(2);
});

it('triggers a handleLoadData function', () => {
  const tabs = {
    thirdGrade: {
      name: '3rd Grade Tests',
      tab: '3rd Grade Tests',
    }
  };
  const key = 'thirdGrade';
  const name = '3rd Grade Tests';
  const mockFn = jest.fn();
  const wrapper = shallow(<LoadMenu dbKeys={tabs} handleLoadData={mockFn} />);
  const tab = wrapper.find('.db-btn')

  tab.simulate('click');

  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith(key, name);
});
