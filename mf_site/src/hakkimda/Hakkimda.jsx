import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useTheme } from '@mui/material/styles';
import hakkimdaPhoto from '../fotolar/hakkimda_pp.jpeg';

export default function Hakkimda() {
  const theme = useTheme();
  return (
    <Box sx={{ width: '100%', minHeight: '90vh', bgcolor: 'background.default', py: { xs: 4, md: 8 }, px: { xs: 1, md: 6 } }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          textAlign: "center",
          letterSpacing: 2,
          mb: 1,
          background: "linear-gradient(270deg, #00c6fb, #1de9b6, #00c6fb)",
          backgroundSize: "200% 200%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          animation: "waveGradient 4s ease-in-out infinite",
          textShadow: "0 4px 24px rgba(0,198,251,0.25)",
          '@keyframes waveGradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      >
        HAKKIMDA
        <Box
          sx={{
            width: 160,
            height: 6,
            bgcolor: "secondary.main",
            borderRadius: 3,
            mx: "auto",
            mt: 1,
            boxShadow: "0 2px 12px 0 rgba(29,233,182,0.3)",
          }}
        />
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5,marginTop:3 }}>
      Yazılımla Şekillenen Bir Kariyer
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'stretch',
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        {/* Sol Kutu */}
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
            maxWidth: 350,
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
          <Avatar
            alt="Muhammet Fişek"
            src={hakkimdaPhoto}
            sx={{ width: 200, height: 200, mb: 2, border: '4px solid', borderColor: 'secondary.main' }}
          />
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
            Muhammet FİŞEK
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2, textAlign: 'center' }}>
            Bilgisayar Mühendisi & Backend Developer
          </Typography>
          <Divider sx={{ width: '80%', my: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', fontSize: 16 }}>
            <LocationOnIcon fontSize="small" sx={{ color: 'primary.main' }} />
            Türkiye / İstanbul
          </Box>
        </Box>
        {/* Sağ Kutu */}
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
          <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}>
            {'< Merhaba, Ben Muhammet />'}
          </Typography>
          <Box component="ul" sx={{ pl: 2, color: 'text.secondary', fontSize: 17, mb: 0 }}>
            <Box component="li" sx={{ mb: 2, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <FiberManualRecordIcon sx={{ fontSize: 12, mt: '7px', color: 'secondary.main' }} />
              <span>
              2020 yılında Kurtköy Anadolu Lisesi'nden mezun olduktan sonra, yazılıma olan tutkumun peşinden giderek Erzincan Binali Yıldırım Üniversitesi Bilgisayar Mühendisliği bölümünde 2025 yılında eğitimimi tamamladım. Artık  bir Bilgisayar Mühendisi olarak, edindiğim teorik bilgileri gerçek dünya projeleriyle buluşturmanın heyecanını taşıyorum.
              </span>
            </Box>
            <Box component="li" sx={{ mb: 2, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <FiberManualRecordIcon sx={{ fontSize: 12, mt: '7px', color: 'secondary.main' }} />
              <span>
                Java + Spring Boot ile backend geliştirme konusunda çabalıyorum. Temiz kod, iyi mimari ve performans odaklı sistemler ilgi alanım. Hobi olarak modern web uygulamaları tasarlayıp frontend dünyasında kendimi geliştiriyorum.
              </span>
            </Box>
            <Box component="li" sx={{ mb: 2, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <FiberManualRecordIcon sx={{ fontSize: 12, mt: '7px', color: 'secondary.main' }} />
              <span>
              Teknolojinin sunduğu sonsuz imkanları keşfetmeye ve kendimi her geçen gün daha da ileriye taşımaya olan inancım tam. Amacım, sadece işlevsel değil, aynı zamanda kullanıcıların hayatına değer katan, yenilikçi ve sürdürülebilir yazılım çözümleri geliştirmek.


              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
} 