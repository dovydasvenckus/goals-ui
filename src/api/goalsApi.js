import axios from "axios";

const getGoals = (year) => axios.get(`${process.env.BASE_REPO_URL}/${year}.json`);

export default { getGoals };
