import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ completedPercentage }) => (
  <progress
    className={`progress is-large ${getColorClass(completedPercentage)}`}
    style={{progressBarBackgroundColor: "$green"}}
    value={completedPercentage}
    max="100"
  >
    {`${completedPercentage}%`}
  </progress>
);

const getColorClass = (percentage) => {
  if (!percentage || percentage < 25) {
    return 'is-danger'
  }

  if (percentage < 50) {
    return 'is-warning'
  }

  if (percentage < 100) {
    return 'is-primary'
  }

  return 'is-success'
} 

export default ProgressBar;
