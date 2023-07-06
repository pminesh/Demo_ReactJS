import React from 'react'
import HOC from '../../components/hoc/HOC'
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Area = () => {
  return (
    <HOC name="Area">
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <h1>Area</h1>
        <Typography paragraph>
          This is Area page.
        </Typography>
        <Typography paragraph>
          Best of luck.
        </Typography>
      </Box>
    </HOC>
  )
}

export default Area;