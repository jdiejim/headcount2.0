import React, { Component } from 'react';
import icon from '../assets/search.svg';
import './styles/SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleOnChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const bgIcon = {
      backgroundImage: `url(${icon})`,
    }
    
    return (
      <input
        style={bgIcon}
        className="search-input"
        onChange={this.handleOnChange.bind(this)}
        type="text"
        placeholder="Search school"
        value={this.state.input}
      />
    )
  }
}

export default SearchBar;
