import axios from "./index";

export function getData(a,b) {
    return axios.get(`/data/getData?${a}=${b}`);
}

export function postContent(id,content) {
  return axios.post(`/data/comment?id=${id}`, { comment: content });
}

export function collectArticle(info) {
  return axios.post("/data/collectArticle");
}

export function rankData(id) {
  return axios.get(`/data/rankData?id=${id}`);
}

export function getClass() {
  return axios.get("/data/class");
}

export function getSearch(id) {
    return axios.get(`/data/search?id=${id}`)
}

export function getComment(id) {
  return axios.get(`/data/comment?id=${id}`)
}
