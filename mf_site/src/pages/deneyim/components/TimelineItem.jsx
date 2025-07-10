import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Tek bir deneyim veya eğitim satırını gösteren component
export default function TimelineItem({ item, icon, color }) {
  return (
    // Her bir satırın ana kutusu
    <Box sx={{ position: 'relative', mb: 7, minHeight: 120 }}>
      {/* Nokta ve başlık hizası: Soldaki yuvarlak ikon ve başlık */}
      <Box sx={{ display: 'flex', alignItems: 'center', ml: 0 }}>
        <Box sx={{
          width: 32,
          height: 32,
          bgcolor: '#181a20',
          borderRadius: '50%',
          border: `5px solid ${color}`,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 16px 2px ${color}55`,
          mr: 2
        }}>
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, color: '#fff', mb: 0, textAlign: 'left' }}>
          {item.title}
        </Typography>
      </Box>
      {/* Alt başlık, tarih, lokasyon ve açıklama alanı */}
      <Box sx={{ ml: 6, textAlign: 'left' }}>
        {/* Alt başlık: Şirket veya derece */}
        {item.company || item.degree ? (
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 400, fontSize: 17, mb: 0.5, textAlign: 'left' }}>
            {item.company || item.degree}
          </Typography>
        ) : null}
        {/* Tarih ve lokasyon bilgileri */}
        <Box sx={{ mb: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.2 }}>
            <CalendarMonthIcon sx={{ fontSize: 18, color: color }} />
            <Typography sx={{ fontSize: 15, color: 'text.secondary', fontWeight: 700, textAlign: 'left' }}>
              {item.date}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon sx={{ fontSize: 18, color: color }} />
            <Typography sx={{ fontSize: 15, color: 'text.secondary', fontWeight: 700, textAlign: 'left' }}>
              {item.location}
            </Typography>
          </Box>
        </Box>
        {/* Açıklama metni */}
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 15, fontWeight: 400, mt: 1, textAlign: 'left' }}>
          {item.description}
        </Typography>
      </Box>
    </Box>
  );
} 