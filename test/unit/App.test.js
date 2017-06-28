import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import SchoolList from '../../src/components/SchoolList';
import SchoolDetail from '../../src/components/SchoolDetail';
import {mount, shallow } from 'enzyme';

it('renders correct components when it mounts', () => {
  const wrapper = shallow(<App/>)
  
  expect(wrapper.find('SchoolList').length).toEqual(1)
  expect(wrapper.find('SchoolDetail').length).toEqual(1)
});

it('should have a default state', () => {
  const wrapper = shallow(<App/>);
  const stateOfApp = wrapper.state();

  expect(stateOfApp.schools).toEqual({});
  expect(stateOfApp.selectedSchools).toEqual([]);
  expect(stateOfApp.schoolsArray).toEqual([]);
});

it.skip('should let us add to the state', () => {
  const wrapper = mount(<App/>)
  const stateOfApp = wrapper.state()

  expect(stateOfApp.schools).toEqual({})
  expect(stateOfApp.selectedSchools).toEqual([])

  // const school1 = { location: 'Denver' }
  // const school2 = { location: 'Colorado' }
  // const school3 = { location: 'Pueblo' }
  //
  // wrapper.instance().handleSelectSchool(school1)
});
