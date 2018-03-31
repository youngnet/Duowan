import axios from "./index";

export function getData(a,b) {
    return axios.get(`http://localhost:3333/data/getData?${a}=${b}`);
}

export function postContent(id,content) {
  return axios.post(`http://localhost:3333/data/comment?id=${id}`, { comment: content });
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

export function getComment(id) {
  return axios.get(`http://localhost:3333/data/comment?id=${id}`)
}