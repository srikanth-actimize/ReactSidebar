// import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';

// export default function NestedList() {
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <List
//       sx={{ width: '100%', bgcolor: 'background.paper' }}
//       // component="nav"
//       // aria-labelledby="nested-list-subheader"
//       // subheader={
//       //   <ListSubheader component="div" id="nested-list-subheader">
//       //     Nested List Items
//       //   </ListSubheader>
//       // }
//     >
//       <ListItemButton>
//         <ListItemIcon>
//           <SendIcon />
//         </ListItemIcon>
//         <ListItemText primary="Sent mail" />
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <DraftsIcon />
//         </ListItemIcon>
//         <ListItemText primary="Drafts" />
//       </ListItemButton>
//       <ListItemButton onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Inbox" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <ListItemText primary="Starred" />
//           </ListItemButton>
//         </List>
//       </Collapse>
//       <List
//       // sx={{ width: '100%', bgcolor: 'background.paper' }}
//       // component="nav"
//       // aria-labelledby="nested-list-subheader"
//       // subheader={
//       //   <ListSubheader component="div" id="nested-list-subheader">
//       //     Nested List Items
//       //   </ListSubheader>
//       // }
//     >
//       {/* <ListItemButton> */}
//         {/* <ListItemIcon>
//           <SendIcon />
//         </ListItemIcon> */}
//         {/* <ListItemText primary="Sent mail" /> */}
//       {/* </ListItemButton> */}
//       {/* <ListItemButton>
//         <ListItemIcon>
//           <DraftsIcon />
//         </ListItemIcon>
//         <ListItemText primary="Drafts" />
//       </ListItemButton> */}
//       <ListItemButton onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Inbox" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <ListItemText primary="Starred" />
//           </ListItemButton>
//         </List>
//       </Collapse>
//     </List>
//     </List>
    
//   );
// }


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




const SidebarData = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    path:"/dashboard",
    items: []
  },
  {
    title: "Profile",
    path: "/profiles",
    icon: <PeopleIcon />,
    items: [
      {
        title: "PersonalDetails",
        path: "/profiles/personaldetails"
      },
      {
        title: "FamilyDetails",
        path: "/profiles/familydetails"
      },
      {
        title: "EmergencyDetails",
        path: "/profiles/emergencydetails"
      }
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
    items: []
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <AddTaskIcon />,
    items: [
      {
        title: "PersonalDetails",
        path: "/tasks/personaldetails"
      },
      {
        title: "FamilyDetails",
        path: "/tasks/familydetails"
      },
      {
        title: "EmergencyDetails",
        path: "/tasks/emergencydetails"
      }
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
    items: []
  },
  {
    icon: <CalendarMonthIcon />,
    title: "Leaves",
    path:"/leaves",
    items: [
      {
        title: "My Projects",
        to: "/leaves/myprojects"
      },
      {
        title: "My Projects",
        to: "/leaves/myprojects"
      },
      {
        title: "My Projects",
        to: "/leaves/myprojects"
      }
    ]
  },
  {
    icon: <LogoutIcon />,
    title: "Logout",
    path:"/logout",
    items: []
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