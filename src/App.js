import React, { Component } from 'react';
import DistrictRepository from './helper'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import PropTypes, { shape, string, number, func } from 'prop-types';
import SchoolList from './components/SchoolList'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      schools: {}
    }
  }

  componentDidMount() {
    const schools = new DistrictRepository(kinderData);
    this.setState({ schools: schools.data });
  }

  render() {
    if(!this.state.schools){
      return <div>Loading...</div>
    }

    return (
      <div>
        <SchoolList data={this.state.schools}/>
      </div>
    );
  }
}

export default App;
