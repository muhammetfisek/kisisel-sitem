// ProjectCard: Tek bir projeyi kart olarak gösteren component.
// Görsel, başlık, açıklama, etiketler ve GitHub/Geliştiriliyor ikonları içerir.

import React, { memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Etiketler from "./components/Etiketler";
import GelistiriliyorEtiketi from "./components/GelistiriliyorEtiketi";
import GithubIconButton from "./components/GithubIconButton";
import { useTranslation } from "react-i18next";

// ProjectCard componenti memo ile optimize edildi
const ProjectCard = memo(function ProjectCard({ proje, globalIdx, cardBg, borderColor, hoverBorder, hoverShadow, githubIconColor, isDark, objectFitMap, handleOpenModal, handleImgLoad }) {
  const { t, i18n } = useTranslation();
  // proje: Proje verisi (başlık, açıklama, etiketler, görseller, github)
  // globalIdx: Proje sırası (ilk kutu için "geliştiriliyor" etiketi gösterilir)
  // cardBg, borderColor, hoverBorder, hoverShadow, githubIconColor, isDark: Tema ve stil prop'ları
  // objectFitMap: Her görsel için object-fit bilgisi
  // handleOpenModal: Görsele tıklanınca büyük modalı açar
  // handleImgLoad: Görsel yüklendiğinde oranına göre object-fit belirler

  // Proje indexini bul
  const projectIndex = proje._idx !== undefined ? proje._idx : globalIdx;
  const projectI18n = t(`projects.${projectIndex}`, { returnObjects: true });

  return (
    <Paper
      elevation={10}
      sx={{
        borderRadius: 5,
        overflow: 'hidden',
        minHeight: 560,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        bgcolor: cardBg,
        boxShadow: '0 8px 32px 0 rgba(25,230,214,0.10)',
        position: 'relative',
        border: `2px solid ${borderColor}`,
        transition: 'border-color 0.4s, box-shadow 0.4s, transform 0.3s',
        '&:hover': {
          borderColor: hoverBorder,
          boxShadow: hoverShadow,
          transform: { xs: 'none', sm: 'scale(1.04)' },
        },
      }}
    >
      {/* Üst görsel alanı, Swiper ile çoklu görsel desteği */}
      <Box sx={{ 
        width: '100%', 
        height: { xs: 200, sm: 250 }, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        bgcolor: 'linear-gradient(120deg,#e0eafc,#cfdef3 80%)', 
        borderBottom: '1px solid #232b39', 
        position: 'relative' 
      }}>
        {proje.fotolar.length > 1 ? (
          // Birden fazla görsel varsa Swiper ile slider göster
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            style={{ width: '100%', height: '100%' }}
          >
            {proje.fotolar.map((foto, fidx) => (
              <SwiperSlide key={fidx}>
                <Box
                  component="img"
                  src={foto}
                  alt={proje.baslik + " görsel " + (fidx + 1)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: objectFitMap[proje.baslik + fidx] || 'cover',
                    borderRadius: 3,
                    background: 'transparent',
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                    mx: 'auto',
                    display: 'block',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s',
                  }}
                  onClick={() => handleOpenModal(foto, proje.fotolar)}
                  onLoad={e => handleImgLoad(e, proje.baslik + fidx)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Tek görsel varsa doğrudan göster
          <Box
            component="img"
            src={proje.fotolar[0]}
            alt={proje.baslik}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: objectFitMap[proje.baslik + 'single'] || 'cover',
              borderRadius: 3,
              background: 'transparent',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
              mx: 'auto',
              display: 'block',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
            }}
            onClick={() => handleOpenModal(proje.fotolar[0], proje.fotolar)}
            onLoad={e => handleImgLoad(e, proje.baslik + 'single')}
          />
        )}
      </Box>
      {/* Alt içerik alanı: başlık, açıklama, etiketler ve ikonlar */}
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        px: { xs: 2, sm: 3 }, 
        pt: 2, 
        pb: globalIdx === 0 ? { xs: 4, sm: 5 } : 2, 
        bgcolor: '#232b39', 
        position: 'relative' 
      }}>
        {/* Proje başlığı ve açıklaması */}
        <Box sx={{ width: '100%' }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 700, 
            color: '#fff', 
            mb: 1, 
            textAlign: 'left', 
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.3
          }}>
            {projectI18n.title || proje.baslik}
          </Typography>
          <Typography variant="body1" sx={{ 
            color: '#b0bec5', 
            mb: 2, 
            textAlign: 'left', 
            fontSize: { xs: '0.9rem', sm: '0.95rem' },
            lineHeight: 1.4
          }}>
            {projectI18n.desc || proje.aciklama}
          </Typography>
        </Box>
        {/* Etiketler componenti ile teknolojiler */}
        <Box sx={{ 
          position: 'absolute', 
          left: { xs: 8, sm: 11 }, 
          bottom: globalIdx === 0 ? { xs: 60, sm: 70, md: 50 } : { xs: 44, md: 54 }, 
          pl: '2px', 
          pb: 0, 
          mt: 0, 
          zIndex: 5 
        }}>
          <Etiketler etiketler={proje.etiketler} />
        </Box>
        {/* İlk kutuysa "Geliştiriliyor" etiketi, diğerlerinde GitHub ikonu */}
        {globalIdx === 0 ? (
          <Box sx={{ 
            position: 'absolute', 
            left: 0, 
            bottom: { xs: 8, sm: 12, md: 8 }, 
            pl: { xs: 1, sm: 2 }, 
            pb: 1, 
            mt: 0 
          }}>
            <GelistiriliyorEtiketi />
          </Box>
        ) : (
          <Box sx={{ 
            position: 'absolute', 
            left: 0, 
            bottom: 0, 
            pl: 0, 
            pb: 0, 
            mt: 0, 
            zIndex: 1 
          }}>
            <GithubIconButton url={proje.github} cardBg={cardBg} githubIconColor={githubIconColor} isDark={isDark} />
          </Box>
        )}
      </Box>
    </Paper>
  );
});

export default ProjectCard; 