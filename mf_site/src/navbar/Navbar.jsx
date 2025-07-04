import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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

const menuItems = [
  "Ana Sayfa",
  "Hakkımda",
  "Yeteneklerim",
  "Deneyim",
  "Projeler",
  "İletişim",
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuClick = (item) => {
    if (item === "Ana Sayfa") {
      window.location.reload();
    }
    // Diğer menüler için ileride ekleme yapılabilir
    setDrawerOpen(false); // Drawer açıksa kapat
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
      <Toolbar sx={{ justifyContent: "center", position: "relative", minHeight: 64, px: { xs: 1, sm: 2 } }}>
        {/* Sol: Dark Mode */}
        <Box sx={{ position: "absolute", left: 8, display: "flex", alignItems: "center", height: 1 }}>
          <IconButton
            onClick={() => setDarkMode((prev) => !prev)}
            color="inherit"
            aria-label="dark mode toggle"
            size="large"
          >
            <Brightness2Icon sx={{ color: darkMode ? '#fff' : '#222' }} />
          </IconButton>
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
                  <ListItem key={item} disablePadding>
                    <ListItemButton onClick={() => handleMenuClick(item)}>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          sx: {
                            color: "text.primary",
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