import React, { Component } from 'react';
import SchoolDataTable from './SchoolDataTable';
import PropTypes, { shape, string, number } from 'prop-types';
import './styles/School.css';

class School extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    const { school: { location, data, info } } = this.props;
    const { isSelected } = this.state;
    let renderGraph;

    if (isSelected) {
      renderGraph = <SchoolDataTable data={data} />;
    }

    return (
      <article
        onClick={this.handleClick}
        className="school-card">
        {location}
        {renderGraph}
      </article>
    )

  }
}

export default School;
