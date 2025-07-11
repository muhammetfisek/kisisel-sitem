import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  const buttonStyle = {
    minWidth: 36,
    fontSize: 22,
    borderRadius: 2,
    textTransform: "none",
    '&:focus': { outline: 'none', boxShadow: 'none' },
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
      <Button
        sx={buttonStyle}
        aria-label="Türkçe"
        onClick={() => handleChangeLang('tr')}
      >
        🇹🇷
      </Button>
      <Button
        sx={buttonStyle}
        aria-label="English"
        onClick={() => handleChangeLang('en')}
      >
        🇬🇧
      </Button>
    </Box>
  );
} 