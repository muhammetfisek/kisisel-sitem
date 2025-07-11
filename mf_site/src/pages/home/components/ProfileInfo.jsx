import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTranslation } from "react-i18next";

// Profil bilgileri ve sosyal medya ikonları
export default function ProfileInfo() {
  const { t } = useTranslation();
  return (
    <Box sx={{ flex: 1, minWidth: 300 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "secondary.main",
          mb: 1,
          marginLeft: 7,
          letterSpacing: 1,
        }}
      >
        Muhammet FİŞEK
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: "text.primary", marginLeft: 7, fontWeight: 400, mb: 2 }}
      >
        {t('footer.unvan')}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", marginLeft: 7, mb: 3 }}>
        {t('home.aciklama')}
      </Typography>
      {/* Sosyal medya ikonları */}
      <Box>
        <IconButton
          color="inherit"
          href="https://github.com/muhammetfisek"
          target="_blank"
          sx={{ color: "text.primary", marginLeft: 7 }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://instagram.com/muhammetfisekk"
          target="_blank"
          sx={{ color: "text.primary" }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://linkedin.com/in/muhammetfişek"
          target="_blank"
          sx={{ color: "text.primary" }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="inherit"
          href="mailto:muhammetfisek121@gmail.com"
          sx={{ color: "text.primary" }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
} 