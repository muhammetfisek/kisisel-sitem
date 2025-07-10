import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import NavbarMenu from "./components/NavbarMenu";
import NavbarDrawer from "./components/NavbarDrawer";
import DarkModeToggle from "./components/DarkModeToggle";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Menüdeki sayfalar
const menuItems = [
  { label: "Ana Sayfa", path: "/", section: "anasayfa" },
  { label: "Hakkımda", path: "/hakkimda", section: "hakkimda" },
  { label: "Yeteneklerim", path: "/yeteneklerim", section: "yeteneklerim" },
  { label: "Deneyim", path: "/deneyim", section: "deneyim" },
  { label: "Projelerim", path: "/projelerim", section: "projelerim" },
  { label: "İletişim", path: "/iletisim", section: "iletisim" },
];

// Navbar ana componenti
export default function Navbar({ darkMode, setDarkMode, onScrollTo, activePath }) {
  // Drawer (mobil menü) açık mı?
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  // Menüye tıklanınca yönlendirme ve drawer kapama
  const handleMenuClick = (item) => {
    navigate(item.path);
    setDrawerOpen(false);
    if (onScrollTo) onScrollTo(item.section);
  };

  return (
    // Sabit üst bar
    <AppBar position="fixed" sx={{ bgcolor: "background.paper", zIndex: (theme) => theme.zIndex.drawer + 2 }}>
      <Toolbar sx={{ justifyContent: "center", position: "relative", minHeight: 64, px: { xs: 1, sm: 2 } }}>
        {/* Sol: Dark Mode Toggle */}
        <Box sx={{ position: "absolute", left: 8, display: "flex", alignItems: "center", height: 1 }}>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>
        {/* Orta: Menü veya Hamburger */}
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ mx: "auto" }}
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <NavbarDrawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              menuItems={menuItems}
              activePath={activePath}
              onMenuClick={handleMenuClick}
            />
          </>
        ) : (
          <NavbarMenu menuItems={menuItems} activePath={activePath} onMenuClick={handleMenuClick} />
        )}
        {/* Sağ: Dil seçici (bayraklar) */}
        <Box sx={{ position: "absolute", right: 8, display: "flex", alignItems: "center", gap: 1 }}>
          {!isMobile && <LanguageSwitcher />}
        </Box>
      </Toolbar>
    </AppBar>
  );
} 