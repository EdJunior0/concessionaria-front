export class Client {
  constructor(instance) {
    this.instance = instance;
  }

  getAllClients(data) {
    return this.instance.get(`/cliente`);
  }

  saveClient(data) {
    return this.instance.post(`/cliente`, data);
  }

  updateClient(data) {
    return this.instance.patch(`/cliente`, data);
  }

  deleteClient(id) {
    return this.instance.delete(`/cliente?cpf=${id}`);
  }
}

export default (...params) => new Client(...params);
