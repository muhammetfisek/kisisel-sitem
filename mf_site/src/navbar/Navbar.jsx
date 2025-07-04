import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Brightness2Icon from "@mui/icons-material/Brightness2";

const menuItems = [
  "Ana Sayfa",
  "Hakkımda",
  "Yeteneklerim",
  "Deneyim",
  "Projeler",
  "İletişim",
];

export default function Navbar({ darkMode, setDarkMode }) {
  const handleMenuClick = (item) => {
    if (item === "Ana Sayfa") {
      window.location.reload();
    }
    // Diğer menüler için ileride ekleme yapılabilir
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
      <Toolbar sx={{ justifyContent: "center", position: "relative", minHeight: 64 }}>
        {/* Sol: Dark Mode */}
        <Box sx={{ position: "absolute", left: 16, display: "flex", alignItems: "center", height: 1 }}>
          <IconButton
            onClick={() => setDarkMode((prev) => !prev)}
            color="inherit"
            aria-label="dark mode toggle"
          >
            <Brightness2Icon sx={{ color: darkMode ? '#fff' : '#222' }} />
          </IconButton>
        </Box>
        {/* Orta: Menü */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flex: 1 }}>
          {menuItems.map((item) => (
            <Button
              key={item}
              sx={{
                color: "text.primary",
                fontWeight: 500,
                fontSize: 18,
                transition: "all 0.2s",
                borderRadius: 3,
                px: 2,
                textTransform: "none",
                '&:hover': {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  boxShadow: 3,
                  border: '2px solid',
                  borderColor: 'secondary.main',
                },
              }}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </Button>
          ))}
        </Box>
        {/* Sağ: Bayraklar */}
        <Box sx={{ position: "absolute", right: 16, display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            sx={{
              minWidth: 36,
              fontSize: 22,
              borderRadius: 2,
              transition: "all 0.2s",
              textTransform: "none",
              '&:hover': {
                bgcolor: 'transparent',
                color: 'text.primary',
                boxShadow: 3,
                border: '2px solid',
                borderColor: 'secondary.main',
              },
            }}
            aria-label="Türkçe"
          >
            🇹🇷
          </Button>
          <Button
            sx={{
              minWidth: 36,
              fontSize: 22,
              borderRadius: 2,
              transition: "all 0.2s",
              textTransform: "none",
              '&:hover': {
                bgcolor: 'transparent',
                color: 'text.primary',
                boxShadow: 3,
                border: '2px solid',
                borderColor: 'secondary.main',
              },
            }}
            aria-label="English"
          >
            🇬🇧
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
} 