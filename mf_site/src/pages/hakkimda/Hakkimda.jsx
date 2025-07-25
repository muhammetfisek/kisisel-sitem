import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useTheme } from '@mui/material/styles';
import { useTranslation } from "react-i18next";

import ProfileCard from "./components/ProfileCard";
import AboutText from "./components/AboutText";

export default function Hakkimda() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '90vh', 
      bgcolor: 'background.default', 
      py: { xs: 2, md: 12 }, // Mobilde padding'i azalttım
      px: { xs: 1, md: 6 },
      mt: { xs: 0, md: 0 } // Mobilde üst margin'i kaldırdım
    }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          textAlign: "center",
          letterSpacing: 2,
          mb: 1,
          background: "linear-gradient(270deg, #00c6fb, #1de9b6, #00c6fb)",
          backgroundSize: "200% 200%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          animation: "waveGradient 4s ease-in-out infinite",
          textShadow: "0 4px 24px rgba(0,198,251,0.25)",
          '@keyframes waveGradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      >
        {t('hakkimda.baslik')}
        <Box
          sx={{
            width: 160,
            height: 6,
            bgcolor: "secondary.main",
            borderRadius: 3,
            mx: "auto",
            mt: 1,
            boxShadow: "0 2px 12px 0 rgba(29,233,182,0.3)",
          }}
        />
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5,marginTop:3 }}>
        {t('hakkimda.altBaslik')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'stretch',
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        <ProfileCard />
        <AboutText />
      </Box>
    </Box>
  );
} 