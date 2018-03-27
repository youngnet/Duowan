import axios from "axios";

export function getData() {
  return axios.get(`/data/getData`);
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
