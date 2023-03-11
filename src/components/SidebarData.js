import React, { useState } from "react";
// import List from "@material-ui/core/List";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from '@mui/icons-material/People';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AddTaskIcon from '@mui/icons-material/AddTask';

// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from "react-router-dom";

// import { hasChildren } from "./utils";




export const SidebarData = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    path:"/dashboard",
    
    
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <PeopleIcon />,
    items: [
      {
        title: "Personal Details",
        path: "/profile/personaldetails"
      },
      {
        title: "Family Details",
        path: "/profile/familydetails"
      },
      {
        title: "Emergency Details",
        path: "/profile/emergencydetails"
      },
      // {
      //   title: "UserProfile",
      //   path: "/profiles/userprofile"
      // }
    ]
  },
  {
    icon: <WorkHistoryIcon />,
    title: "Product List",
    path:"/productlist",
    
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <AddTaskIcon />,
    items: [
      {
        title: "Experince Skills",
        path: "/tasks/experienceskills"
      },
      {
        title: "My Projects",
        path: "/tasks/myprojects"
      },
      // {
      //   title: "EmergencyDetails",
      //   path: "/tasks/experinceskills"
      // }
      // {
      //   title: "UserProfile",
      //   path: "/profiles/userprofile"
      // }
    ]
  },
 
  {
    icon: <CategoryIcon />,
    title: "Bank Details",
    path:"/bankdetails",
   
  },
  // {
  //   icon: <CalendarMonthIcon />,
  //   title: "Leaves",
  //   path:"/leaves",
  //   items: [
  //     {
  //       title: "My Projects",
  //       to: "/leaves/myprojects"
  //     },
  //     {
  //       title: "My Projects",
  //       to: "/leaves/myprojects"
  //     },
  //     {
  //       title: "My Projects",
  //       to: "/leaves/myprojects"
  //     }
  //   ]
  // },
  {
    icon: <LogoutIcon />,
    title: "Logout",
    path:"/logout",
   
  }
];

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