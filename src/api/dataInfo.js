import axios from "axios";

export function getData() {
  return axios.get(`120.76.205.241:8000/post/duowan?catid=1133&apikey=WmZXTd5z0Ko4Ees19SH9ZWKH4tu2sthq4eZykPcGe8TmqvNDa4NKfQIzbiwEPCx7`);
}

export function postContent(content) {
  return axios.post("/data/comment", { content: content });
}

export function collectArticle(info) {
  return axios.post("/data/collectArticle");
}
