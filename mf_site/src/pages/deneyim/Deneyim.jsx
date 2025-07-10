import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@mui/material/styles';
import TimelineList from "./components/TimelineList";

// Deneyim (iş) ve eğitim geçmişini tutan veri dizileri
const deneyimler = [
  {
    title: "Backend Developer",
    company: "Serbest Çalışma",
    date: " Şubat 2025 - Devam Ediyor",
    location: "İstanbul, Türkiye - Uzaktan",
    description: "Kendi geliştirmiş olduğum uygulamamın backend kısmını yazıyorum",
  },
  {
    title: "Stajyer Yazılım Geliştirici",
    company: "Staj Okulu , Exedra Bilişim Çözümleri",
    date: "Temmuz 2024 - Ağustos 2024",
    location: "İstanbul-Üsküdar, Türkiye - Ofisten",
    description: "Staj okulu sürecinde sektörün önde gelen firmalarından uzmanların gerçekleştirdiği seminer ve sunumlar sayesinde yazılım geliştirme süreçleri, kariyer planlaması ve güncel teknolojiler hakkında değerli bilgiler edindim. Bu deneyimler ışığında, kendimi aktif olarak geliştirmek adına Spring Boot (backend) ve React (frontend) teknolojilerini entegre ederek, kullanıcıların etkileşimli bir şekilde bilgi ve içerik paylaşımı yapabildiği tam kapsamlı bir web uygulaması hayata geçirdim.",
  },
];

const egitimler = [
  {
    title: "Erzincan Binali Yıldırım Üniversitesi",
    degree: "Bilgisayar Mühendisliği",
    date: "Eylül 2021 - Haziran 2025",
    location: "Erzincan, Türkiye",
    description: "Lisans eğitimimi bilgisayar mühendisliği alanında tamamladım. Eğitimim sırasında programlama, veri yapıları, mobil uygulama geliştirme ve yazılım mühendisliği gibi çeşitli  konularda bilgiler edindim.",
  },
  {
    title: "Kurtköy Anadolu Lisesi",
    degree: "Lise Eğitimi",
    date: "Eylül 2016 - Haziran 2020",
    location: "İstanbul-Pendik, Türkiye",
    description: "Lise eğitimimi tamamlayarak yükseköğrenime hazırlandım. Bu süreçte temel bilimler ve yabancı dil alanlarında kendimi geliştirdim. Lise döneminde orta düzeyde Fransızca eğitimi aldım.",
  },
];

// Deneyim ve eğitim sayfasının ana componenti
export default function Deneyim() {
  // Tema (açık/koyu) bilgisini almak için MUI'nin useTheme hook'u kullanılır
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  // Kartların arka plan rengi, temaya göre belirlenir
  const cardBg = isDark
    ? 'rgba(30, 41, 59, 0.85)'
    : 'rgba(255, 255, 255, 0.85)';

  return (
    // Sayfanın ana kutusu, responsive padding ve arka plan rengi ile
    <Box sx={{ width: '100%', minHeight: '90vh', bgcolor: 'background.default', px: { xs: 1, md: 6 }, py: 6, mt: { xs: 3, md: 6 } }}>
      {/* Sayfa başlığı ve altındaki renkli çizgi */}
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
          // Başlıkta animasyonlu gradient için keyframes
          '@keyframes waveGradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      >
        DENEYİM & EĞİTİM
        {/* Altındaki renkli çizgi */}
        <Box
          sx={{
            width: 220,
            height: 6,
            bgcolor: "secondary.main",
            borderRadius: 3,
            mx: "auto",
            mt: 1,
            boxShadow: "0 2px 12px 0 rgba(29,233,182,0.3)",
          }}
        />
      </Typography>
      {/* Kısa açıklama metni */}
      <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
        Profesyonel deneyimlerim ve akademik geçmişim
      </Typography>
      {/* Deneyim ve eğitim kartlarını grid ile yan yana sırala */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{
        flexWrap: 'nowrap',
        overflowX: { xs: 'auto', md: 'visible' },
        maxWidth: '100vw',
        minHeight: 700,
        gap: 4,
      }}>
        {/* Sol kart: Deneyimler */}
        <Grid item xs={12} sm={6} md={6} lg={5} sx={{ minWidth: 600, maxWidth: 600, flex: 1, display: 'flex', alignItems: 'stretch' }}>
          <Paper elevation={12} sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 6,
            minHeight: 700,
            height: '100%',
            background: cardBg,
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 8px 32px 0 rgba(0,198,251,0.10)',
            border: '2px solid #1a233a',
            transition: 'border-color 0.4s, box-shadow 0.4s',
            '&:hover': {
              borderColor: '#2196f3',
              boxShadow: '0 0 24px 2px #2196f355, 0 0 0 2px #2196f333',
            },
          }}>
            {/* Kart başlığı ve ikon */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
              <Box sx={{
                width: 56,
                height: 56,
                bgcolor: '#2196f3',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px 0 #2196f355',
              }}>
                <WorkIcon sx={{ fontSize: 32, color: '#fff' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 900, color: '#2196f3', ml: 1, fontSize: 32, letterSpacing: 0.5 }}>
                Deneyim
              </Typography>
            </Box>
            {/* TimelineList ile deneyimler listelenir */}
            <TimelineList items={deneyimler} icon={<WorkIcon sx={{ color: '#2196f3', fontSize: 20 }} />} color={'#2196f3'} />
          </Paper>
        </Grid>
        {/* Sağ kart: Eğitimler */}
        <Grid item xs={12} sm={6} md={6} lg={5} sx={{ minWidth: 600, maxWidth: 600, flex: 1, display: 'flex', alignItems: 'stretch' }}>
          <Paper elevation={12} sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 6,
            minHeight: 700,
            height: '100%',
            background: cardBg,
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 8px 32px 0 rgba(67,160,71,0.10)',
            border: '2px solid #1a233a',
            transition: 'border-color 0.4s, box-shadow 0.4s',
            '&:hover': {
              borderColor: '#43a047',
              boxShadow: '0 0 24px 2px #43a04755, 0 0 0 2px #43a04733',
            },
          }}>
            {/* Kart başlığı ve ikon */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
              <Box sx={{
                width: 56,
                height: 56,
                bgcolor: '#43a047',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px 0 #43a04755',
              }}>
                <SchoolIcon sx={{ fontSize: 32, color: '#fff' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 900, color: '#43a047', ml: 1, fontSize: 36, letterSpacing: 0.5 }}>
                Eğitim
              </Typography>
            </Box>
            {/* TimelineList ile eğitimler listelenir */}
            <TimelineList items={egitimler} icon={<SchoolIcon sx={{ color: '#43a047', fontSize: 20 }} />} color={'#43a047'} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
} 