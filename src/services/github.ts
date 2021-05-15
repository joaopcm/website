import axios from "axios";

export const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000, // 10 seconds
});
