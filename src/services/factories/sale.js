export class Sale {
  constructor(instance) {
    this.instance = instance;
  }

  getAllSales(data) {
    return this.instance.get(`/venda`);
  }

  saveSale(data) {
    return this.instance.post(`/venda`, data);
  }

  updateSale(data) {
    return this.instance.patch(`/venda`, data);
  }

  deleteSale(id) {
    return this.instance.delete(`/venda?cod_veiculo=${id}`);
  }
}

export default (...params) => new Sale(...params);
