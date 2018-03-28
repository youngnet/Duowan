import axios from "./index";

export function getData(a,b) {
    return axios.get(`/data/getData?${a}=${b}`);
}

export function postContent(content) {
  return axios.post("/data/comment", { content: content });
}

export function collectArticle(info) {
  return axios.post("/data/collectArticle");
}

export function rankData(id) {
  return axios.get(`/data/rankData?id=${id}`);
}
