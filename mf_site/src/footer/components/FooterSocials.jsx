import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

// Sosyal medya ve e-posta ikonlarını gösteren component
export default function FooterSocials() {
  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
      {/* Github */}
      <IconButton color="inherit" href="https://github.com/muhammetfisek" target="_blank" sx={{ color: 'text.primary' }}>
        <GitHubIcon fontSize="large" />
      </IconButton>
      {/* LinkedIn */}
      <IconButton color="inherit" href="https://linkedin.com/in/muhammetfişek" target="_blank" sx={{ color: 'text.primary' }}>
        <LinkedInIcon fontSize="large" />
      </IconButton>
      {/* Instagram */}
      <IconButton color="inherit" href="https://instagram.com/muhammetfisekk" target="_blank" sx={{ color: 'text.primary' }}>
        <InstagramIcon fontSize="large" />
      </IconButton>
      {/* E-posta */}
      <IconButton color="inherit" href="mailto:muhammetfisek121@gmail.com" sx={{ color: 'text.primary' }}>
        <EmailIcon fontSize="large" />
      </IconButton>
    </Box>
  );
} 