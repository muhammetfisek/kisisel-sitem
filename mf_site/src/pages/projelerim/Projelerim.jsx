// Projelerim sayfası: Portfolyodaki projeleri kartlar halinde gösterir.
// Grid yapısı, modal ile büyük görsel gösterimi ve tema desteği içerir.

import React, { useState, useCallback, memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Swiper: Proje kartlarında çoklu görsel desteği için kullanılır
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ProjectCard from "./ProjectCard";
import { projeler } from "./projelerData";
import { chunkArray } from "./utils";

// Ana Projelerim fonksiyonu
export default function Projelerim() {
  // Tema ayarlarını al (dark/light)
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  // Kartların arka plan ve kenar renkleri tema göre belirlenir
  const cardBg = isDark ? 'rgba(35, 43, 57, 0.97)' : 'rgba(255,255,255,0.97)';
  const borderColor = isDark ? '#232b39' : '#e0e0e0';
  const hoverBorder = '#19e6d6';
  const hoverShadow = isDark
    ? '0 0 24px 2px #19e6d655, 0 0 0 4px #19e6d633'
    : '0 0 24px 2px #19e6d655, 0 0 0 2px #19e6d633';
  const githubIconColor = isDark ? '#fff' : '#232b39';

  // Modal açık mı? Hangi görseldeyiz? Hangi görseller gösterilecek?
  const [openModal, setOpenModal] = useState(false);
  const [modalImgIndex, setModalImgIndex] = useState(0);
  const [modalImgList, setModalImgList] = useState([]);
  // Her görsel için object-fit (cover/contain) bilgisini tutar
  const [objectFitMap, setObjectFitMap] = useState({});

  // Görsel yüklendiğinde oranına göre objectFit belirle (dikey mi yatay mı?)
  const handleImgLoad = useCallback((e, imgKey) => {
    const { naturalWidth, naturalHeight } = e.target;
    setObjectFitMap(prev => ({
      ...prev,
      [imgKey]: naturalHeight > naturalWidth ? 'contain' : 'cover'
    }));
  }, []);

  // Bir görsele tıklanınca modalı aç ve ilgili görseli göster
  const handleOpenModal = useCallback((img, imgList) => {
    setModalImgList(imgList);
    setModalImgIndex(imgList.indexOf(img));
    setOpenModal(true);
  }, []);
  // Modalı kapat
  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setModalImgList([]);
    setModalImgIndex(0);
  }, []);

  // Projeleri 3'erli gruplara ayır (her satırda 3 kutu olacak şekilde)
  const projeGruplari = chunkArray(projeler, 3);

  return (
    <Box sx={{ width: '100%', minHeight: '90vh', bgcolor: 'background.default', px: { xs: 1, md: 6 }, py: 8 }}>
      {/* Sayfa başlığı ve alt başlık */}
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
        PROJELERİM
        {/* Altındaki renkli çizgi */}
        <Box
          sx={{
            width: 180,
            height: 6,
            bgcolor: "secondary.main",
            borderRadius: 3,
            mx: "auto",
            mt: 1,
            boxShadow: "0 2px 12px 0 rgba(29,233,182,0.3)",
          }}
        />
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
        Üzerinde çalışmış olduğum bazı projeler
      </Typography>
      {/* Proje kartlarını 3'erli satırlarda gösteren grid yapısı */}
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {projeGruplari.map((grup, grupIdx) => (
          <Grid container spacing={4} justifyContent="center" alignItems="flex-start" key={grupIdx} sx={{ mt: grupIdx === 0 ? 0 : '59px' }}>
            {grup.map((proje, idx) => {
              const globalIdx = grupIdx * 3 + idx;
              // Her proje için ProjectCard componenti kullanılır
              return (
                <Grid item xs={12} sm={6} md={4} key={proje.baslik + grupIdx + idx} sx={{ display: 'flex', flex: 1, minWidth: 0, maxWidth: '100%', height: '100%' }}>
                  <ProjectCard
                    proje={proje}
                    globalIdx={globalIdx}
                    cardBg={cardBg}
                    borderColor={borderColor}
                    hoverBorder={hoverBorder}
                    hoverShadow={hoverShadow}
                    githubIconColor={githubIconColor}
                    isDark={isDark}
                    objectFitMap={objectFitMap}
                    handleOpenModal={handleOpenModal}
                    handleImgLoad={handleImgLoad}
                  />
                </Grid>
              );
            })}
          </Grid>
        ))}
      </Box>
      {/* Modal: Büyük görseli göstermek için kullanılır */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          backgroundColor: 'rgba(30,40,60,0.7)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <Box sx={{
          position: 'relative',
          outline: 'none',
          bgcolor: '#232b39',
          color: '#fff',
          borderRadius: 4,
          p: 2,
          maxWidth: 700,
          width: '90vw',
          maxHeight: '80vh',
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}>
          {/* Modalı kapatma butonu */}
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 10, bgcolor: 'rgba(0,0,0,0.5)', color: '#fff', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' } }}
          >
            <CloseIcon />
          </IconButton>
          {/* Swiper ile büyük görsel gösterimi */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            initialSlide={modalImgIndex}
            style={{ width: '100%', height: '100%' }}
          >
            {modalImgList.map((img, idx) => (
              <SwiperSlide key={idx}>
                <Box
                  component="img"
                  src={img}
                  alt={`Büyük görsel ${idx + 1}`}
                  sx={{
                    width: '100%',
                    height: '60vh',
                    objectFit: 'contain',
                    borderRadius: 6,
                    display: 'block',
                    mx: 'auto',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Modal>
    </Box>
  );
} 