import config from "./config";
import userFactory from "./factories/user";
import vehicleFactory from "./factories/vehicle";
import sellersFactory from "./factories/seller";
import clientsFactory from "./factories/client";
import salesFactory from "./factories/sale";

export class Api {
  constructor(params) {
    this.instance = config(params, true).instance();
  }

  users() {
    return userFactory(this.instance);
  }

  vehicle() {
    return vehicleFactory(this.instance);
  }

  sellers() {
    return sellersFactory(this.instance);
  }

  clients() {
    return clientsFactory(this.instance);
  }

  sales() {
    return salesFactory(this.instance);
  }
}

export default (params) => new Api(params);
