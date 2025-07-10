import React, { memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Etiketler from "./components/Etiketler";
import GelistiriliyorEtiketi from "./components/GelistiriliyorEtiketi";
import GithubIconButton from "./components/GithubIconButton";

const ProjectCard = memo(function ProjectCard({ proje, globalIdx, cardBg, borderColor, hoverBorder, hoverShadow, githubIconColor, isDark, objectFitMap, handleOpenModal, handleImgLoad }) {
  return (
    <Paper
      elevation={10}
      sx={{
        borderRadius: 5,
        overflow: 'hidden',
        minHeight: 560,
        height: 560,
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
          transform: 'scale(1.04)',
        },
      }}
    >
      {/* Üst görsel alanı, Swiper ile çoklu görsel desteği */}
      <Box sx={{ width: '100%', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'linear-gradient(120deg,#e0eafc,#cfdef3 80%)', borderBottom: '1px solid #232b39', position: 'relative' }}>
        {proje.fotolar.length > 1 ? (
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
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', px: 3, pt: 2, pb: 2, bgcolor: '#232b39', position: 'relative' }}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1, textAlign: 'left', fontSize: '1.1rem' }}>
            {proje.baslik}
          </Typography>
          <Typography variant="body1" sx={{ color: '#b0bec5', mb: 2, textAlign: 'left', fontSize: '0.95rem' }}>
            {proje.aciklama}
          </Typography>
        </Box>
        <Box sx={{ position: 'absolute', left: 11, bottom: 44, pl: '2px', pb: 0, mt: 0, zIndex: 5 }}>
          <Etiketler etiketler={proje.etiketler} />
        </Box>
        {globalIdx === 0 ? (
          <Box sx={{ position: 'absolute', left: 0, bottom: 2, pl: 2, pb: 1, mt: 0 }}>
            <GelistiriliyorEtiketi />
          </Box>
        ) : (
          <Box sx={{ position: 'absolute', left: 0, bottom: 0, pl: 0, pb: 0, mt: 0, zIndex: 1 }}>
            <GithubIconButton url={proje.github} cardBg={cardBg} githubIconColor={githubIconColor} isDark={isDark} />
          </Box>
        )}
      </Box>
    </Paper>
  );
});

export default ProjectCard; 