import apiFactory from "./api";

const apiUrl = process.env.NEXT_PUBLIC_URL_API;

const api = apiFactory({
  api_url: apiUrl,
});

export default api;
