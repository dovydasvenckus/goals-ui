import React from "react";
import ReactDOM from "react-dom/client";
import styles from "bulma";
import GoalsPage from "./containers/GoalPage/GoalPage";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";

const GoalPageWithYearWrapper = () => {
  const { year } = useParams();
  return <GoalsPage year={parseInt(year)}/>
}

const root = ReactDOM.createRoot(document.getElementById("appContainer"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/:year" element={<GoalPageWithYearWrapper/>}/>
      <Route path="/" element={<GoalsPage year={new Date().getFullYear()} />}/>
    </Routes>
  </BrowserRouter>
);
