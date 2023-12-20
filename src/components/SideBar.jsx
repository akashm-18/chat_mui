import { AccountBox, Home, NightsStay, Settings } from "@mui/icons-material";
import {
   Box,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Switch,
} from "@mui/material";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DescriptionIcon from "@mui/icons-material/Description";
import StoreIcon from "@mui/icons-material/Store";

const SideBar = ({ mode, setMode }) => {
   return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
         <Box position="fixed">
            <List>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <Home />
                     </ListItemIcon>
                     <ListItemText primary="Homepage" />
                  </ListItemButton>
               </ListItem>

               <ListItem disablePadding>
                  <ListItemButton component="a" href="#Group">
                     <ListItemIcon>
                        <Diversity3Icon />
                     </ListItemIcon>
                     <ListItemText primary="Groups" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#friends">
                     <ListItemIcon>
                        <GroupIcon />
                     </ListItemIcon>
                     <ListItemText primary="Friends" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#pages">
                     <ListItemIcon>
                        <DescriptionIcon />
                     </ListItemIcon>
                     <ListItemText primary="Pages" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#store">
                     <ListItemIcon>
                        <StoreIcon />
                     </ListItemIcon>
                     <ListItemText primary="Store" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#Account">
                     <ListItemIcon>
                        <AccountBox />
                     </ListItemIcon>
                     <ListItemText primary="Account" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#settings">
                     <ListItemIcon>
                        <Settings />
                     </ListItemIcon>
                     <ListItemText primary="settings" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#settings">
                     <ListItemIcon>
                        <NightsStay />
                     </ListItemIcon>
                     <Switch
                        onChange={(e) =>
                           setMode(mode === "light" ? "dark" : "light")
                        }
                     />
                  </ListItemButton>
               </ListItem>
            </List>
         </Box>
      </Box>
   );
};

export default SideBar;
