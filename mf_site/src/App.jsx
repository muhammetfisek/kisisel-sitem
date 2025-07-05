import React, { useRef } from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Hakkimda from "./hakkimda/Hakkimda";
import Yeteneklerim from "./yeteneklerim/Yeteneklerim";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const anasayfaRef = useRef(null);
  const hakkimdaRef = useRef(null);
  const yeteneklerimRef = useRef(null);

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

  const handleScrollTo = (section) => {
    if (section === "hakkimda" && hakkimdaRef.current) {
      hakkimdaRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "anasayfa" && anasayfaRef.current) {
      anasayfaRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "yeteneklerim" && yeteneklerimRef.current) {
      yeteneklerimRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", width: "100vw", minWidth: "100vw", pt: '64px' }}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onScrollTo={handleScrollTo} />
        <div ref={anasayfaRef} />
        <Home />
        <div ref={hakkimdaRef} />
        <Hakkimda />
        <div ref={yeteneklerimRef} />
        <Yeteneklerim />
      </Box>
    </ThemeProvider>
  );
}
