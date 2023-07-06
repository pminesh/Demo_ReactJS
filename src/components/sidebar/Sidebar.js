import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import AccessAlarmSharpIcon from '@mui/icons-material/AccessAlarmSharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import CallMadeSharpIcon from '@mui/icons-material/CallMadeSharp';
import DeviceHubSharpIcon from '@mui/icons-material/DeviceHubSharp';
import PaymentIcon from '@mui/icons-material/Payment';

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();

  const pageRedirect = (nav_path) => {
    navigate(nav_path);
  };

  const actions = [
    { icon: <DashboardSharpIcon />, name: 'Dashboard', urlEndPoint: "/dashboard" },
    { icon: <PeopleIcon />, name: 'Users', urlEndPoint: "/user" },
    { icon: <DeviceHubSharpIcon />, name: 'Device', urlEndPoint: "/device" },
    { icon: <AccessAlarmSharpIcon />, name: 'Scene', urlEndPoint: "/scene" },
    { icon: <CallMadeSharpIcon />, name: 'Trigger', urlEndPoint: "/trigger" },
    { icon: <AccountBalanceSharpIcon />, name: 'Area', urlEndPoint: "/area" },
    { icon: <PaymentIcon />, name: 'Payment', urlEndPoint: "/payment" },
  ];

  // Sidebar
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {actions.map((action) => (
            <ListItem key={action.name} disablePadding>
              <ListItemButton onClick={() => pageRedirect(action.urlEndPoint)}>
                <ListItemIcon>
                  {action.icon}
                </ListItemIcon>
                <ListItemText primary={action.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

    </Drawer>
  )
}

export default Sidebar;