import React from "react";
import PropTypes from "prop-types";
import CompleteNItemsGoal from "../Goal/CompleteNItemGoal";
import ReachNumberGoal from "../Goal/ReachNumberGoal";

const GoalsList = ({ goals }) => {
  return (
    <div className="container">
      {goals.map((goal, index) => renderGoal(goal, index))}
    </div>
  );
};

const renderGoal = (goal, index) => {
  const { data, type, name } = goal;
  if (type === "COMPLETE_N_ITEMS") {
    return <CompleteNItemsGoal key={index} name={name} data={data} />;
  }

  if (type === "REACH_NUMBER") {
    return <ReachNumberGoal key={index} name={name} data={data} />;
  }

  return null;
};

GoalsList.propTypes = {
  goals: PropTypes.array.isRequired
};

export default GoalsList;
