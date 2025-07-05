import React, { useRef, useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("anasayfa");

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
      window.location.hash = "#hakkimda";
    } else if (section === "anasayfa" && anasayfaRef.current) {
      anasayfaRef.current.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, window.location.pathname + window.location.search);
    } else if (section === "yeteneklerim" && yeteneklerimRef.current) {
      yeteneklerimRef.current.scrollIntoView({ behavior: "smooth" });
      window.location.hash = "#yeteneklerim";
    }
  };

  useEffect(() => {
    // Sayfa yüklendiğinde hash varsa ilgili bölüme scroll yap
    const handleInitialLoad = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          handleScrollTo(hash);
        }, 100);
      }
    };
    handleInitialLoad();
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 130; // Navbar yüksekliği kadar offset
      const sections = [
        { id: "anasayfa", ref: anasayfaRef },
        { id: "hakkimda", ref: hakkimdaRef },
        { id: "yeteneklerim", ref: yeteneklerimRef },
      ];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const top = section.ref.current.offsetTop;
          if (scrollY + offset >= top) {
            setActiveSection(section.id);
            // Hash güncellemesi: ana sayfa ise hash'i sil, diğerlerinde hash'i ayarla
            if (section.id === "anasayfa") {
              if (window.location.hash) {
                history.replaceState(null, null, window.location.pathname + window.location.search);
              }
            } else {
              if (window.location.hash !== `#${section.id}`) {
                window.location.hash = `#${section.id}`;
              }
            }
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", width: "100vw", minWidth: "100vw", pt: '64px' }}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onScrollTo={handleScrollTo}
          activeMenu={activeSection}
        />
        <div ref={anasayfaRef}>
          <Home />
        </div>
        <div ref={hakkimdaRef}>
          <Hakkimda />
        </div>
        <div ref={yeteneklerimRef}>
          <Yeteneklerim />
        </div>
      </Box>
    </ThemeProvider>
  );
}
