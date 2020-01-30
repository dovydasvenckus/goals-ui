import React from "react";
import PropTypes from "prop-types";

const GoalItem = ({ date, title }) => {
  return (
    <li>
      {title} - {date}
    </li>
  );
};

GoalItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default GoalItem;
