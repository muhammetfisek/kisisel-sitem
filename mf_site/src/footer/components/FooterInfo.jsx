import React from "react";
import Typography from "@mui/material/Typography";

// Footer'da isim, unvan ve copyright bilgisini gösteren component
export default function FooterInfo() {
  return (
    <>
      {/* İsim */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main', mb: 1 }}>
        Muhammet FİŞEK
      </Typography>
      {/* Unvan */}
      <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 500 }}>
        Bilgisayar Mühendisi & Backend Developer
      </Typography>
      {/* Copyright */}
      <Typography variant="body2" sx={{ color: 'text.disabled', mt: 3 }}>
        © {new Date().getFullYear()} Muhammet FİŞEK
      </Typography>
    </>
  );
} 