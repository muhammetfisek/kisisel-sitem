import React, { useRef, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from "./navbar/Navbar";
import Home from "./pages/home/Home";
import Hakkimda from "./pages/hakkimda/Hakkimda";
import Yeteneklerim from "./pages/yeteneklerim/Yeteneklerim";
import Deneyim from "./pages/deneyim/Deneyim";
import Projelerim from "./pages/projelerim/Projelerim";
import Iletisim from "./pages/iletisim/Iletisim";
import Footer from "./footer/Footer";
import Divider from "@mui/material/Divider";
import { useLocation, useNavigate } from 'react-router-dom';
import AIChatWidget from "./aiassistant/AIChatWidget";

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
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTriggeredRef = useRef(false);
  
  // Mobil kontrolü
  const isMobile = useMediaQuery('(max-width:768px)');

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

  // Menüden tıklama ile scroll
  const handleScrollTo = (section, smooth = true) => {
    if (section === "anasayfa") {
      // Anasayfa için en üste scroll yap
      scrollTriggeredRef.current = false; // Menüden tıklama ile scroll
      window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "instant" });
      return;
    }
    
    let targetRef = null;
    if (section === "hakkimda") targetRef = hakkimdaRef;
    else if (section === "yeteneklerim") targetRef = yeteneklerimRef;
    else if (section === "deneyim") targetRef = deneyimRef;
    else if (section === "projelerim") targetRef = projelerimRef;
    else if (section === "iletisim") targetRef = iletisimRef;
    
    if (targetRef && targetRef.current) {
      scrollTriggeredRef.current = false; // Menüden tıklama ile scroll
      
      if (isMobile) {
        // Mobil için özel scroll davranışı
        const element = targetRef.current;
        const navbarHeight = 64;
        const elementTop = element.offsetTop;
        const scrollPosition = elementTop - navbarHeight; // Ekstra boşluğu kaldırdım
        
        window.scrollTo({ 
          top: Math.max(0, scrollPosition), 
          behavior: smooth ? "smooth" : "instant" 
        });
      } else {
        // Desktop için eski davranış (düzgün çalışan)
        targetRef.current.scrollIntoView({ behavior: smooth ? "smooth" : "instant" });
      }
    }
  };

  useEffect(() => {
    const section = pathToSection[location.pathname] || 'anasayfa';
    setActiveSection(section); // önce aktif bölümü path'e göre ayarla
    
    // Sadece menüden tıklama veya ilk yüklemede scroll yap
    if (!scrollTriggeredRef.current) {
      setTimeout(() => {
        handleScrollTo(section, false);
        setContentLoaded(true);
        initialScrollDone.current = true;
      }, isMobile ? 100 : 1); // Mobilde biraz daha beklet
    }
    // eslint-disable-next-line
  }, [location.pathname, isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (!initialScrollDone.current) return;
      scrollTriggeredRef.current = true; // Scroll event'i ile path değişimi
      const scrollY = window.scrollY;
      const offset = isMobile ? 80 : 130; // Mobilde offset'i azalttım
      
      if (scrollY < 50) {
        if (activeSection !== "anasayfa") setActiveSection("anasayfa");
        if (location.pathname !== '/') {
          navigate('/', { replace: true });
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
      if (location.pathname !== newPath) {
        navigate(newPath, { replace: true });
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [activeSection, location.pathname, isMobile]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", width: "100vw", minWidth: "100vw", pt: '64px' }}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onScrollTo={(section) => handleScrollTo(section, true)} // Navbar'dan gelenler smooth olsun
          activePath={location.pathname}
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
            <Home onScrollTo={handleScrollTo} />
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
          </div>
        </Box>
        <Footer />
        <AIChatWidget />
      </Box>
    </ThemeProvider>
  );
}
