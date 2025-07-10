import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Hakkımda", path: "/hakkimda" },
  { label: "Yeteneklerim", path: "/yeteneklerim" },
  { label: "Deneyim", path: "/deneyim" },
  { label: "Projelerim", path: "/projelerim" },
  { label: "İletişim", path: "/iletisim" },
];

// Türkçe karakterleri normalize eden fonksiyon
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

export default function Navbar({ darkMode, setDarkMode, onScrollTo, activePath }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    if (item.label === "Ana Sayfa") {
      navigate('/');
      if (typeof window !== 'undefined' && window.scrollY < 100) {
        window.location.reload();
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (item.label === "Hakkımda") {
      navigate('/hakkimda');
      if (onScrollTo) onScrollTo("hakkimda");
    } else if (item.label === "Yeteneklerim") {
      navigate('/yeteneklerim');
      if (onScrollTo) onScrollTo("yeteneklerim");
    } else if (item.label === "Deneyim") {
      navigate('/deneyim');
      if (onScrollTo) onScrollTo("deneyim");
    } else if (item.label === "Projelerim") {
      navigate('/projelerim');
      if (onScrollTo) onScrollTo("projelerim");
    } else if (item.label === "İletişim") {
      navigate('/iletisim');
      if (onScrollTo) onScrollTo("iletisim");
    }
    setDrawerOpen(false);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "background.paper", zIndex: (theme) => theme.zIndex.drawer + 2 }}>
      <Toolbar sx={{ justifyContent: "center", position: "relative", minHeight: 64, px: { xs: 1, sm: 2 } }}>
        {/* Sol: Dark Mode */}
        <Box sx={{ position: "absolute", left: 8, display: "flex", alignItems: "center", height: 1 }}>
          <Tooltip 
            title="Dark modda kullanmanız tavsiye edilir" 
            placement="bottom"
            arrow
          >
            <IconButton
              onClick={() => setDarkMode((prev) => !prev)}
              color="inherit"
              aria-label="dark mode toggle"
              size="large"
            >
              <Brightness2Icon sx={{ color: darkMode ? '#fff' : '#222' }} />
            </IconButton>
          </Tooltip>
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
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{ sx: { width: 240, bgcolor: "background.paper" } }}
            >
              <Box sx={{ height: 64 }} />
              <Divider />
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton onClick={() => handleMenuClick(item)} selected={item.path === activePath}>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          sx: {
                            color: item.path === activePath ? "secondary.main" : "text.primary",
                            fontWeight: 500,
                            fontSize: 18,
                            textTransform: "none",
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
                <Button
                  sx={{
                    minWidth: 36,
                    fontSize: 22,
                    borderRadius: 2,
                    textTransform: "none",
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
                    textTransform: "none",
                  }}
                  aria-label="English"
                >
                  🇬🇧
                </Button>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flex: 1 }}>
            {menuItems.map((item) => {
              const isActive = item.path === activePath;
              return (
                <Button
                  key={item.label}
                  sx={{
                    color: isActive ? "secondary.main" : "text.primary",
                    fontWeight: 500,
                    fontSize: 18,
                    borderRadius: 3,
                    px: 2,
                    textTransform: "none",
                    border: isActive ? '2px solid' : 'none',
                    borderColor: isActive ? 'secondary.main' : 'transparent',
                    boxShadow: isActive ? 3 : 'none',
                    outline: 'none',
                    '&:focus': {
                      outline: 'none',
                      boxShadow: 'none',
                    },
                    transition: "all 0.2s",
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
                  {item.label}
                </Button>
              );
            })}
          </Box>
        )}
        {/* Sağ: Bayraklar (mobilde de görünür) */}
        <Box sx={{ position: "absolute", right: 8, display: "flex", alignItems: "center", gap: 1 }}>
          {!isMobile && (
            <>
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
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
} 