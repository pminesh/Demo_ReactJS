import React from 'react'
import HOC from '../../components/hoc/HOC'
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Scene = () => {
  return (
    <HOC name="Scene">
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <h1>Scene</h1>
        <Typography paragraph>
          This is Scene page.
        </Typography>
        <Typography paragraph>
          Best of luck.
        </Typography>
      </Box>
    </HOC>
  )
}

export default Scene;