import React, { Component } from "react";
import goalsApi from "../../api/goalsApi";
import GoalsList from "../../components/GoalsList/GoalsList";

class GoalsPage extends Component {
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
        <GoalsList goals={this.state.goals} />
      </div>
    );
  };
}

export default GoalsPage;
