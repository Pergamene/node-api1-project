import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import User from './User';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    margin: '0 auto',
  },
});

const UsersList = props => {
  const classes = useStyles();
  const { users, setUsers, setEditUser } = props;

  return (
    <div className={classes.root}>
      {users && users.map(user => {
        return <User data={user} setUsers={setUsers} setEditUser={setEditUser} key={user.id} />;
      })}
    </div>
  );
};

export default UsersList;
