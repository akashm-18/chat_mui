import PetsIcon from "@mui/icons-material/Pets";
import {
   AppBar,
   Avatar,
   Badge,
   Box,
   InputBase,
   Menu,
   MenuItem,
   Toolbar,
   Typography,
   styled,
} from "@mui/material";
import React, { useState } from "react";
import { borderRadius } from "@mui/system";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
   backgroundColor: "white",
   padding: "0 10px",
   borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
   display: "none",
   gap: "20px",
   alignItems: "center",
   [theme.breakpoints.up("sm")]: {
      display: "flex",
   },
}));

const UserBox = styled(Box)(({ theme }) => ({
   display: "none",
   gap: "10px",
   alignItems: "center",
   [theme.breakpoints.down("sm")]: {
      display: "flex",
   },
}));

const NavBar = () => {
   const [open, setOpen] = useState(false);
   return (
      <AppBar position="sticky">
         <StyledToolbar>
            <Typography
               variant="h6"
               sx={{ display: { xs: "none", sm: "block" } }}>
               Chat Application
            </Typography>
            <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
            <Search>
               <InputBase placeholder="search..." />
            </Search>
            <Icons>
               <Badge badgeContent={4} color="error">
                  <Mail />
               </Badge>
               <Badge badgeContent={2} color="error">
                  <Notifications />
               </Badge>
               <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  onClick={(e) => setOpen(true)}
               />
            </Icons>
            <UserBox>
               <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  onClick={(e) => setOpen(true)}
               />
               <Typography variant="span">John</Typography>
            </UserBox>
         </StyledToolbar>
         <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
            transformOrigin={{
               vertical: "top",
               horizontal: "right",
            }}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
         </Menu>
      </AppBar>
   );
};

export default NavBar;
