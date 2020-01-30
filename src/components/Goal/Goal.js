import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar/ProgressBar";

const Goal = ({ name, data }) => {
  console.log(data);
  console.log((data.completedItems.length / data.itemCountToComplete) * 100);
  return (
    <div className="container">
      <h1 className="title">{name}</h1>
      <ProgressBar
        completedPercentage={(
          (data.completedItems.length / data.itemCountToComplete) *
          100
        ).toString()}
      />
    </div>
  );
};

Goal.protoTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default Goal;
