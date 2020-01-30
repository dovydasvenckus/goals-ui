import axios from "axios";

const getGoals = () => axios.get(process.env.API_URL);

export default { getGoals };
