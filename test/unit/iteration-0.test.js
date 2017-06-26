import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 0', () =>  {
  const district = new DistrictRepository(kinderData);

  test('district has data in an object', () => {
    // remember that an array is also just an object.
    // console.log(district.data);
    expect(typeof district.data).toBe('object');
  });

  test('data coming in has no duplicates', () => {
    // uncomment out the tests that best fits your model
    // expect(district.data.length).toBe(181);
    expect(Object.keys(district.data).length).toBe(181);
  });

  test('it should remove spaces and return camel case keys', () => {
    const keys = ['TimeFrame', 'Race Ethnicity', 'DataFormat', 'Data'];
    const result = ['timeFrame', 'raceEthnicity', 'dataFormat', 'data' ];

    expect(district.getFormattedKeys(keys)).toEqual(result);
  });

  test('it should return object with formated keys and key value', () => {
    const keys = ['Location', 'TimeFrame', 'Race Ethnicity', 'DataFormat', 'Data'];
    const formattedKeys = ['location', 'timeFrame', 'raceEthnicity', 'dataFormat', 'data' ];
    const location = {
      "Location": "Colorado",
      "Race Ethnicity": "All Students",
      "TimeFrame": 2011,
      "DataFormat": "Percent",
      "Data": 0.5531
    };

    const result = {
      raceEthnicity: "All Students",
      timeFrame: 2011,
      dataFormat: "Percent",
      data: 0.5531
    };

    expect(district.getLocationObject(keys, formattedKeys, location)).toEqual(result);
  });

});
