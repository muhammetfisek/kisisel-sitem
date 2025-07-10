import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Menüdeki sayfa butonlarını gösteren component
export default function NavbarMenu({ menuItems, activePath, onMenuClick }) {
  return (
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
            onClick={() => onMenuClick(item)}
          >
            {item.label}
          </Button>
        );
      })}
    </Box>
  );
} 