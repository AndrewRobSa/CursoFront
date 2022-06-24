import React from "react";
import "./App.css";
import Clock from "./Clock.js";
import SearchForm from "./SearchForm.js";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVisible: false,
    };
  }

  // toggle visibility when run on the state
  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  }

  handleSearch(val) {
    // Called when the imput changes value
    this.props.onSearch(val);
  }

  render() {
    return (
      <div className="header">
        <div className="header-section left">
          <Clock format="h:m:s p" />
        </div>

        <span className="title">{this.props.title}</span>

        <div className="header-section right">
          <SearchForm
            searchVisible={this.state.searchVisible}
            onSubmit={this.handleSearch.bind(this)}
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
  title: PropTypes.string,
  onSearch: PropTypes.func
};

Header.defaultProps = {
  title: "TITULO"
};
