import React, { useState, useEffect } from 'react';

import UsersState from '../services/UsersState';

import UsersList from './UsersList';
import UsersForm from './UsersForm';

const emptyEditUser = {
  editing: false,
  User: {
    id: '',
    name: '',
    bio: '',
  },
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(emptyEditUser);

  useEffect(() => {
    UsersState.fetchUsers(setUsers);
  }, []);

  return (
    <>
      <UsersForm setUsers={setUsers} editUser={editUser} setEditUser={setEditUser} />
      <UsersList users={users} setUsers={setUsers} setEditUser={setEditUser} />
    </>
  );
}

export default Users;
