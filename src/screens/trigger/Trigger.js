import React from 'react'
import HOC from '../../components/hoc/HOC'
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Trigger = () => {
  return (
    <HOC name="Trigger">
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <h1>Trigger</h1>
        <Typography paragraph>
          This is Trigger page.
        </Typography>
        <Typography paragraph>
          Best of luck.
        </Typography>
      </Box>
    </HOC>
  )
}

export default Trigger;