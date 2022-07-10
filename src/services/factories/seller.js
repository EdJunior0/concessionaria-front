export class Seller {
  constructor(instance) {
    this.instance = instance;
  }

  getAllSellers(data) {
    return this.instance.get(`/vendedor`);
  }

  saveSeller(data) {
    return this.instance.post(`/vendedor`, data);
  }

  updateSeller(data) {
    return this.instance.patch(`/vendedor`, data);
  }

  deleteSeller(id) {
    return this.instance.delete(`/vendedor?cod_vendedor=${id}`);
  }
}

export default (...params) => new Seller(...params);
