import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ completedPercentage }) => (
  <progress
    className="progress is-info is-large"
    value={completedPercentage}
    max="100"
  >
    {`${completedPercentage}%`}
  </progress>
);

export default ProgressBar;
