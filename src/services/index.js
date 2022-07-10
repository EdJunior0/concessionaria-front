import apiFactory from "./api";

const apiUrl = "https://concessionaria-api.herokuapp.com/";

const api = apiFactory({
  api_url: apiUrl,
});

export default api;
