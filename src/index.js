import React from "react";
import ReactDOM from "react-dom";
import styles from "bulma";
import GoalsPage from "./containers/GoalPage/GoalPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const GoalPageWithYearWrapper = () => {
  const { year } = useParams();
  return <GoalsPage year={parseInt(year)}/>
}

ReactDOM.render(<Router>
  <Switch>
    <Route path="/:year" children={<GoalPageWithYearWrapper />} />
    <Route path="/" children={<GoalsPage year={new Date().getFullYear()} />} />
  </Switch>
  </Router>, 
  document.getElementById("appContainer")
);