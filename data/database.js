const thirdGrade = require('./3rd_grade_tests.js');
const eighthGrade = require('./8th_grade_test_scores.js');
const aveRaceMath = require('./average_race_ethnicity_math_scores.js');
const aveRaceReading = require('./average_race_ethnicity_reading_scores.js');
const aveRaceWriting = require('./average_race_ethnicity_writing_scores.js');
const dropoutRates = require('./dropout_rates_by_race_and_ethnicity.js');
const highSchoolGrads = require('./high_school_graduation_rates.js');
const kinderData = require('./kindergartners_in_full_day_program.js');
const medianHousehold = require('./median_household_income.js');
const onlinePupil = require('./online_pupil_enrollment.js');
const pupil = require('./pupil_enrollment.js');
const pupilRace = require('./pupil_enrollment_by_race_ethnicity.js');
const remediation = require('./remediation_in_higher_education.js');
const schoolPoverty = require('./school_aged_children_in_poverty.js');
const specialEducation = require('./special_education.js');
const studentsReduced = require('./students_qualifying_for_free_or_reduced_price_lunch.js');
const titleStudents = require('./title_i_students.js');

const db = {
  thirdGrade,
  kinderData,
  eighthGrade,
  aveRaceMath,
  aveRaceReading,
  aveRaceWriting,
  dropoutRates,
  highSchoolGrads,
  medianHousehold,
  onlinePupil,
  pupil,
  pupilRace,
  remediation,
  schoolPoverty,
  specialEducation,
  studentsReduced,
  titleStudents
}

module.exports = db;
