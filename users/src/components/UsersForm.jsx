import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import UsersState from '../services/UsersState';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '760px',
    margin: ' 20px auto',
    padding: '20px',
  },
  editing: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const emptyUser = {
  id: '',
  name: '',
  bio: '',
};

const UsersForm = props => {
  const classes = useStyles();
  const { setUsers, editUser, setEditUser } = props;
  const [User, setUser] = useState(editUser.User);

  useEffect(() => {
    setUser(editUser.User);
  }, [editUser]);

  const handleChange = event => {
    setUser({
      ...User,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    UsersState.addUser(User, setUsers);
    setUser(emptyUser);
  };

  const handleEdit = event => {
    event.preventDefault();
    UsersState.editUser(User, setUsers, setEditUser);
  };

  const handleCancel = event => {
    event.preventDefault();
    UsersState.cancelEditUser(setEditUser);
  };

  return (
    <Paper className={classes.root} component="form" onSubmit={handleSubmit} elevation={5}>
      <TextField
        variant="outlined" 
        label="ID" 
        name="id"
        type="number"
        value={User.id} 
        onChange={handleChange} 
      />
      <TextField
        variant="outlined" 
        label="Name" 
        name="name"
        value={User.name} 
        onChange={handleChange} 
      />
      <TextField
        variant="outlined" 
        label="Bio" 
        name="bio"
        type="string"
        value={User.bio} 
        onChange={handleChange} 
      />
      {editUser.editing ? (
        <div className={classes.editing}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleEdit}
          >Edit User</Button>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={handleCancel}
          >Cancel</Button>
        </div>
      ) : (
      <Button 
        type="submit"
        color="primary"
        variant="contained"
      >Add User</Button>)}
    </Paper>
  );
};

export default UsersForm;
