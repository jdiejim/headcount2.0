import React, { Component } from 'react';
import DistrictRepository from './helper'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import SchoolList from './components/SchoolList'
import SchoolDetail from './components/SchoolDetail'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      schools: {},
      selectedSchools: [],
    }
    this.handleSelectSchool = this.handleSelectSchool.bind(this);
  }

  componentDidMount() {
    const schools = new DistrictRepository(kinderData);
    this.setState({ schools: schools.data });
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

  render() {
    if(!this.state.schools){
      return <div>Loading...</div>
    }

    return (
      <div className='main-container'>
        <SchoolList {...this.state} handleSelectSchool={this.handleSelectSchool}/>
        <SchoolDetail data={this.state.selectedSchools}/>
      </div>
    );
  }
}

export default App;
