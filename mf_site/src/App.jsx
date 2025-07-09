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

  const handleScrollTo = (section, smooth = true) => { // smooth parametresi eklendi
    let targetRef = null;
    let targetHash = null;

    if (section === "hakkimda") {
      targetRef = hakkimdaRef;
      targetHash = "#hakkimda";
    } else if (section === "anasayfa") {
      targetRef = anasayfaRef;
      targetHash = ""; // Anasayfa için hash olmaması gerekiyor
    } else if (section === "yeteneklerim") {
      targetRef = yeteneklerimRef;
      targetHash = "#yeteneklerim";
    } else if (section === "deneyim") {
      targetRef = deneyimRef;
      targetHash = "#deneyim";
    } else if (section === "projelerim") {
      targetRef = projelerimRef;
      targetHash = "#projelerim";
    } else if (section === "iletisim") {
      targetRef = iletisimRef;
      targetHash = "#iletisim";
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: smooth ? "smooth" : "instant" }); // smooth parametresine göre kaydırma
      if (targetHash) {
        window.location.hash = targetHash;
      } else {
        history.replaceState(null, null, window.location.pathname + window.location.search);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!initialScrollDone.current) return;
      
      const scrollY = window.scrollY;
      const offset = 130;
      
      // Anasayfa için özel kontrol - scroll pozisyonu çok üstteyse
      if (scrollY < 50) {
        setActiveSection("anasayfa");
        if (window.location.hash) {
          history.replaceState(null, null, window.location.pathname + window.location.search);
        }
        return;
      }
      
      // Diğer bölümler için kontrol
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
            currentActive = section.id; // orijinal id'yi ata
            break;
          }
        }
      }

      if (activeSection !== currentActive) {
        setActiveSection(currentActive);
      }

      if (currentActive === "anasayfa") {
        if (window.location.hash) {
          history.replaceState(null, null, window.location.pathname + window.location.search);
        }
      } else {
        if (window.location.hash !== `#${currentActive}`) {
          window.location.hash = `#${currentActive}`;
        }
      }
    };

    const hash = window.location.hash.replace('#', '');
    let initialSection = hash || "anasayfa"; // Başlangıçta hangi bölümün aktif olacağını belirle

    // İlk render'da aktif bölümü ayarla
    setActiveSection(initialSection);

    // Tüm bileşenlerin ve ref'lerin yüklenmesini bekle, ardından kaydır ve içeriği göster
    // Bu setTimeout'u biraz daha uzun tutarak, tarayıcının tüm DOM'u çizmesine zaman tanıyoruz
    setTimeout(() => {
      if (initialSection !== "anasayfa") {
        handleScrollTo(initialSection, false); // İlk kaydırmayı anında yap
      }
      setContentLoaded(true); // İçerik yüklendi, artık gösterebiliriz
      initialScrollDone.current = true;
      window.addEventListener("scroll", handleScroll);
    },1); // 100ms'lik bir gecikme genellikle yeterli olur. Eğer hala yanıp sönüyorsa artırılabilir.


    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Bağımlılık dizisini boş bırakıyoruz, sadece bir kez çalışsın

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
          </div>
          <div ref={hakkimdaRef} style={{ display: activeSection === "hakkimda" || contentLoaded ? 'block' : 'none' }}>
            <Hakkimda />
          </div>
          <div ref={yeteneklerimRef} style={{ display: activeSection === "yeteneklerim" || contentLoaded ? 'block' : 'none' }}>
            <Yeteneklerim />
          </div>
          <div ref={deneyimRef} style={{ display: activeSection === "deneyim" || contentLoaded ? 'block' : 'none' }}>
            <Deneyim />
          </div>
          <div ref={projelerimRef} style={{ display: activeSection === "projelerim" || contentLoaded ? 'block' : 'none' }}>
            <Projelerim />
          </div>
          <div ref={iletisimRef} style={{ display: activeSection === "iletisim" || contentLoaded ? 'block' : 'none' }}>
            <Iletisim />
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function normalizeId(str) {
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