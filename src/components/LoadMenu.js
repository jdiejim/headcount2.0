import React from 'react';
import remove from '../assets/remove.svg';
import './styles/LoadMenu.css';

const LoadMenu = ({ isHidden, handleLoadMenu }) => {
  const show = isHidden ? 'load-menu' : 'load-menu menu-show';
  const bgImage = {
    backgroundImage: `url(${remove})`
  }

  return (
    <aside className={show}>
      <div className="load-header">
        <h3 className="load-title">Select Database</h3>
        <button style={bgImage} className="hide-menu" onClick={handleLoadMenu}></button>
      </div>
      <nav className="db-list">
        <button className="db-btn">8th Grade Test Scores</button>
        <button className="db-btn">3th Grade Test Scores</button>
        <button className="db-btn">Average Race Math</button>
        <button className="db-btn">Average Race Reading</button>
        <button className="db-btn">Average Race Writing</button>
        <button className="db-btn">Dropout by Race</button>
        <button className="db-btn">High School Grad Rates</button>
        <button className="db-btn">Kinder Data</button>
        <button className="db-btn">Median Household Income</button>
        <button className="db-btn">Online Pupil Enrollment</button>
        <button className="db-btn">Pupil Enrollment</button>
        <button className="db-btn">Pupil Enrollment by Race</button>
        <button className="db-btn">Remediation in Higher Education</button>
        <button className="db-btn">School Aged Children in Poverty</button>
        <button className="db-btn">Special Education</button>
        <button className="db-btn">Students Qualifying</button>
        <button className="db-btn">Students</button>
      </nav>
    </aside>
  )
}

export default LoadMenu;
