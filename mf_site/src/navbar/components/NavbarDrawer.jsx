import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import LanguageSwitcher from "./LanguageSwitcher";

// Drawer (mobil menü) componenti
export default function NavbarDrawer({ open, onClose, menuItems, activePath, onMenuClick }) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: 240, bgcolor: "background.paper" } }}
    >
      <Box sx={{ height: 64 }} />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => onMenuClick(item)} selected={item.path === activePath}>
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
      {/* Dil seçici (bayraklar) */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
        <LanguageSwitcher />
      </Box>
    </Drawer>
  );
} 