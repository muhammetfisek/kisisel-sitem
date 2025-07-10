import React, { useState, useCallback, memo } from "react";
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

const projeler = [
  // 1. KUTU
  {
    baslik: "Yapay Zekâ Tabanlı Kuaför Asistanı ve İşletme Yönetimi Uygulaması",
    aciklama:
      "Bu uygulama, kuaförler ve güzellik salonları için randevu yönetim uygulamasıdır. Backend kısmı Spring Boot ile yazılmıştır. Yapay zeka ise Python-Flask ile geliştirilmiştir. Yapay zekaya fotoğrafınızı yükleyerek saç kesimi ve bakım önerileri alabiliyoruz .",
    etiketler: [
      { ad: "Python-Flask", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "Spring Boot", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
    ],
    fotolar: [berber1, berber2, berber3],
    github: "#",
  },
  // 2. KUTU
  {
    baslik: "Görüntü İşleme ve Kümeleme Uygulaması",
    aciklama:
      "C# Windows Forms kullanarak geliştirdiğim kapsamlı bir uygulamadır. K-Means (yoğunluk, RGB, Mahalanobis) ve Sobel kenar bulma gibi gelişmiş görüntü işleme algoritmalarını içerir. Detaylı piksel ve histogram analiz yetenekleri de sunmaktadır.",
    etiketler: [
      { ad: "C#", renk: "linear-gradient(90deg,#1976d2,#00e6d6)" },
      { ad: "Windows Forms", renk: "linear-gradient(90deg,#43e97b,#38f9d7)" },
    ],
    fotolar: [goruntuisleme1, goruntuisleme2, goruntuisleme3],
    github: "https://github.com/muhammetfisek/image-processing.git",
  },
  // 3. KUTU
  {
    baslik: "Spor Kompleksi Uygulaması",
    aciklama:
      "Mobil uygulama Java ve SQLite kullanılarak geliştirilmiştir. Kullanıcılar uygulamaya kayıt olarak ve giriş yaparak günlük egzersiz rutinlerini oluşturabilirler. Amacımız, uygulayacağımız egzersizleri göstererek kullanıcıların günlük yaşamlarında sağlıklı bir yaşam tarzı sürdürmelerine yardimci olmaktır.",
    etiketler: [
      { ad: "Android-Java", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
    
      { ad: "SQLite", renk: "linear-gradient(90deg,#00bcd4,#4caf50)" },
    ],
    fotolar: [spor1,spor2,spor3],
    github: "https://github.com/muhammetfisek/Spor-Kompleksi.git",
  },
  // 4. KUTU
  {
    baslik: "Staj Projesi: Kullanıcı Platformu",
    aciklama:
      "Bu uygulama kullanıcı odaklı bir sosyal etkileşim platformudur. Uygulama, güvenli kayıt/giriş, kullanıcı listeleme, detaylı profil görüntüleme ve düzenleme gibi fonksiyonellikler sağlayarak, kullanıcıların dijital ortamda birbirleriyle bağlantı kurmasını ve bilgi paylaşmasını kolaylaştırır.",
    etiketler: [
      { ad: "React JS ", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "Spring Boot", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "H2 Database", renk: "linear-gradient(90deg,#00bcd4,#4caf50)" },

    ],
    fotolar: [staj1,staj2,staj3],
    github: "https://github.com/muhammetfisek/staj-projesi.git",
  },
  // 5. KUTU
  {
    baslik: "Statik Web Sitesi: Haberler",
    aciklama:
      "HTML ve CSS kullanılarak geliştirildi. Haber ve içerik gösteren bir web sitesi oluşturuldu. Anasayfa,Bilim,Spor,Teknoloji vb. sayfalardan oluşmaktadır.",
    etiketler: [
      { ad: "HTML", renk: "linear-gradient(90deg,#1976d2,#00e6d6)" },
      { ad: "CSS", renk: "linear-gradient(90deg,#43e97b,#38f9d7)" },
    ],
    fotolar: [newssite2,newssite1,newssite3],
    github: "https://github.com/muhammetfisek/News-WebSite.git",
  },
  // 6. KUTU
  {
    baslik: "Horse-Racing-Game",
    aciklama:
      "C# kullanılarak geliştirilmiştir. Oyuncu sayısı girilerek oyuna başlanır. Minimum 2 , maximum 4 oyuncu kabul edilir. Atlar rastgele ilerler ve bitiş çizgisine ilk ulaşan oyuncu kazanır. Oyun reset ile tekrar başlar.",
    etiketler: [
      { ad: "C#", renk: "linear-gradient(90deg,#1976d2,#00e6d6)" },
      { ad: "Windows Forms", renk: "linear-gradient(90deg,#43e97b,#38f9d7)" },
    ],
    fotolar: [horsinggame1,horsinggame2],
    github: "https://github.com/muhammetfisek/Horse-Racing-Game.git",
  },
  // 7. KUTU
  {
    baslik: "Stock-Tracking-System",
    aciklama:
      "C# ve MS-SQL kullanılarak geliştirilmiştir. Yönetici ve çalışan olmak üzere iki ayrı panel bulunmaktadır. Yönetici giriş yapabilir ve çalışan ekleyebilir. Çalışan giriş yaptıktan sonra ürün ekleyip çıkararak ürün stok takip sistemi yapar.",
    etiketler: [
      { ad: "C#", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "MS-SQL", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
    ],
    fotolar: [stok1,stok2,stok3,stok4],
    github: "https://github.com/muhammetfisek/Stock-Tracking-System.git",
  },
  // 8. KUTU
  {
    baslik: " Hesap Makinesi",
    aciklama:
      "HTML, CSS ve JavaScript kullanarak geliştirdiğim tam işlevli bir web tabanlı hesap makinesi uygulamasıdır. Temel aritmetik işlemleri destekler ve dinamik tema değiştirme özelliğine sahiptir.",
    etiketler: [
      { ad: "JavaScript", renk: "linear-gradient(90deg,#1976d2,#00e6d6)" },
      { ad: "HTML", renk: "linear-gradient(90deg,#43e97b,#38f9d7)" },
      { ad: "CSS", renk: "linear-gradient(90deg,#00bcd4,#4caf50)" },
    ],
    fotolar: [hesapmakinesi1,hesapmakinesi2],
    github: "https://github.com/muhammetfisek/HesapMakinesi.git",
  },
  // 9. KUTU
  {
    baslik: "To-Do-List",
    aciklama:
      "Bu projede  yapılacaklar listesi uygulaması geliştirilmiştir. Kullanıcılar yapılacakları ekleyebilir, düzenleyebilir ve silebilir. Ayrıca Tümü, Devam Ediyor ve Bitti butonları ile görevleri filtreleyebilirler.",
    etiketler: [
      { ad: "JavaScript", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "HTML-CSS", renk: "linear-gradient(90deg,#2196f3,#19e6d6)" },
      { ad: "Bootstrap", renk: "linear-gradient(90deg,#00c853,#00e6d6)" },
      { ad: "JQuery", renk: "linear-gradient(90deg,#00bcd4,#4caf50)" },
    ],
    fotolar: [yapılacak1,yapılacak2],
    github: "https://github.com/muhammetfisek/To-Do-List.git",
  },
  // 10. KUTU
  {
    baslik: "Statik Web Sitesi: Gardener",
    aciklama:
      "Bu site HTML, CSS, JS kullanılarak geliştirilmiştir. Site, bazı bitkilerin nasıl yetiştirildiği ve bakımının nasıl yapıldığı hakkında faydalı bilgiler içermektedir.",
    etiketler: [
      { ad: "JavaScript", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "HTML-CSS", renk: "linear-gradient(90deg,#2196f3,#19e6d6)" },
    ],
    fotolar: [gardener1,gardener2,gardener3],
    github: "https://github.com/muhammetfisek/gardener.git",
  },
  // 11. KUTU
  {
    baslik: "Mini-Game-WebSite",
    aciklama:
      "HTML, CSS ve vanilla JavaScript ile geliştirdiğim, kullanıcı dostu bir mini oyun portalıdır. Pong, Yılan Oyunu ve Köstebeğe Vurma gibi popüler oyunları içeren bu site, temel front-end becerilerimi ve dinamik oyun mantığı uygulama yeteneğimi kapsamlı bir şekilde sergiler",
    etiketler: [
      { ad: "JavaScript", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "HTML-CSS", renk: "linear-gradient(90deg,#2196f3,#19e6d6)" },
    ],
    fotolar: [oyun1,oyun2,oyun3,oyun4],
    github: "https://github.com/muhammetfisek/Mini-Game-Website.git",
  },
  // 12. KUTU
  {
    baslik: "Kişisel Web Sitem",
    aciklama:
      " Kişisel portfolyo web sitesidir. Yazılım geliştirme becerilerimi sergileyen çeşitli projelerimi (web, masaüstü, mobil) barındırır. Duyarlı tasarımı ve kullanıcı dostu arayüzü ile çalışmalarımı sunar",
    etiketler: [
      { ad: "React", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "CSS", renk: "linear-gradient(90deg,#2196f3,#19e6d6)" },
      { ad: "JavaScript", renk: "linear-gradient(90deg,#00c853,#00e6d6)" },
    
    ],
    fotolar: [kişisel1],
    github: "https://github.com/muhammetfisek/kisisel-sitem.git",
  },
];

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