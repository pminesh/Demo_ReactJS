import React from 'react'
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import StyledBadge from '../../constant/style/Style';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import Grid from '@mui/material/Grid';

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.setItem("isLogin", false);
    setAnchorEl(null);
    navigate("/");
  };

  // Header
  return (

    <div>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Typography variant="h6" noWrap component="div">DEMO</Typography>
            </Grid>
            <Grid item xs={2}>
              <div>
                <Stack direction="row" spacing={2} style={{ float: 'right', cursor: 'pointer' }}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar alt="Minesh" src="/static/images/avatar/1.jpg" onClick={handleMenu} />
                  </StyledBadge>
                </Stack>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleClose}><Avatar />Profile</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={() => logOut()}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;