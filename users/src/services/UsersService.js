import axios from 'axios';

class UsersService {
  async fetchUsers() {
    const response = await this._createBaseRequest().get('api/users');
    return response;
  }

  async addUser(User) {
    const response = await this._createBaseRequest().post('api/users', User);
    return response;
  }

  async deleteUser(id) {
    const response = await this._createBaseRequest().delete('api/users/' + id);
    return response;
  }

  async editUser(User) {
    const { id, name, bio } = User;
    const response = await this._createBaseRequest().put('api/users/' + id, {id, name, bio});
    return response;
  }

  _createBaseRequest() {
    return axios.create({
      baseURL: 'http://localhost:5000/',
    });
  }
}

export default new UsersService();
