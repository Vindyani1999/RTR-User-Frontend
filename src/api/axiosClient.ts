import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5002/api", // Update this with your API's base URL
});

export default axiosClient;
