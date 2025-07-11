import React from "react";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

// Footer'da isim, unvan ve copyright bilgisini gösteren component
export default function FooterInfo() {
  const { t } = useTranslation();
  return (
    <>
      {/* İsim */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main', mb: 1 }}>
        Muhammet FİŞEK
      </Typography>
      {/* Unvan */}
      <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 500 }}>
        {t('footer.unvan')}
      </Typography>
      {/* Copyright */}
      <Typography variant="body2" sx={{ color: 'text.disabled', mt: 3 }}>
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </Typography>
    </>
  );
} 