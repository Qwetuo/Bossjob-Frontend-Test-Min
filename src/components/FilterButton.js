import React from "react";

const style = {
  marginTop: "1.5em",
  padding: "auto",
  border: "1.2px solid #3b88ec",
  borderRadius: "25px",
  textAlign: "center"
};

const pStyle = { color: "#3b88ec", margin: "0.5em", fontWeight: "600" };

const FilterButton = props => (
  <div style={style} onClick={props.handleFilterClick}>
    <p style={pStyle}>Filter results</p>
  </div>
);

export default FilterButton;
