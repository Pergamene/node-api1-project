import UsersService from './UsersService';

class UsersState {
  async fetchUsers(setUsers) {
    const response = await UsersService.fetchUsers();
    setUsers(response.data);
  }

  async addUser(User, setUsers) {
    const response = await UsersService.addUser(User);
    setUsers(response.data);
  }

  async deleteUser(id, setUsers) {
    const response = await UsersService.deleteUser(id);
    setUsers(response.data);
  }

  async cancelEditUser(setEditUser) {
    this._resetEditUser(setEditUser);
  }

  async editUser(user, setUsers, setEditUser) {
    const response = await UsersService.editUser(user);
    setUsers(response.data);
    this._resetEditUser(setEditUser);
  }

  _resetEditUser(setEditUser) {
    setEditUser({
      editing: false,
      User: {
        id: '',
        name: '',
        bio: '',
      },
    });
  }
}

export default new UsersState();
