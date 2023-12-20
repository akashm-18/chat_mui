import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
   const [mode, setMode] = useState("light");
   const darkTheme = createTheme({
      palette: { mode: mode },
   });

   return (
      <ThemeProvider theme={darkTheme}>
         <Box bgcolor={"background.default"} color={"text.primary"}>
            <NavBar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
               <SideBar setMode={setMode} mode={mode} />
               <Feed />
               <RightBar />
            </Stack>
            <Add />
         </Box>
      </ThemeProvider>
   );
}

export default App;
