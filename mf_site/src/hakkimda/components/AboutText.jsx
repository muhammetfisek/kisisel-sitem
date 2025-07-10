// Hakkımda metni: Kullanıcının kariyer ve vizyonunu madde madde anlatır
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function AboutText() {
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
        {'< Merhaba, Ben Muhammet />'}
      </Typography>
      {/* Kariyer ve vizyon maddeleri */}
      <ul style={{ paddingLeft: 16, color: '#8a8a8a', fontSize: 17, marginBottom: 0 }}>
        {/* Mezuniyet ve kariyer başlangıcı */}
        <li style={{ marginBottom: 16, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <FiberManualRecordIcon sx={{ fontSize: 12, marginTop: '7px', color: 'secondary.main' }} />
          <span>
            2020 yılında Kurtköy Anadolu Lisesi'nden mezun olduktan sonra, yazılıma olan tutkumun peşinden giderek Erzincan Binali Yıldırım Üniversitesi Bilgisayar Mühendisliği bölümünde 2025 yılında eğitimimi tamamladım. Artık  bir Bilgisayar Mühendisi olarak, edindiğim teorik bilgileri gerçek dünya projeleriyle buluşturmanın heyecanını taşıyorum.
          </span>
        </li>
        {/* Backend ve yazılım ilgisi */}
        <li style={{ marginBottom: 16, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <FiberManualRecordIcon sx={{ fontSize: 12, marginTop: '7px', color: 'secondary.main' }} />
          <span>
            Java + Spring Boot ile backend geliştirme konusunda çabalıyorum. Temiz kod, iyi mimari ve performans odaklı sistemler ilgi alanım. Hobi olarak modern web uygulamaları tasarlayıp frontend dünyasında kendimi geliştiriyorum.
          </span>
        </li>
        {/* Vizyon ve motivasyon */}
        <li style={{ marginBottom: 16, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <FiberManualRecordIcon sx={{ fontSize: 12, marginTop: '7px', color: 'secondary.main' }} />
          <span>
            Teknolojinin sunduğu sonsuz imkanları keşfetmeye ve kendimi her geçen gün daha da ileriye taşımaya olan inancım tam. Amacım, sadece işlevsel değil, aynı zamanda kullanıcıların hayatına değer katan, yenilikçi ve sürdürülebilir yazılım çözümleri geliştirmek.
          </span>
        </li>
      </ul>
    </Box>
  );
} 