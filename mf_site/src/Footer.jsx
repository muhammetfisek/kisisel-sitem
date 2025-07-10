import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const teknolojiler = [
  { ad: "React", renk: "#61dafb" },
  { ad: "CSS", renk: "#2965f1" },
  { ad: "JavaScript", renk: "#f7df1e" },
  { ad: "Spring Boot", renk: "#6db33f" },
];

export default function Footer() {
  return (
    <Box sx={{
      width: '100%',
      bgcolor: 'background.paper',
      borderTop: '1px solid',
      borderColor: 'divider',
      mt: 8,
      py: 5,
      px: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      zIndex: 10,
    }}>
      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main', mb: 1 }}>
        Muhammet FİŞEK
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 500 }}>
        Bilgisayar Mühendisi & Backend Developer
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
        <IconButton color="inherit" href="https://github.com/muhammetfisek" target="_blank" sx={{ color: 'text.primary' }}>
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com/in/muhammetfişek" target="_blank" sx={{ color: 'text.primary' }}>
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com/muhammetfisekk" target="_blank" sx={{ color: 'text.primary' }}>
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton color="inherit" href="mailto:muhammetfisek121@gmail.com" sx={{ color: 'text.primary' }}>
          <EmailIcon fontSize="large" />
        </IconButton>
      </Box>
      
      <Typography variant="body2" sx={{ color: 'text.disabled', mt: 3 }}>
        © {new Date().getFullYear()} Muhammet FİŞEK
      </Typography>
    </Box>
  );
} 