import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box'; 
import Sidebar from '../components/Sidebar';

const BankDetails = () => {
  return (
    <div>
        
        <Box p={20}>
        <Sidebar/>
      <Typography
       variant="h6"
       color="primary"
       align='center'
       >
    Welcome to BankDetails page
    
      </Typography>
      </Box>

    </div>
  )
}

export default BankDetails;