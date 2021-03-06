import React from "react";
import ActivityItem from "./ActivityItem";
import PropTypes from "prop-types";

//const rootUrl = `https://api.github.com`
//const endpoint = `/users/fullstackreact/events`


export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      activities: []
    };
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    fetch("./data.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(
          {loading: false, activities: data},
          this.props.onComponentRefresh
        );
      });
  }

  componentWillReceiveProps(nextProps) {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh !== this.props.requestRefresh) {
      if(nextProps.requestRefresh === true) {
        console.log("Refrescando... Calling UpdateData()");
        this.setState({loading: true}, this.updateData);
      }

    }else {
      if (nextProps.searchFilter !== this.props.searchFilter) {
        console.log("Nueva Busqueda... Calling UpdateData(): " + nextProps.searchFilter);
        this.setState({loading: true}, this.updateData);
      }
    }
  }

  render() {
    //const {activities} = this.props; // ES6 destructuring
    return (
      <div className="content">
        {/* Timeline item */}
        {this.state.activities.map(activity => (
          <ActivityItem activity={activity} />
        ))}
      </div>
    );
  }
}

Content.propTypes = {
  onComponentRefresh: PropTypes.func,
  requestRefresh: PropTypes.bool,
  fetchData: PropTypes.node,
  searchFilter: PropTypes.string
};
