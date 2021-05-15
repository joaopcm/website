import axios from "axios";

export const githubAPI = axios.create({
  baseURL: "https://api.github.com",
});
