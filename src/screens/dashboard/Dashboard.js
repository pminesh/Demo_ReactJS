import React from 'react'
import HOC from '../../components/hoc/HOC'
import Box from "@mui/material/Box";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CurtainsIcon from '@mui/icons-material/Curtains';
import SpeakerIcon from '@mui/icons-material/Speaker';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [token, setToken] = React.useState('');

  // firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyA9Kh8N-ss3NndqwThL0RKZKMuHNuRi5lQ",
    authDomain: "testproject-bf9f7.firebaseapp.com",
    projectId: "testproject-bf9f7",
    storageBucket: "testproject-bf9f7.appspot.com",
    messagingSenderId: "46747474287",
    appId: "1:46747474287:web:dc61a9b1a5c2d23744b09a",
    measurementId: "G-Z6NVLVL9ZD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);
  getToken(messaging, { vapidKey: 'BKPJwTVI2k53GAIFmzKrR6fCqGdZ72i_BEgQ5DRSi5EDMlatz4TQls8MKN-mRSlQ3ApMkhD-6roucInv2bP8jNk' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      setToken(currentToken)
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const actions = [
    { icon: <AcUnitIcon />, name: 'AC' },
    { icon: <LightbulbIcon />, name: 'Light' },
    { icon: <CurtainsIcon />, name: 'Curtain' },
    { icon: <SpeakerIcon />, name: 'Speaker' },
  ];
  return (
    <HOC name="Dashboard">
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <h1>FCM Token</h1>
        <Typography paragraph>
          {token}
        </Typography>
        <Typography paragraph>
          Best of luck.
        </Typography>
      </Box>
      <Box>
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: 'absolute', bottom: 40, right: 40 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    </HOC>
  )
}

export default Dashboard;