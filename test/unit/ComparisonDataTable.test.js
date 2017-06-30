import React from 'react';
import ComparisonHeader from '../../src/components/ComparisonHeader';
import ComparisonDataTable from '../../src/components/ComparisonDataTable';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import { shallow } from 'enzyme';

it('should render nothing if there are no schools selected', () => {
  const schools = new DistrictRepository(kinderData);
  const selectedSchools = []

  const wrapper = shallow(
    <ComparisonDataTable schools={ schools } selectedSchools={ selectedSchools }/>
  );

  const field = wrapper.find('comparison-table');

  expect(field).toHaveLength(0);
});

it('should render a header and table cell component if at least one school is selected', () => {
  const schools = new DistrictRepository(kinderData);
  const selectedSchools = [ schools.data['Colorado'] ];

  const wrapper = shallow(
    <ComparisonDataTable schools={ schools } selectedSchools={ selectedSchools }/>
  );

  const header = wrapper.find('ComparisonHeader');
  const tableCell = wrapper.find('ComparisonTableCell');

  expect(header).toHaveLength(1);
  expect(tableCell).toHaveLength(11);
});
