import React, { Component } from "react";
import FilterButton from "./FilterButton";
import { connect } from "react-redux";
import { changeQuery, getJobs } from "../actions";

const WAIT_INTERVAL = 800;
const ENTER_KEY = 13;

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  timer = null;

  handleChange = e => {
    clearTimeout(this.timer);

    this.setState({
      [e.target.name]: e.target.value
    });

    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  };

  handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);
      this.triggerChange();
    }
  };

  triggerChange = () => {
    this.props.changeQuery(this.state.query);
    this.props.getJobs();
  };

  handleFilterClick = () => {
    alert("Currently no functionality added");
  };

  render() {
    return (
      <div className="search-container">
        <div>
          <span className="fas fa-search job-icon" /> Search for job title or
          company name
        </div>
        <div>
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        <FilterButton handleFilterClick={this.handleFilterClick} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeQuery: changeQuery,
  getJobs: getJobs
};

export default connect(
  null,
  mapDispatchToProps
)(SearchContainer);
