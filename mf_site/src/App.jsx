import React, { useRef, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Hakkimda from "./hakkimda/Hakkimda";
import Yeteneklerim from "./yeteneklerim/Yeteneklerim";
import Deneyim from "./deneyim/Deneyim";
import Projelerim from "./projelerim/Projelerim";
import Iletisim from "./iletisim/Iletisim";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const anasayfaRef = useRef(null);
  const hakkimdaRef = useRef(null);
  const yeteneklerimRef = useRef(null);
  const deneyimRef = useRef(null);
  const projelerimRef = useRef(null);
  const iletisimRef = useRef(null);
  const [activeSection, setActiveSection] = useState("anasayfa");
  const [contentLoaded, setContentLoaded] = useState(false); // Yeni state: İçerik yüklendi mi?
  const initialScrollDone = useRef(false);

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

  const sectionToPath = {
    anasayfa: '/',
    hakkimda: '/hakkimda',
    yeteneklerim: '/yeteneklerim',
    deneyim: '/deneyim',
    projelerim: '/projelerim',
    iletisim: '/iletisim',
  };
  const pathToSection = {
    '/': 'anasayfa',
    '/hakkimda': 'hakkimda',
    '/yeteneklerim': 'yeteneklerim',
    '/deneyim': 'deneyim',
    '/projelerim': 'projelerim',
    '/iletisim': 'iletisim',
  };

  const handleScrollTo = (section, smooth = true) => {
    let targetRef = null;
    if (section === "hakkimda") {
      targetRef = hakkimdaRef;
    } else if (section === "anasayfa") {
      targetRef = anasayfaRef;
    } else if (section === "yeteneklerim") {
      targetRef = yeteneklerimRef;
    } else if (section === "deneyim") {
      targetRef = deneyimRef;
    } else if (section === "projelerim") {
      targetRef = projelerimRef;
    } else if (section === "iletisim") {
      targetRef = iletisimRef;
    }
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: smooth ? "smooth" : "instant" });
      const newPath = sectionToPath[section] || '/';
      if (window.location.pathname !== newPath) {
        window.history.pushState({}, '', newPath);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!initialScrollDone.current) return;
      const scrollY = window.scrollY;
      const offset = 130;
      if (scrollY < 50) {
        setActiveSection("anasayfa");
        if (window.location.pathname !== '/') {
          window.history.replaceState({}, '', '/');
        }
        return;
      }
      const sections = [
        { id: "hakkimda", ref: hakkimdaRef },
        { id: "yeteneklerim", ref: yeteneklerimRef },
        { id: "deneyim", ref: deneyimRef },
        { id: "projelerim", ref: projelerimRef },
        { id: "iletisim", ref: iletisimRef },
      ];
      let currentActive = "anasayfa";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const top = section.ref.current.offsetTop;
          const height = section.ref.current.offsetHeight;
          if (scrollY + offset >= top && scrollY + offset < top + height) {
            currentActive = section.id;
            break;
          }
        }
      }
      if (activeSection !== currentActive) {
        setActiveSection(currentActive);
      }
      const newPath = sectionToPath[currentActive] || '/';
      if (window.location.pathname !== newPath) {
        window.history.replaceState({}, '', newPath);
      }
    };

    // İlk açılışta path'e göre scroll
    const currentPath = window.location.pathname;
    let initialSection = pathToSection[currentPath] || 'anasayfa';
    setActiveSection(initialSection);
    setTimeout(() => {
      if (initialSection !== "anasayfa") {
        handleScrollTo(initialSection, false);
      }
      setContentLoaded(true);
      initialScrollDone.current = true;
      window.addEventListener("scroll", handleScroll);
    }, 1);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", width: "100vw", minWidth: "100vw", pt: '64px' }}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onScrollTo={(section) => handleScrollTo(section, true)} // Navbar'dan gelenler smooth olsun
          activeMenu={normalizeId(activeSection)}
        />
        {/* contentLoaded false ise sadece ilgili bölümü render et veya hiçbir şey gösterme */}
        {/* contentLoaded true ise tüm bölümleri normal şekilde render et */}
        <Box sx={{
          opacity: contentLoaded ? 1 : 0, // İçerik yüklendiğinde görünür yap
          transition: 'opacity 0.001s ease-in-out', // Yumuşak geçiş efekti
          minHeight: 'calc(100vh - 64px)', // Navbar'ın kapladığı alanı düş
          display: 'flex', // Tüm bölümleri Flexbox ile dikeyde hizala
          flexDirection: 'column',
        }}>
          <div ref={anasayfaRef} style={{ display: activeSection === "anasayfa" || contentLoaded ? 'block' : 'none' }}>
            <Home />
            <Divider sx={{ my: 4, borderColor: 'divider', borderBottomWidth: 2, width: '100%' }} />
          </div>
          <div ref={hakkimdaRef} style={{ display: activeSection === "hakkimda" || contentLoaded ? 'block' : 'none' }}>
            <Hakkimda />
            <Divider sx={{ my: 4, borderColor: 'divider', borderBottomWidth: 2, width: '100%' }} />
          </div>
          <div ref={yeteneklerimRef} style={{ display: activeSection === "yeteneklerim" || contentLoaded ? 'block' : 'none' }}>
            <Yeteneklerim />
            <Divider sx={{ my: 4, borderColor: 'divider', borderBottomWidth: 2, width: '100%' }} />
          </div>
          <div ref={deneyimRef} style={{ display: activeSection === "deneyim" || contentLoaded ? 'block' : 'none' }}>
            <Deneyim />
            <Divider sx={{ my: 4, borderColor: 'divider', borderBottomWidth: 2, width: '100%' }} />
          </div>
          <div ref={projelerimRef} style={{ display: activeSection === "projelerim" || contentLoaded ? 'block' : 'none' }}>
            <Projelerim />
            <Divider sx={{ my: 4, borderColor: 'divider', borderBottomWidth: 2, width: '100%' }} />
          </div>
          <div ref={iletisimRef} style={{ display: activeSection === "iletisim" || contentLoaded ? 'block' : 'none' }}>
            <Iletisim />
            <Divider sx={{ my: 4, borderColor: 'divider', borderBottomWidth: 2, width: '100%' }} />
          </div>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}function normalizeId(str) {
  return str
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/\s+/g, '');
}