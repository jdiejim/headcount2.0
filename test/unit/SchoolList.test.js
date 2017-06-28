import React from 'react';
import SchoolList from '../../src/components/SchoolList';
import { shallow } from 'enzyme';

it('renders correct component when it mounts', () => {
  const wrapper = shallow(<SchoolList schools={{}} selectedSchools={[]} />);

  expect(wrapper.find('.school-list').length).toEqual(1);
});

it('should render the correct amount of schools', () => {
  const schools = {
    hogwarts: {
      data: { 2006: 0.1 },
      info: [{ data: 1 }],
      location: 'Hogwarts'
    },
    xavier: {
      data: { 2006: 0.2 },
      info: [{ data: 2 }],
      location: 'XAVIER’S SCHOOL FOR GIFTED YOUNGSTERS'
    },
    jedi: {
      data: { 2006: 0.3 },
      info: [{ data: 3 }],
      location: 'Jedi Academy'
    }
  };
  const wrapper = shallow(<SchoolList schools={schools} selectedSchools={[]} />);

  expect(wrapper.find('School').length).toEqual(3);
});

it('should pass the correct props to rendered schools', () => {
  const schools = {
    hogwarts: {
      data: { 2006: 0.1 },
      info: [{ data: 1 }],
      location: 'Hogwarts'
    },
    xavier: {
      data: { 2006: 0.2 },
      info: [{ data: 2 }],
      location: 'XAVIER’S SCHOOL FOR GIFTED YOUNGSTERS'
    },
    jedi: {
      data: { 2006: 0.3 },
      info: [{ data: 3 }],
      location: 'Jedi Academy'
    }
  };
  const wrapper = shallow(<SchoolList schools={schools} selectedSchools={[]} />);
  const { data, info, location } = wrapper.find('School').get(2).props.school;

  expect(location).toEqual('Jedi Academy');
  expect(data['2006']).toEqual(0.3);
  expect(info[0].data).toEqual(3);
});
