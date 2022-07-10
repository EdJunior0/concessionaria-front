export class Vehicle {
  constructor(instance) {
    this.instance = instance;
  }

  getAllVehicles(data) {
    return this.instance.get(`/veiculo`);
  }

  deleteVehicle(id) {
    return this.instance.delete(`/veiculo?cod_veiculo=${id}`);
  }

  saveVehicle(data) {
    return this.instance.post(`/veiculo`, data);
  }

  updateVehicle(data) {
    return this.instance.patch(`/veiculo`, data);
  }
}

export default (...params) => new Vehicle(...params);
