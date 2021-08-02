import propTypes from "prop-types";
import React, { Component } from "react";
import goalsApi from "../../api/goalsApi";
import GoalsList from "../../components/GoalsList/GoalsList";

class GoalsPage extends Component {
  state = {
    title: "Goals",
    goals: []
  };
  static propTypes = {
    year: propTypes.number.isRequired
  };

  componentDidMount = () => {
    const { year } = this.props;
    goalsApi.getGoals(year).then(response => this.setState({ ...response.data }));
  };

  componentDidUpdate = () => {
    document.title = this.state.title;
  }

  render = () => {
    return (
      <section className="section">
        <h1 className="title has-text-centered">{this.state.title}</h1>
        <div className="container">
          <GoalsList goals={this.state.goals} />
        </div>
      </section>
    );
  };
}

export default GoalsPage;
