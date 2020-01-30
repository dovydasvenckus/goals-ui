import React, { Component } from "react";
import Goal from "../../components/Goal/Goal";
import goalsApi from "../../api/goalsApi";

class GoalsList extends Component {
  state = {
    goals: []
  };
  static propTypes = {};

  componentDidMount = () => {
    goalsApi.getGoals().then(response => this.setState({ ...response.data }));
  };

  render = () => {
    return (
      <div className="container">
        {this.state.goals.map((goal, index) => (
          <Goal key={index} name={goal.name} data={goal.data} />
        ))}
      </div>
    );
  };
}

export default GoalsList;
