import React, { useState, useCallback, memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";
import berber1 from "../fotolar/berber1.jpeg";
import berber2 from "../fotolar/berber2.jpeg";
import berber3 from "../fotolar/berber3.jpeg";
import goruntuisleme1 from "../fotolar/goruntuisleme1.jpeg";
import goruntuisleme2 from "../fotolar/goruntuisleme2.jpeg";
import goruntuisleme3 from "../fotolar/goruntuisleme3.jpeg";
import spor1 from "../fotolar/spor1.jpeg";
import spor2 from "../fotolar/spor2.jpeg";
import spor3 from "../fotolar/spor3.jpeg";
import staj1 from "../fotolar/staj1.jpeg";
import staj2 from "../fotolar/staj2.jpeg";
import staj3 from "../fotolar/staj3.jpeg";
import newssite1 from "../fotolar/newssite1.jpeg";
import newssite2 from "../fotolar/newssite2.jpeg";
import newssite3 from "../fotolar/newssite3.jpeg";
import hesapmakinesi1 from "../fotolar/hesapmakinesi1.jpeg";
import hesapmakinesi2 from "../fotolar/hesapmakinesi2.jpeg";
import yapılacak1 from "../fotolar/yapılacak1.jpeg";
import yapılacak2 from "../fotolar/yapılacak2.jpeg";
import gardener1 from "../fotolar/gardener1.jpeg";
import gardener2 from "../fotolar/gardener2.jpeg";
import gardener3 from "../fotolar/gardener3.jpeg";
import oyun1 from "../fotolar/oyun1.jpeg";
import oyun2 from "../fotolar/oyun2.jpeg";
import oyun3 from "../fotolar/oyun3.jpeg";
import oyun4 from "../fotolar/oyun4.jpeg";
import kişisel1 from "../fotolar/kişisel1.jpeg";
import horsinggame1 from "../fotolar/horsinggame1.jpeg";
import horsinggame2 from "../fotolar/horsinggame2.jpeg";
import stok1 from "../fotolar/stok1.jpeg";
import stok2 from "../fotolar/stok2.jpeg";
import stok3 from "../fotolar/stok3.jpeg";
import stok4 from "../fotolar/stok4.jpeg";



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

// Etiketler için memoize edilmiş component
const Etiketler = memo(({ etiketler }) => (
  <Box className="proje-etiketler" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 0, justifyContent: 'flex-start' }}>
    {etiketler.map((etiket, i) => (
      <Box
        key={i}
        sx={{
          background: etiket.renk,
          color: '#fff',
          fontSize: 13,
          fontWeight: 600,
          borderRadius: 999,
          px: 2,
          py: 0.5,
          mr: 0.5,
          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
          letterSpacing: 0.5,
        }}
      >
        {etiket.ad}
      </Box>
    ))}
  </Box>
));

// Geliştiriliyor etiketi
const GelistiriliyorEtiketi = memo(() => (
  <Box
    sx={{
      background: 'linear-gradient(90deg,#ff9800,#ffb347)',
      color: '#fff',
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 999,
      px: 2,
      py: 0.5,
      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
      letterSpacing: 0.5,
      display: 'flex',
      alignItems: 'center',
      gap: 0.7,
    }}
  >
    <SettingsIcon sx={{ fontSize: 16, color: '#fff', mr: 0.7, animation: 'spin 1.2s linear infinite', '@keyframes spin': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } } }} />
    Şu anda Geliştiriliyor Takipte Kalın
  </Box>
));

// Github ikonu
const GithubIconButton = memo(({ url, cardBg, githubIconColor, isDark }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <Box
      sx={{
        background: cardBg,
        color: githubIconColor,
        fontSize: 13,
        fontWeight: 600,
        borderRadius: 999,
        px: 2,
        py: 0.5,
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
        letterSpacing: 0.5,
        display: 'flex',
        alignItems: 'center',
        gap: 0.7,
        transition: 'background 0.2s',
        '&:hover': { background: isDark ? 'linear-gradient(90deg,#3ea6ff,#00e6d6)' : 'linear-gradient(90deg,#232b39,#00e6d6)' },
      }}
    >
      <GitHubIcon sx={{ fontSize: 30, color: githubIconColor, mr: 0.9 }} />
    </Box>
  </a>
));

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function Projelerim() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const cardBg = isDark ? 'rgba(35, 43, 57, 0.97)' : 'rgba(255,255,255,0.97)';
  const borderColor = isDark ? '#232b39' : '#e0e0e0';
  const hoverBorder = '#19e6d6';
  const hoverShadow = isDark
    ? '0 0 24px 2px #19e6d655, 0 0 0 4px #19e6d633'
    : '0 0 24px 2px #19e6d655, 0 0 0 2px #19e6d633';
  const githubIconColor = isDark ? '#fff' : '#232b39';

  const [openModal, setOpenModal] = useState(false);
  const [modalImgIndex, setModalImgIndex] = useState(0);
  const [modalImgList, setModalImgList] = useState([]);
  const [objectFitMap, setObjectFitMap] = useState({});

  // Görsel yüklendiğinde oranına göre objectFit belirle
  const handleImgLoad = useCallback((e, imgKey) => {
    const { naturalWidth, naturalHeight } = e.target;
    setObjectFitMap(prev => ({
      ...prev,
      [imgKey]: naturalHeight > naturalWidth ? 'contain' : 'cover'
    }));
  }, []);

  const handleOpenModal = useCallback((img, imgList) => {
    setModalImgList(imgList);
    setModalImgIndex(imgList.indexOf(img));
    setOpenModal(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setModalImgList([]);
    setModalImgIndex(0);
  }, []);

  // projeleri 3'erli gruplara ayır
  const projeGruplari = chunkArray(projeler, 3);

  return (
    <Box sx={{ width: '100%', minHeight: '90vh', bgcolor: 'background.default', px: { xs: 1, md: 6 }, py: 8 }}>
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
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {projeGruplari.map((grup, grupIdx) => (
          <Grid container spacing={4} justifyContent="center" alignItems="flex-start" key={grupIdx} sx={{ mt: grupIdx === 0 ? 0 : '59px' }}>
            {grup.map((proje, idx) => {
              const globalIdx = grupIdx * 3 + idx;
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
      {/* Modal: Büyük görseli göstermek için */}
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
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 10, bgcolor: 'rgba(0,0,0,0.5)', color: '#fff', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' } }}
          >
            <CloseIcon />
          </IconButton>
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