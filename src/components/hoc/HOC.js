import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Higher-Order Components(HOC)

const HOC = (props) => {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <div >
          <Header />
        </div>
        <div>
          <Sidebar />
        </div>
        <div>
          {props.children}
        </div>
      </Box>
    </div>
  )
}

export default HOC