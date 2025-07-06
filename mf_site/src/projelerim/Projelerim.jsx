import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";
import pp from "../fotolar/pp.jpeg";
import hakkimda_pp from "../fotolar/hakkimda_pp.jpeg";
import site_icon from "../fotolar/site_icon.jpeg";
import berber1 from "../fotolar/berber1.jpeg";
import berber2 from "../fotolar/berber2.jpeg";
import berber3 from "../fotolar/berber3.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const projeler = [
  {
    baslik: "Yapay Zekâ Tabanlı Kuaför Asistanı ve İşletme Yönetimi Uygulaması",
    aciklama:
      "Bu uygulama, kuaförler ve güzellik salonları için randevu yönetim uygulamasıdır. Backend kısmı Spring Boot ile yazılmıştır. Yapay zeka ise Python-Flask ile geliştirilmiştir. Yapay zekaya fotoğrafınızı yükleyerek saç kesimi ve bakım önerileri alabilxy .",
    etiketler: [
      { ad: "Python-Flask", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "Spring Boot", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
    ],
    fotolar: [berber1, berber2, berber3],
    github: "#",
  },
  {
    baslik: "Görüntü İşleme ve Kümeleme Uygulaması",
    aciklama:
      "C# Windows Forms ile geliştirilmiş kapsamlı görüntü işleme uygulaması.",
    etiketler: [
      { ad: "C#", renk: "linear-gradient(90deg,#1976d2,#00e6d6)" },
      { ad: "Windows Forms", renk: "linear-gradient(90deg,#43e97b,#38f9d7)" },
    ],
    fotolar: [hakkimda_pp, site_icon, pp],
    github: "#",
  },
  {
    baslik: "Işık Yoğunluğu Ölçer",
    aciklama:
      "BH1750 ışık yoğunluğu sensörünü ESP8266 NodeMCU kartı ve Arduino IDE kullanarak ışık şiddetini ölçme uygulaması.",
    etiketler: [
      { ad: "SwiftUI", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "C++", renk: "linear-gradient(90deg,#2196f3,#19e6d6)" },
      { ad: "Arduino", renk: "linear-gradient(90deg,#00c853,#00e6d6)" },
      { ad: "ESP8266", renk: "linear-gradient(90deg,#00bcd4,#4caf50)" },
    ],
    fotolar: [pp, hakkimda_pp, site_icon],
    github: "#",
  },
];

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

  const [openModal, setOpenModal] = React.useState(false);
  const [modalImgIndex, setModalImgIndex] = React.useState(0);
  const [modalImgList, setModalImgList] = React.useState([]);

  const handleOpenModal = (img, imgList) => {
    setModalImgList(imgList);
    setModalImgIndex(imgList.indexOf(img));
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setModalImgList([]);
    setModalImgIndex(0);
  };

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
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {projeler.map((proje, idx) => (
          <Grid item xs={12} sm={6} md={4} key={proje.baslik} sx={{ display: 'flex', flex: 1, minWidth: 0, maxWidth: '100%', height: '100%' }}>
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
              {/* Üst görsel alanı */}
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
                    {proje.fotolar.map((foto, idx) => (
                      <SwiperSlide key={idx}>
                        <Box
                          component="img"
                          src={foto}
                          alt={proje.baslik + " görsel " + (idx + 1)}
                          sx={{
                            width: 180,
                            height: 250,
                            objectFit: 'contain',
                            borderRadius: 3,
                            background: 'transparent',
                            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                            mx: 'auto',
                            display: 'block',
                            cursor: 'pointer',
                            transition: 'box-shadow 0.2s',
                          }}
                          onClick={() => handleOpenModal(foto, proje.fotolar)}
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
                      width: 180,
                      height: 250,
                      objectFit: 'contain',
                      borderRadius: 3,
                      background: 'transparent',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                      mx: 'auto',
                      display: 'block',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.2s',
                    }}
                    onClick={() => handleOpenModal(proje.fotolar[0], proje.fotolar)}
                  />
                )}
              </Box>
              {/* Alt içerik alanı */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', px: 3, pt: 2, pb: 2, bgcolor: '#232b39', position: 'relative' }}>
                {/* Üst alan: başlık ve açıklama */}
                <Box sx={{ width: '100%' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1, textAlign: 'left', fontSize: '1.1rem' }}>
                    {proje.baslik}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0bec5', mb: 2, textAlign: 'left', fontSize: '0.95rem' }}>
                    {proje.aciklama}
                  </Typography>
                </Box>
                {/* Alt alan: etiketler ve ikonlar */}
                {proje.baslik === "Yapay Zekâ Tabanlı Kuaför Asistanı ve İşletme Yönetimi Uygulaması" ? (
                  <>
                    <Box sx={{ position: 'absolute', left: 11, bottom: 50, pl: '2px', pb: 0, mt: 0, zIndex: 5 }}>
                      <Box className="proje-etiketler" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 0, justifyContent: 'flex-start' }}>
                        {proje.etiketler.map((etiket, i) => (
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
                    </Box>
                    <Box sx={{ position: 'absolute', left: 0, bottom: 2, pl: 2, pb: 1, mt: 0 }}>
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
                    </Box>
                  </>
                ) : (
                  <>
                    <Box sx={{ position: 'absolute', left: 11, bottom: 55, pl: '2px', pb: 0, mt: 0, zIndex: 5 }}>
                      <Box className="proje-etiketler" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 0, justifyContent: 'flex-start' }}>
                        {proje.etiketler.map((etiket, i) => (
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
                    </Box>
                    <Box sx={{ position: 'absolute', left: 0, bottom: 0, pl: 0, pb: 0, mt: 0, zIndex: 1 }}>
                      <a href={proje.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
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
                    </Box>
                  </>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* Modal */}
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