import React from "react";
import PropTypes from "prop-types";

const Goal = ({ name }) => {
  return (
    <div className="container">
      <h1 className="title">{name}</h1>
    </div>
  );
};

Goal.protoTypes = {
  name: PropTypes.string.isRequired
};

export default Goal;
