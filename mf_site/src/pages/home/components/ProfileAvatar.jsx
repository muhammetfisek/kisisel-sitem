import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import ppPhoto from "@/fotolar/pp.jpeg";

// Profil fotoğrafı (avatar) componenti yapısı
export default function ProfileAvatar() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: 300,
        mt: { xs: 4, md: 0 },
      }}
    >
      <Box
        sx={{
          p: "6px",
          borderRadius: "50%",
          background: "linear-gradient(270deg, #00c6fb, #1de9b6, #00c6fb)",
          backgroundSize: "200% 200%",
          animation: "waveGradient 4s ease-in-out infinite",
          '@keyframes waveGradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          display: 'inline-block',
        }}
      >
        <Avatar
          alt="Muhammet Fişek"
          src={ppPhoto}
          sx={{ width: 300, height: 300, border: "4px solid #181a20", background: "#181a20" }}
        />
      </Box>
    </Box>
  );
} 