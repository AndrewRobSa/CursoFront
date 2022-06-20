import React from "react";
import "./App.css";
import Clock from "./Clock.js";
import PropTypes from 'prop-types';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchVisible: false
    };
  }

  // toggle visibility when run on the state
  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  }

  render() {
    // Classes to add to the <input /> element
    let searchInputClasses = ["searchInput"];

    // Update the class array if the state is visible
    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }

    return (
      <div className="header">
        <div className="header-section left">
          <Clock className="clock"/>
        </div>
        <span className="title">{this.props.title}</span>
        <div className="header-section right">
          <input
            type="text"
            className={searchInputClasses.join(" ")}
            placeholder="Search ..."
          />
          <div onClick={this.showSearch.bind(this)}>
            <i className="bi bi-search"></i>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'TITULO'
};
