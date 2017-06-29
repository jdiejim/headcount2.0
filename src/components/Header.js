import React from 'react';
import { string, func } from 'prop-types';
import menu from '../assets/menu.svg';
import './styles/Header.css';

const Header = ({ handleLoadMenu, headerTitle }) => {
  const bgImage = {
    backgroundImage : `url(${menu})`
  }

  return (
    <header className="header">
      <h1 className="header-title">{headerTitle}</h1>
      <button
        onClick={handleLoadMenu}
        style={bgImage}
        className="menu-db">
      </button>
    </header>
  )
}

Header.propTypes = {
  handleLoadMenu: func,
  headerTitle: string
}

export default Header;
