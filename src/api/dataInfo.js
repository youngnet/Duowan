import axios from "./index";

export function getData(a,b) {
    return axios.get(`http://localhost:3333/data/getData?${a}=${b}`);
}

export function postContent(content) {
  return axios.post("http://localhost:3333/data/comment", { content: content });
}

export function collectArticle(info) {
  return axios.post("http://localhost:3333/data/collectArticle");
}

export function rankData(id) {
  return axios.get(`http://localhost:3333/data/rankData?id=${id}`);
}

export function getClass() {
  return axios.get("http://localhost:3333/data/class");
}

export function getSearch(id) {
    return axios.get(`http://localhost:3333/data/search?id=${id}`)
}