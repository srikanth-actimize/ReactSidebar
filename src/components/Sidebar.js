// import React from 'react';
// import { Link } from 'react-router-dom';
// import { SidebarData} from '../data/SidebarData';

// import Box from "@mui/material/Box";
// import { Typography } from '@mui/material';
// import Paper from '@mui/material/Paper';
// import MenuList from '@mui/material/MenuList';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';

// import { useNavigate } from 'react-router-dom';


// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import Collapse from '@mui/material/Collapse';
// import StarBorder from '@mui/icons-material/StarBorder';
// import { useState } from 'react';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import { maxHeight } from '@mui/system';
// import Sample from '../pages/Sample';


// const Sidebar = () => {
// //  const navigate = useNavigate();
// //  const [open, setOpen] = useState(true);

// //  const handleClick = () => {
// //    setOpen(!open);
// //  };


//   return (
//     <>
//     <Paper  sx={{ height:900,maxHeight:'100%'}}>
      
//     {/* <MenuList>
//       {SidebarData.map((item, index) => {
//        return(
//       <MenuItem key={index} onClick={()=>(navigate(item.path))}>
//           <ListItemIcon >
//           {item.icon}
//           </ListItemIcon>
//           <ListItemText> 
//           {item.name}
//           </ListItemText>
//         </MenuItem>

//        ) })}
// </MenuList> */}

//   {/* <MenuList>
//     {SidebarData.map((item)=>
//     <MenuItem>
//       <ListItemIcon> {item.icon}</ListItemIcon>
//       <ListItemText> {item.name}</ListItemText>
//       <ListItemText>{
//         item.subData.map((data)=>
//         <MenuItem>
//           <ListItemText>{data.path}</ListItemText>
//         </MenuItem>)
//         }</ListItemText>
//     </MenuItem>
//     )}
//   </MenuList>
  

// <Sample/> */}




// <SidebarData/>


// </Paper>







//       </>
//   )
// }

// export default Sidebar;

// import React, { useState } from "react";
// // import List from "@material-ui/core/List";
// import List from '@mui/material/List';
// import ListItem from "@mui/material/ListItem";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import CategoryIcon from "@mui/icons-material/Category";
// import PeopleIcon from '@mui/icons-material/People';
// import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
// import LogoutIcon from '@mui/icons-material/Logout';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
// import AddTaskIcon from '@mui/icons-material/AddTask';

// // import ListItemIcon from "@material-ui/core/ListItemIcon";
// // import ListItemText from "@material-ui/core/ListItemText";
// import Collapse from "@mui/material/Collapse";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemButton from '@mui/material/ListItemButton';
// import { Link } from "react-router-dom";

// // import { hasChildren } from "./utils";





// const menu = [
//   {
//     icon: <DashboardIcon />,
//     title: "Dashboard",
//     path:"/dashboard",
//     items: []
//   },
//   {
//     title: "Profile",
//     path: "/profiles",
//     icon: <PeopleIcon />,
//     items: [
//       {
//         title: "PersonalDetails",
//         path: "/profiles/personaldetails"
//       },
//       {
//         title: "FamilyDetails",
//         path: "/profiles/familydetails"
//       },
//       {
//         title: "EmergencyDetails",
//         path: "/profiles/emergencydetails"
//       }
//       // {
//       //   title: "UserProfile",
//       //   path: "/profiles/userprofile"
//       // }
//     ]
//   },
//   {
//     icon: <WorkHistoryIcon />,
//     title: "Product List",
//     path:"/productlist",
//     items: []
//   },
//   {
//     title: "Tasks",
//     path: "/tasks",
//     icon: <AddTaskIcon />,
//     items: [
//       {
//         title: "PersonalDetails",
//         path: "/tasks/personaldetails"
//       },
//       {
//         title: "FamilyDetails",
//         path: "/tasks/familydetails"
//       },
//       {
//         title: "EmergencyDetails",
//         path: "/tasks/emergencydetails"
//       }
//       // {
//       //   title: "UserProfile",
//       //   path: "/profiles/userprofile"
//       // }
//     ]
//   },
 
//   {
//     icon: <CategoryIcon />,
//     title: "Bank Details",
//     path:"/bankdetails",
//     items: []
//   },
//   {
//     icon: <CalendarMonthIcon />,
//     title: "Leaves",
//     path:"/leaves",
//     items: [
//       {
//         title: "My Projects",
//         to: "/leaves/myprojects"
//       },
//       {
//         title: "My Projects",
//         to: "/leaves/myprojects"
//       },
//       {
//         title: "My Projects",
//         to: "/leaves/myprojects"
//       }
//     ]
//   },
//   {
//     icon: <LogoutIcon />,
//     title: "Logout",
//     path:"/logout",
//     items: []
//   }
// ];

// const hasChildren = (item) => {
//   const { items: children } = item;

//   if (children === undefined) {
//     return false;
//   }

//   if (children.constructor !== Array) {
//     return false;
//   }

//   if (children.length === 0) {
//     return false;
//   }

//   return true;
// };

// const MenuItem = ({ item }) => {
//   const Component = hasChildren(item) ? MultiLevel : SingleLevel;
//   return <Component item={item} />;
// };

// const SingleLevel = ({ item }) => {
//   return (
//     <ListItemButton>
//       <ListItemIcon>{item.icon}</ListItemIcon>
//       <ListItemText primary={item.title} />
//     </ListItemButton>
//   );
// };

// const MultiLevel = ({ item }) => {
//   const { items: children } = item;
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <ListItemButton onClick={handleClick}>
//         <ListItemIcon>{item.icon}</ListItemIcon>
//         <ListItemText primary={item.title} />
//         {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           {children.map((child, key) => (
//             <MenuItem key={key} item={child} />
//           ))}
//         </List>
//       </Collapse>
//     </>
//   );
// }; 

import React, { useState } from "react";
import List from '@mui/material/List';

import { SidebarData} from './SidebarData';
// import { useNavigate } from 'react-router-dom';
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
// import { useNavigate } from "react-router-dom";




const Sidebar = () => {
  
   return SidebarData.map((item, path) => <MenuItem key={path} item={item}  ></MenuItem>);


};







const hasChildren = (item) => {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
};

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  return (
    <ListItemButton>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
      
    </ListItemButton>
  );
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
       
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, path) => (
            <MenuItem key={path} item={child} />
          ))}
        </List>
      </Collapse>
    </>
  );
};





export default Sidebar;






