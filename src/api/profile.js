import axios from "./index";

export function userInfo(params) {
  return axios.get("/profile/userInfo");
}

export function isLogin(params) {
  return axios.get("/profile/isLogin");
}

export function login(username, password) {
  return axios.post("/profile/login", { username, password });
}
export function register(username, password) {
  return axios.post("/profile/register", { username, password });
}
