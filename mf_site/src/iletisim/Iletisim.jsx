import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactForm from "./components/ContactForm";
import BounceArrow from "./components/BounceArrow";

// İletişim sayfasının ana componenti
export default function Iletisim() {
  return (
    // Sayfanın ana kutusu, başlık ve form ile
    <Box sx={{ width: '100%', minHeight: '90vh', bgcolor: 'background.default', py: { xs: 4, md: 12 }, px: { xs: 1, md: 6 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      {/* Sayfa başlığı ve altındaki renkli çizgi */}
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
        İLETİŞİME GEÇ
        {/* Altındaki renkli çizgi */}
        <Box
          sx={{
            width: 180,
            height: 6,
            bgcolor: "secondary.main",
            borderRadius: 3,
            mx: "auto",
            mt: 1,
            boxShadow: "0 2px 12px 0 rgba(29,233,182,0.3)",
          }}
        />
      </Typography>
      {/* Kısa açıklama metni */}
      <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
        Proje teklifleri, iş birliği fırsatları veya herhangi bir sorunuz varsa benimle iletişime geçebilirsiniz.
      </Typography>
      {/* İletişim formu componenti */}
      <ContactForm />
      {/* En alta zıplayan ok */}
      <BounceArrow onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })} />
    </Box>
  );
} 