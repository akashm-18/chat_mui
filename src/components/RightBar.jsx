import {
   Avatar,
   AvatarGroup,
   Box,
   ImageList,
   ImageListItem,
   Typography,
} from "@mui/material";
import React from "react";
import Conversations from "./Conversations";

const RightBar = () => {
   return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
         <Box position="fixed" width={300}>
            <Typography variant="h6" fontWeight={100}>
               Online Friends
            </Typography>
            <AvatarGroup max={7}>
               <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600"
               />
               <Avatar
                  alt="Travis Howard"
                  src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600"
               />
               <Avatar
                  alt="Cindy Baker"
                  src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600"
               />
               <Avatar
                  alt="Agnes Walker"
                  src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600"
               />
            </AvatarGroup>
            <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
               Latest Photos
            </Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
               <ImageListItem>
                  <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
               </ImageListItem>
               <ImageListItem>
                  <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
               </ImageListItem>
               <ImageListItem>
                  <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
               </ImageListItem>
               <ImageListItem>
                  <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
               </ImageListItem>
               <ImageListItem>
                  <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
               </ImageListItem>
            </ImageList>
            <Typography variant="h6" fontWeight={100} mt={2}>
               Latest Conversations
            </Typography>
            <Conversations />
         </Box>
      </Box>
   );
};

export default RightBar;
