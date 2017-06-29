import React from 'react';
import menu from '../assets/menu.svg';
import './styles/Header.css';

const Header = ({ handleLoadMenu }) => {
  const bgImage = {
    backgroundImage : `url(${menu})`
  }

  return (
    <header className="header">
      <h1 className="header-title">Kinder Data</h1>
      <button
        onClick={handleLoadMenu}
        style={bgImage}
        className="menu-db">
      </button>
    </header>
  )
}

export default Header;
