import axios from "./index";
let md5 = require("blueimp-md5");
export function userInfo(id) {
  return axios.get(`http://120.79.2.239:3333/profile/userInfo?id=${id}`);
}
export function login(userName, passWord) {
  return axios.post("http://120.79.2.239:3333/profile/login", { name: userName, pass: md5(passWord) });
}
export function isLogin() {
  return axios.get("http://120.79.2.239:3333/profile/isLogin");
}

export function register(userName, passWord) {
  return axios.post("http://120.79.2.239:3333/profile/register", {
    name: userName,
    pass: md5(passWord)
  });
}
