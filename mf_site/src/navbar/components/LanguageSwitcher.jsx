import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Dil seçici (bayraklar) componenti
export default function LanguageSwitcher() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
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
  );
} 