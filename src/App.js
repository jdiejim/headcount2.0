import React, { Component } from 'react';
import DistrictRepository from './helper';
import db from '../data/database';
import dbKeys from '../data/database-keys';
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
      isHidden: false,
      dbKeys: dbKeys,
      selectedKey: 'kinderData',
      headerTitle: dbKeys['kinderData'].name
    }
    this.handleSelectSchool = this.handleSelectSchool.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLoadMenu = this.handleLoadMenu.bind(this);
    this.handleLoadData = this.handleLoadData.bind(this);
  }

  componentDidMount() {
    const schools = new DistrictRepository(db[this.state.selectedKey]);
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

  handleLoadData(dbKey, name) {
    const schools = new DistrictRepository(db[dbKey]);
    const schoolsArray = schools.data;

    this.setState({
      schools,
      schoolsArray,
      selectedKey: dbKey,
      headerTitle: name
    })
  }

  render() {
    // console.log(this.state.schools);
    const { schoolsArray, selectedSchools, schools, isHidden, dbKeys, selectedKey, headerTitle } = this.state;

    return (
      <div className='main-container'>
        <SchoolList
          schools={schoolsArray}
          selectedSchools={selectedSchools}
          handleSelectSchool={this.handleSelectSchool}
          handleSearch={this.handleSearch}
        />
        <SchoolDetail schools={schools} selectedSchools={selectedSchools} handleLoadMenu={this.handleLoadMenu} headerTitle={headerTitle} />
        <LoadMenu
          handleLoadData={this.handleLoadData}
          isHidden={isHidden}
          handleLoadMenu={this.handleLoadMenu}
          dbKeys={dbKeys}
          selectedKey={selectedKey}
        />
      </div>
    );
  }
}

export default App;
