import apiFactory from "./api";

const apiUrl = "http://localhost:8080";

const api = apiFactory({
  api_url: apiUrl,
});

export default api;
