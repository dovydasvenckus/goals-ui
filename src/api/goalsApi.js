import axios from "axios";

const getGoals = (year) =>
  axios.get(`${import.meta.env.VITE_BASE_REPO_URL}/${year}.json`);

export default { getGoals };
