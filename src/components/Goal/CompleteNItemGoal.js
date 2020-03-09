import React from "react";
import PropTypes from "prop-types";
import Goal from "./Goal";

const CompleteNItemsGoal = ({ name, data }) => {
  return (
    <Goal
      data={data}
      name={name}
      barLabel={renderBarLabel(data)}
      percentage={calculatePercentage(data)}
    />
  );
};

const calculatePercentage = data => {
  return (data.entries.length / data.itemCountToComplete) * 100;
};

const renderBarLabel = data => {
  return `${data.entries.length}/${data.itemCountToComplete}`;
};

export default CompleteNItemsGoal;
