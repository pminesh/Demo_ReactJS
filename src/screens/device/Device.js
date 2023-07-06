import React from 'react'
import HOC from '../../components/hoc/HOC'
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Device = () => {
  return (
    <HOC name="Device">
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <h1>Device</h1>
        <Typography paragraph>
          This is Device page.
        </Typography>
        <Typography paragraph>
          Best of luck.
        </Typography>
      </Box>
    </HOC>
  )
}

export default Device;