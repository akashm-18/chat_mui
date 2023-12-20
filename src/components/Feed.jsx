import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
   return (
      <Box bgcolor="" flex={6} p={2}>
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
      </Box>
   );
};

export default Feed;
