import React from 'react';
import SearchBar from '../../src/components/SearchBar';
import { shallow } from 'enzyme';

it('renders correct component when it mounts', () => {
  const wrapper = shallow(<SearchBar />);

  expect(wrapper.find('.search-input').length).toEqual(1);
});

it('should have a default state', () => {
  const wrapper = shallow(<SearchBar />);
  const searchState = wrapper.state();

  expect(searchState.input).toEqual('');
});

it('should let us edit state on change', () => {
  const wrapper = shallow(<SearchBar />);
  const result = 'suh';
  const searchState = wrapper.state();
  const searchInput = wrapper.find('.search-input');

  expect(searchState.input).toEqual('');

  searchInput.simulate('change', { target: { value: result } });

  expect(wrapper.state().input).toEqual(result);
});
