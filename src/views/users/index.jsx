import React, { useState } from 'react'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid } from '@mui/material';
import BaseModal from '../../components/common/modal';
import useUsers from '../../hooks/users/useUsers';
import UserForm from './userForm';

const defaultUser = {
    id: 0,
    name: "",
    email: "",
    password: ""
}

const Users = () => {
  const [open, setOpen] = useState(false);
  const {users, loading, createUser, editUser, deleteUser} = useUsers();
  const [currentUser, setCurrentUser] = useState(defaultUser);

  const handleCreate = () => {
    setCurrentUser(defaultUser);
    setOpen(true);
  }
  
  const handleEdit = (user) => {
    setCurrentUser(user);
    setOpen(true);
  }

  const handleDelete = (user) => {
    if (window.confirm(`Realmente desea elimina el usuario ${user.name}?`)) {
      deleteUser(user.id);
    }
  }

  const handleSave = () => {
    let result = currentUser.id === 0
                  ? createUser(currentUser)
                  : editUser(currentUser);

    if (result !== null)
      setOpen(false);
  }
  
  const columns = [
    { field: 'id', headerName: '#', maxWidth: 150, minWidth: 100, flex: 1 },
    { field: 'name', headerName: 'Nombre', minWidth: 300, flex: 1 },
    { field: 'email', headerName: 'Email', minWidth: 300, flex: 1 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      flex: 1,
      maxWidth: 150,
      minWidth: 100,
      cellClassName: 'actions',
      getActions: (data) => {
        
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleEdit(data.row)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDelete(data.row)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleChange = (target) => {
    setCurrentUser({
      ...currentUser,
      [target.name] : target.value
    });
  }


  return (
    <>
    <Grid item xs={12} sx={{ pb:1 }}>
      <Button
        sx={2}
        variant="contained"
        onClick={() => handleCreate()}
      >
      Nuevo usuario
    </Button> 
      </Grid>
      <Grid item xs={12}>
        <DataGrid
            autoHeight={true}
            rows={users}
            columns={columns}
            loading={loading}
            hideFooterPagination={true}
          /> 
      </Grid>
      
      <BaseModal
        open={open}
        onClose={() => setOpen(false)}
        title="Usuarios"
        subTitle="Edicion"
        content= {<UserForm 
                    currentUser={currentUser} 
                    handleChange={handleChange} 
                  />}
        onSubmit={() => handleSave()}
        disableSubmit={false}
      />
    </>
  )
}

export default Users
