import React from 'react';
import ComparisonHeader from '../../src/components/ComparisonHeader';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import { shallow } from 'enzyme';

it('renders nothing when it does not have 2 selected schools', () => {
  const schools = new DistrictRepository(kinderData);
  const selectedSchools = []

  const wrapper = shallow(
    <ComparisonHeader schools={ schools } selectedSchools={ selectedSchools } />
  );

  const average = wrapper.find('.comp-avg-header');
  expect(average).toHaveLength(0);
});

it('renders an average when it has 2 selected schools', () => {
  const schools = new DistrictRepository(kinderData);
  const selectedSchools = [ schools.data['Colorado'], schools.data['ACADEMY 20'] ];
  const wrapper = shallow(
    <ComparisonHeader schools={ schools } selectedSchools={ selectedSchools } />
  );

  const average = wrapper.find('.comp-avg-header');
  expect(average).toHaveLength(1);
});
