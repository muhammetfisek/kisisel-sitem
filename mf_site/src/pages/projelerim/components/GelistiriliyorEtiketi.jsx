// GelistiriliyorEtiketi: Proje kartında "Geliştiriliyor" durumunu gösteren özel etiket.
// Sadece ilk kutuda gösterilir, animasyonlu ayar ikonu içerir.

import React, { memo } from "react";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";

const GelistiriliyorEtiketi = memo(() => (
  <Box
    sx={{
      background: 'linear-gradient(90deg,#ff9800,#ffb347)',
      color: '#fff',
      fontSize: { xs: 11, sm: 13 },
      fontWeight: 600,
      borderRadius: 999,
      px: { xs: 1.5, sm: 2 },
      py: 0.5,
      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
      letterSpacing: 0.5,
      display: 'flex',
      alignItems: 'center',
      gap: { xs: 0.5, sm: 0.7 },
      maxWidth: { xs: '90%', sm: '100%' },
    }}
  >
    {/* Dönen ayar ikonu */}
    <SettingsIcon sx={{ 
      fontSize: { xs: 14, sm: 16 }, 
      color: '#fff', 
      mr: { xs: 0.5, sm: 0.7 }, 
      animation: 'spin 1.2s linear infinite', 
      '@keyframes spin': { 
        '0%': { transform: 'rotate(0deg)' }, 
        '100%': { transform: 'rotate(360deg)' } 
      } 
    }} />
    <Box sx={{ 
      fontSize: { xs: '0.7rem', sm: 'inherit' },
      lineHeight: 1.2
    }}>
      Şu anda Geliştiriliyor Takipte Kalın
    </Box>
  </Box>
));

export default GelistiriliyorEtiketi; 