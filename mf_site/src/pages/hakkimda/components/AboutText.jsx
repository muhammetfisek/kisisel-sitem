// Hakkımda metni: Kullanıcının kariyer ve vizyonunu madde madde anlatır
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useTranslation } from "react-i18next";

export default function AboutText() {
  const { t } = useTranslation();
  const items = t('about.items', { returnObjects: true });
  return (
    // Sağ kutunun ana container'ı, responsive ve hover efektli
    <Box
      sx={{
        flex: 2,
        bgcolor: 'background.paper',
        borderRadius: 4,
        boxShadow: 6,
        p: 4,
        minWidth: 320,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
      {/* Başlık */}
      <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}>
        {t('about.title')}
      </Typography>
      {/* Kariyer ve vizyon maddeleri */}
      <ul style={{ paddingLeft: 16, color: '#8a8a8a', fontSize: 17, marginBottom: 0 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: 16, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <FiberManualRecordIcon sx={{ fontSize: 12, marginTop: '7px', color: 'secondary.main' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Box>
  );
} 