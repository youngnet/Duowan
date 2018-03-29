import axios from "axios";
axios.interceptors.response.use(result => {
  return result.data;
});
export function getComment(id) {
  return axios.get(
    `120.76.205.241:8000/comment/duowan?parent=1&apikey=WmZXTd5z0Ko4Ees19SH9ZWKH4tu2sthq4eZykPcGe8TmqvNDa4NKfQIzbiwEPCx7&id=${id}`
  );
}
