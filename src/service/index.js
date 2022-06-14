import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function getAll() {
  return api.get("/posts");
}

function getAPost(id) {
  const url = "/posts/" + id;
  return api.get(url);
}

function add(data) {
  return api.post("/posts", data);
}

function update(data) {
  const url = "/posts/" + data.id;
  return api.put(url, data);
}

function deletes(id) {
  const url = "/posts/" + id;
  return api.delete(url);
}
export { getAll, getAPost, add, update, deletes };
