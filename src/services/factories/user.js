export class User {
  constructor(instance) {
    this.instance = instance;
  }

  signUp(data) {
    return this.instance.post(`/user`, data);
  }

  signIn(data) {
    return this.instance.get(`/user?email=${data?.email}&senha=${data?.senha}`);
  }
}

export default (...params) => new User(...params);
