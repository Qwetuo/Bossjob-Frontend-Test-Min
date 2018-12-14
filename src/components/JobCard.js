import React from "react";

const JobCard = ({
  job: {
    degree,
    job_title,
    job_type,
    salary_range_from,
    salary_range_to,
    company_name,
    company_location,
    xp_lvl,
    created_at,
    company_logo
  }
}) => {
  const getSalaryRange = () => {
    const fromStr = salary_range_from.toString();
    const toStr = salary_range_to.toString();
    const currency = "₱";
    if (fromStr.length > 3) {
      const fromDiff = fromStr.length - 3;
      const toDiff = toStr.length - 3;
      return (
        currency +
        fromStr.slice(0, fromDiff - 1) +
        "k - " +
        currency +
        toStr.slice(0, toDiff - 1) +
        "k"
      );
    }
    return currency + salary_range_from + " - " + currency + salary_range_to;
  };

  const getCreatedDiff = () => {
    const createdDateObj = new Date(created_at + "Z");
    const diff = new Date() - createdDateObj;
    if (diff < 3600000) return "few minutes ago";
    if (diff < 86400000) {
      const hours = Math.floor(diff / 3600000);
      return hours === 1 ? hours + " hour ago" : hours + " hours ago";
    }
    const days = Math.floor(diff / 86400000);
    return days === 1 ? days + " day ago" : days + " days ago";
  };

  return (
    <div className="job-wrapper">
      <div className="job-title">{job_title}</div>
      <div className="salary-range">{getSalaryRange()}</div>
      <div className="job-details">
        <div className="location">
          <span className="fas fa-map-marker-alt job-icon" /> {company_location}
        </div>
        <div className="experience">
          <span className="fas fa-briefcase job-icon" /> {xp_lvl}
        </div>
        <div className="degree">
          <span className="fas fa-graduation-cap job-icon" /> {degree}{" "}
        </div>
        <div className="type">
          <span className="fas fa-clock job-icon" /> {job_type}
        </div>
      </div>
      <div className="company-details">
        <img src={company_logo} alt="" width="40" height="40" />
        <p>{company_name}</p>
      </div>
      <div className="job-created-at">{getCreatedDiff()}</div>
    </div>
  );
};

export default JobCard;
