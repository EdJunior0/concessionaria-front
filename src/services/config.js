import axios from "axios";

export class Config {
  constructor({ api_url }) {
    if (api_url === undefined) throw new Error("Missing api_url");
    this.axios = this.create(api_url);

    this.intercept(
      "request",
      () => true,
      () => true
    );

    this.intercept("response", ({ data }) => data);
  }

  create(api_url) {
    return axios.create({
      baseURL: api_url,
    });
  }

  intercept(hook, successFn = console.log, errFn = console.error) {
    const allowedHooks = new Set(["request", "response"]);
    if (!allowedHooks.has(hook))
      throw new Error(
        "Just request and response are allowed to be intercepted"
      );

    this.axios.interceptors[hook].use(
      async (request) => {
        request.params = request.params || {};
        const data = successFn(request);
        if (hook === "response" && !!data) return successFn(request);
        return request;
      },
      (error) => {
        errFn(error);
        return Promise.reject(error);
      }
    );
  }

  instance() {
    return this.axios;
  }
}

export default (config) => new Config(config);
