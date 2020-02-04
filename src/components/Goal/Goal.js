import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar/ProgressBar";
import GoalItem from "./GoalItem";
import Hideable from "../Hideable/Hideable";

const Goal = ({ name, data }) => {
  return (
    <div className="container">
      <hr />
      <h1 className="title has-text-centered">{name}</h1>
      <ProgressBar
        completedPercentage={
          (data.completedItems.length / data.itemCountToComplete) * 100
        }
      />
      <div className="has-text-centered is-size-4">{`${data.completedItems.length}/${data.itemCountToComplete}`}</div>
      <Hideable isHidden={true}>
        <ol>{mapGoalItems(data.completedItems)}</ol>
      </Hideable>
    </div>
  );
};

const mapGoalItems = items => {
  return items.map((item, index) => (
    <GoalItem key={index} title={item.title} date={item.date} />
  ));
};

Goal.protoTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default Goal;
