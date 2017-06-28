import React, { Component } from 'react';
import icon from '../assets/search.svg';
import { func } from 'prop-types';
import './styles/SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleOnChange(e) {
    const input = e.target.value;

    this.setState({ input });
    this.props.handleSearch(input);
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

SearchBar.propTypes = {
  handleSearch: func
}

export default SearchBar;
