// Profil kartı: Kullanıcının fotoğrafı, adı, unvanı ve lokasyonunu gösterir
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import hakkimdaPhoto from "@/fotolar/hakkimda_pp.jpeg";
import { useTranslation } from "react-i18next";

export default function ProfileCard() {
  const { t } = useTranslation();
  const profile = t('about.profile', { returnObjects: true });
  return (
    // Kartın ana kutusu, responsive ve hover efektli
    <Box
      sx={{
        flex: 1,
        bgcolor: 'background.paper',
        borderRadius: 4,
        boxShadow: 6,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 280,
        maxWidth: 380,
        mx: 'auto',
        border: '2px solid transparent',
        transition: 'border-color 0.4s, box-shadow 0.4s, transform 0.3s',
        position: 'relative',
        '&:hover': {
          borderColor: 'secondary.main',
          boxShadow: '0 0 16px 2px #00c6fb55, 0 0 0 4px #1de9b655',
          transform: 'scale(1.03)',
        },
      }}
    >
      {/* Profil fotoğrafı */}
      <Avatar
        alt={profile.name}
        src={hakkimdaPhoto}
        sx={{ width: 200, height: 200, mb: 2, border: '4px solid', borderColor: 'secondary.main' }}
      />
      {/* Kullanıcı adı */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
        {profile.name}
      </Typography>
      {/* Kullanıcı unvanı */}
      <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2, textAlign: 'center' }}>
        {profile.title}
      </Typography>
      {/* Ayırıcı çizgi */}
      <Divider sx={{ width: '80%', my: 2 }} />
      {/* Lokasyon bilgisi */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', fontSize: 16 }}>
        <LocationOnIcon fontSize="small" sx={{ color: 'primary.main' }} />
        {profile.location}
      </Box>
    </Box>
  );
} 