import React from 'react';
import remove from '../assets/remove.svg';
import './styles/LoadMenu.css';

const LoadMenu = ({ isHidden, handleLoadMenu, dbKeys, selectedKey, handleLoadData }) => {
  const show = isHidden ? 'load-menu' : 'load-menu menu-show';
  const bgImage = {
    backgroundImage: `url(${remove})`
  }
  const buttonArray = Object.keys(dbKeys).map(k => {
    const selected = selectedKey === k ? 'db-btn selected' : 'db-btn';
    return (
      <button
        key={k}
        onClick={() => handleLoadData(k, dbKeys[k].name)}
        className={selected}>
        {dbKeys[k].tab}
      </button>
    )
  })

  return (
    <aside className={show}>
      <div className="load-header">
        <h3 className="load-title">Select Database</h3>
        <button style={bgImage} className="hide-menu" onClick={handleLoadMenu}></button>
      </div>
      <nav className="db-list">
        {buttonArray}
      </nav>
    </aside>
  )
}

export default LoadMenu;
