import React, { Component } from "react";
import { connect } from "react-redux";
import { getJobs } from "../actions";
import JobCard from "./JobCard";

class JobsContainer extends Component {
  componentDidMount() {
    this.props.getJobs();
  }

  render() {
    const renderJobsTitle = this.props.jobs.map(job => <JobCard job={job} />);
    return this.props.loading ? <div>Loading</div> : renderJobsTitle;
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  loading: state.loading
});

const mapDispatchToProps = {
  getJobs: getJobs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsContainer);
