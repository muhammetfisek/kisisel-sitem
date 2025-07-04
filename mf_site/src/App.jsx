import React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode ? "#101014" : "#f5f5f5",
            paper: darkMode ? "#181a20" : "#fff",
          },
          primary: {
            main: darkMode ? "#00c6fb" : "#1976d2",
          },
          secondary: {
            main: darkMode ? "#1de9b6" : "#00bfae",
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", width: "100vw", minWidth: "100vw" }}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
      </Box>
    </ThemeProvider>
  );
}
