import React, { Component } from "react";
import { connect } from "react-redux";
import { getJobs } from "../actions";
import JobCard from "./JobCard";

class JobsContainer extends Component {
  componentDidMount() {
    this.props.getJobs();
  }

  render() {
    const renderSearchCount = (
      <div className="job-count">{this.props.count} jobs found</div>
    );
    const renderJobsTitle = this.props.jobs.map((job, index) => (
      <JobCard key={index} job={job} />
    ));
    return this.props.loading ? (
      <div>Loading</div>
    ) : (
      <div>
        {renderSearchCount} {renderJobsTitle}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  loading: state.loading,
  count: state.count
});

const mapDispatchToProps = {
  getJobs: getJobs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsContainer);
