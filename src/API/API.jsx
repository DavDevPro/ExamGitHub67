import axios from "axios";
import { useEffect } from "react";

const searchURL = "https://api.github.com/search/users?q=";
const baseURL = "https://api.github.com/users/";
 
const API = {
  getUser: async (userName) => axios.get(`${baseURL + userName}`),
  getSearchUser: async (userName) => axios.get(`${searchURL + userName}`),
  getRepos: async (userName) => axios.get(`${baseURL + userName}/repos`),
  getFollowers: async (userName) => axios.get(`${baseURL + userName}/followers`),
  getFollowing: async (userName) => axios.get(`${baseURL + userName}/following`),
};
// useEffect(() => {
//   axios
//     .get("https://api.github.com/users/Davronbek2000")
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// }, []);

export default API;
