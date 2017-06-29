import React, { Component } from 'react';
import DistrictRepository from './helper'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import SchoolList from './components/SchoolList'
import SchoolDetail from './components/SchoolDetail'
import LoadMenu from './components/LoadMenu';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      schools: {},
      selectedSchools: [],
      schoolsArray: [],
      isHidden: false
    }
    this.handleSelectSchool = this.handleSelectSchool.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLoadMenu = this.handleLoadMenu.bind(this);
  }

  componentDidMount() {
    const schools = new DistrictRepository(kinderData);
    this.setState({ schools: schools, schoolsArray: schools.data });
  }

  handleSelectSchool(data) {
    const { selectedSchools } = this.state;
    const index = [...selectedSchools].map(school => school.location).indexOf(data.location)

    if(index !== -1){
      selectedSchools.splice(index, 1);
    }else{
      if(selectedSchools.length === 2){
        selectedSchools.shift();
      }
      selectedSchools.push(data);
    }

    this.setState({ selectedSchools })
  }

  handleSearch(input) {
    const schoolsArray = this.state.schools.findAllMatches(input);

    this.setState({ schoolsArray })
  }

  handleLoadMenu() {
    this.setState({ isHidden: !this.state.isHidden})
  }

  render() {
    // console.log(this.state.schools);
    const { schoolsArray, selectedSchools, schools, isHidden } = this.state;

    return (
      <div className='main-container'>
        <SchoolList
          schools={schoolsArray}
          selectedSchools={selectedSchools}
          handleSelectSchool={this.handleSelectSchool}
          handleSearch={this.handleSearch}
        />
        <SchoolDetail schools={schools} selectedSchools={selectedSchools} handleLoadMenu={this.handleLoadMenu} />
        <LoadMenu isHidden={isHidden} handleLoadMenu={this.handleLoadMenu} />
      </div>
    );
  }
}

export default App;
