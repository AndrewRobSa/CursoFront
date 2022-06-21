import React from "react";
import PropTypes from "prop-types";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  updateSearchInput(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  submitForm(event) {
    // prevent the form from reloading the entire page
    event.preventDefault();
    // call the callback with the search value
    this.props.onSubmit(this.state.searchText);
  }

  render() {
    // Classes to add to the <input /> element
    let searchInputClasses = ["searchInput"];
    // Update the class array if the state is visible
    if (this.props.searchVisible) {
      searchInputClasses.push("active");
    }
    return (
      <form onSubmit={this.submitForm.bind(this)} className="form-search">
        <input
          type="search"
          value={this.state.searchText}
          className={searchInputClasses.join(" ")}
          onChange={this.updateSearchInput.bind(this)}
          placeholder="Search ..."
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  searchVisible: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};
SearchForm.defaultProps = {
  searchVisible: false,
  onSubmit: () => {} // prevent explosions
};

export default SearchForm;
