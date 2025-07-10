import React from "react";
import Box from "@mui/material/Box";
import FooterInfo from "./components/FooterInfo";
import FooterSocials from "./components/FooterSocials";

// Footer ana componenti
export default function Footer() {
  return (
    // Footer'ın ana kutusu, arka plan ve hizalama ile
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
      {/* İsim, unvan ve copyright */}
      <FooterInfo />
      {/* Sosyal medya ikonları */}
      <FooterSocials />
    </Box>
  );
} 