import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box'; 
import Sidebar from '../components/Sidebar';

const About = () => {
  return (
    <div>
         <Box>
          <Sidebar/>
      <Typography
       variant="h6"
       color="secondary"
       align='center'
       >
    Welcome to About page
   
      </Typography>
      </Box>
    </div>
  )
}

export default About;