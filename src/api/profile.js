import axios from "./index";
let md5 = require("blueimp-md5");
export function userInfo(id) {
  return axios.get(`/profile/userInfo?id=${id}`);
}
export function login(userName, passWord) {
  return axios.post("/profile/login", { name: userName, pass: md5(passWord) });
}
export function isLogin() {
  return axios.get("/profile/isLogin");
}

export function register(userName, passWord) {
  return axios.post("/profile/register", {
    name: userName,
    pass: md5(passWord)
  });
}
