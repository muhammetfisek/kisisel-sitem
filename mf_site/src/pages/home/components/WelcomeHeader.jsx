import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

// Hoşgeldiniz başlığı ve gülücük animasyonu
export default function WelcomeHeader({ hover, setHover, show }) {
  const { t } = useTranslation();
  return (
    <Box
      component={show ? 'div' : 'span'}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: 6, md: 8 },
        mb: 4,
      }}
    >
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{ display: "flex", alignItems: "center", position: "relative" }}
      >
        {/* Sol gülücük */}
        <Box
          sx={{
            opacity: hover ? 1 : 0,
            transform: hover ? "translateX(0)" : "translateX(-20px)",
            transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
            fontSize: 36,
            mr: 1,
            userSelect: "none",
          }}
        >
          😊
        </Box>
        {/* Hoşgeldiniz yazısı */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            textAlign: "center",
            letterSpacing: 2,
            position: "relative",
            mb: 1.5,
            cursor: "pointer",
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
          {t('home.hosgeldin')}
          {/* Altındaki renkli çizgi */}
          <Box
            sx={{
              width: 120,
              height: 6,
              bgcolor: "secondary.main",
              borderRadius: 3,
              mx: "auto",
              mt: 1,
              boxShadow: "0 2px 12px 0 rgba(29,233,182,0.3)",
            }}
          />
        </Typography>
        {/* Sağ gülücük */}
        <Box
          sx={{
            opacity: hover ? 1 : 0,
            transform: hover ? "translateX(0)" : "translateX(20px)",
            transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
            fontSize: 36,
            ml: 1,
            userSelect: "none",
          }}
        >
          😊
        </Box>
      </Box>
    </Box>
  );
} 