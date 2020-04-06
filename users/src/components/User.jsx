import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import UsersState from '../services/UsersState';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto 20px',
    padding: '20px',
    width: '250px',
  },
  text: {
    margin: '5px 0',
  },
  icons: {
    display: 'flex',
    flexDirection: 'column',
  }
});

const User = props => {
  const classes = useStyles();
  const [hovering, setHovering] = useState(false);
  const { id, name, bio } = props.data;
  const { setUsers, setEditUser } = props;

  const handleHover = () => {
    setHovering(true);
  };

  const handleStopHover = () => {
    setHovering(false);
  }

  const handleEdit = () => {
    setEditUser({
      editing: true,
      User: {
        id,
        name,
        bio,
      },
    });
  };

  const handleDelete = () => {
    UsersState.deleteUser(id, setUsers);
  };

  return (
    <Paper className={classes.root} component="div" elevation={5} onMouseEnter={handleHover} onMouseLeave={handleStopHover}>
      <div>
        <h2 className={classes.text}>{name}</h2>
        <p className={classes.text}>Bio: {bio}</p>
      </div>
      {hovering && <div className={classes.icons}>
        <EditIcon onClick={handleEdit}/>
        <DeleteIcon onClick={handleDelete}/>
      </div>}
    </Paper>
  );
};

export default User;
