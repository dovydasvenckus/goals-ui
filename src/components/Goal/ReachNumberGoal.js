import React from "react";
import PropTypes from "prop-types";
import Goal from "./Goal";

const ReachNumberGoal = ({ name, data }) => {
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
  const { entries, from, to } = data;
  const lastItem = getLastItem(entries);

  if (data.from > data.to) {
    const totalProgress = from - to;
    const leftProgress = lastItem.value - to;
    const doneProgress = totalProgress - leftProgress;
    return ((100 / totalProgress) * doneProgress).toFixed(0);
  }

  const totalProgress = to - from;
  const leftProgress = to - lastItem.value;
  const doneProgress = totalProgress - leftProgress;

  return ((100 / totalProgress) * doneProgress).toFixed(0);
};

const renderBarLabel = data => {
  return `${calculatePercentage(data)}%`;
};

const getLastItem = entries => {
  return entries
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1))
    .slice(-1)[0];
};

ReachNumberGoal.protoTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default ReachNumberGoal;
