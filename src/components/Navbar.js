import React from "react";
import Drawer from "@mui/material/Drawer";
import {
  IconButton,
  
  Typography,
} from "@mui/material";

// import HomeIcon from "@mui/icons-material/Home";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import Box from "@mui/material/Box";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Sidebar from './Sidebar';





const drawerWidth = 240;

const Navbar = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setIsDrawerOpen(true);
              }}
            >
               
              <MenuIcon>
             
              </MenuIcon>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Actimize
            </Typography>
            <Button color="inherit">Login</Button>
          
      <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
      
          </Toolbar>
          
       
     
        <Drawer
        
          position="permanent"
          anchor="left"
          open={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
          }}
        >
          <Box p={2} >
            <Typography variant="h6" align="right" >
             
              <IconButton
                size="small"
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            
            </Typography>
            <Sidebar/>
          
          </Box>
        </Drawer>
        </AppBar>
      </Box>
<div>{children}</div>
     
    </>
  );
};

export default Navbar;
