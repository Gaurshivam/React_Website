import Feed from "./componenets/Feed";
import Rightbar from "./componenets/Rightbar";
import Sidebar from "./componenets/Sidebar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./componenets/Navbar";
import Add from "./componenets/Add";
import { useState } from "react";

 
function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })



  return (
    <ThemeProvider theme={darkTheme}>
    <Box  bgcolor={"background.default"} color={"text.primary"}>
    <Navbar />
    <Stack direction="row" spacing={2} justifyContent="space-between">
     <Sidebar  setMode={setMode} mode={mode} />
     <Feed />
     <Rightbar />
    </Stack>
    <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
