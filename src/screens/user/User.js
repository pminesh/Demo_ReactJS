import React from 'react'
import HOC from '../../components/hoc/HOC'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { getUserAsync, updateUserAsync, deleteUserAsync, showUsers } from '../../redux/reducer/User-Reducer';
import { useSelector, useDispatch } from "react-redux";
import Tooltip from '@mui/material/Tooltip';

// Dialog box manage
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const User = () => {
  const dispatch = useDispatch();
  const users_list = useSelector(showUsers);

  //****************************** all useEffect*/ 
  useEffect(() => {
    dispatch(getUserAsync())
  }, [dispatch]);

  //****************************** all useState*/ 
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({ user_name: '', email: '', mobile_number: '' });
  const [dialogType, setDialogType] = useState('')
  const [userId, setUserId] = useState('')
  const [dialogTitle, setDialogTitle] = useState('')
  //****************************** dialog box handler*/ 
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //****************************** operation on dialog box*/ 
  const openDialog = (data) => {
    const id = data['id'];
    const field = data['field']
    setUserId(id)
    setDialogType(field)
    if (field === 'show') {
      setDialogTitle('User Details')
      setUserDetails(data['row'])
      handleClickOpen()
    } else if (field === 'edit') {
      setDialogTitle('User Update')
      setUserDetails(data['row'])
      handleClickOpen()
    } else {
      dispatch(deleteUserAsync(id))
    }
  }

  //****************************** data grid columns*/ 
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'email', headerName: 'EMAIL', width: 200 },
    { field: 'user_name', headerName: 'USER NAME', width: 200 },
    { field: 'mobile_number', headerName: 'MOBILE NUMBER', width: 200 },
    {
      field: "show",
      headerName: "SHOW",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Tooltip title="Show" arrow>
            <Button variant="contained" color="warning" onClick={() => openDialog(params)}>
              <RemoveRedEyeSharpIcon />
            </Button>
          </Tooltip>
        );
      }
    },
    {
      field: "edit",
      headerName: "EDIT",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Tooltip title="Edit" arrow>
            <Button variant="contained" color="success" onClick={() => openDialog(params)}>
              <EditSharpIcon />
            </Button>
          </Tooltip>
        );
      }
    },
    {
      field: "delete",
      headerName: "DELETE",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Tooltip title="Delete" arrow>
            <Button
              variant="contained" color="error" onClick={() => openDialog(params)}  >
              <DeleteSharpIcon />
            </Button>
          </Tooltip>
        );
      }
    }];

  //****************************** submit handler*/ 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user_obj = {
      email: data.get('up_email'),
      user_name: data.get('up_username'),
      password: data.get('password'),
      password2: data.get('password2'),
      mobile_number: data.get('up_mobilenumber')
    };
    dispatch(updateUserAsync(user_obj, userId))
  }

  //****************************** */
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {dialogTitle}
        </BootstrapDialogTitle>
        {dialogType === 'show' ? (
          <>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={3} padding={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="username"
                    label="User Name"
                    type="text"
                    id="username"
                    autoComplete="user-name"
                    value={userDetails.user_name}
                    inputProps={
                      { readOnly: true, }
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={userDetails.email}
                    inputProps={
                      { readOnly: true, }
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="mobilenumber"
                    label="Mobile Number"
                    type="number"
                    id="mobile-number"
                    autoComplete="mobile-number"
                    value={userDetails.mobile_number}
                    inputProps={
                      { readOnly: true, }
                    }
                  />
                </Grid>
              </Grid>
            </Box>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={3} padding={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="User Name"
                    name="up_username"
                    type="text"
                    id="up_username"
                    autoComplete="up-user-name"
                    defaultValue={userDetails.user_name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    id="up_email"
                    type="up_email"
                    name="up_email"
                    autoComplete="up_email"
                    defaultValue={userDetails.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Mobile Number"
                    name="up_mobilenumber"
                    type="number"
                    id="mobile-number"
                    autoComplete="up-mobile-number"
                    defaultValue={userDetails.mobile_number}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password2"
                    label="Confirm password"
                    type="password"
                    id="password2"
                    autoComplete="new-password2"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }
                    }
                    onClick={handleClose}
                  >
                    Upadte
                  </Button>
                </Grid>
              </Grid>

            </Box>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </>
        )}
      </BootstrapDialog>
      <HOC>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <h1>USERS LISTING</h1>
          <Box height="80vh" width="80vw">
            <DataGrid rows={users_list} columns={columns} />
          </Box>
        </Box>
      </HOC>
    </div>
  )
}

export default User

