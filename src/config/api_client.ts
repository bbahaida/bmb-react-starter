import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: "http://localhost:8080",
};

// if (process.env.NODE_ENV === "production") {
//   baseURL: "";
// }

export default axios.create(config);
