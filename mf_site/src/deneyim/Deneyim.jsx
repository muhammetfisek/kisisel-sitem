import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useTheme } from '@mui/material/styles';

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
        location: "İstnabul-Üsküdar, Türkiye - Ofisten",
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

function TimelineList({ items, icon, color }) {
  return (
    <Box sx={{ position: 'relative', pl: 6, mt: 2 }}>
      {/* Dikey çizgi */}
      <Box sx={{
        position: 'absolute',
        left: 28,
        top: 0,
        bottom: 0,
        width: 6,
        bgcolor: color + '55',
        borderRadius: 3,
        zIndex: 0,
        boxShadow: `0 0 16px 2px ${color}33`,
      }} />
      {items.map((item, idx) => (
        <Box key={item.title} sx={{ position: 'relative', mb: 6, minHeight: 100 }}>
          {/* Nokta */}
          <Box sx={{
            position: 'absolute',
            left: 18,
            top: 12,
            width: 32,
            height: 32,
            bgcolor: '#181a20',
            borderRadius: '50%',
            border: `5px solid ${color}`,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 16px 2px ${color}55`,
          }}>
            {icon}
          </Box>
          <Box sx={{ ml: 8 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20 }}>{item.title}</Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5, fontSize: 16 }}>
              {item.company || item.degree}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, mt: 0.5 }}>
              <CalendarMonthIcon sx={{ fontSize: 18, color: color }} />
              <span>{item.date}</span>
              <LocationOnIcon sx={{ fontSize: 18, color: color }} />
              <span>{item.location}</span>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 15 }}>{item.description}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default function Deneyim() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const cardBg = isDark
    ? 'rgba(30, 41, 59, 0.85)'
    : 'rgba(255, 255, 255, 0.85)';

  return (
    <Box sx={{ width: '100%', minHeight: '90vh', bgcolor: 'background.default', px: { xs: 1, md: 6 }, py: 6, mt: { xs: 3, md: 6 } }}>
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
        DENEYİM & EĞİTİM
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
      <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
        Profesyonel deneyimlerim ve akademik geçmişim
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{
        flexWrap: 'nowrap',
        overflowX: { xs: 'auto', md: 'visible' },
        maxWidth: '100vw',
        minHeight: 700,
        gap: 4,
      }}>
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
            {/* Timeline */}
            <Box sx={{ position: 'relative', pl: 6, mt: 2 }}>
              {/* Dikey çizgi */}
              <Box sx={{
                position: 'absolute',
                left: 28,
                top: 0,
                bottom: 0,
                width: 6,
                bgcolor: '#2196f355',
                borderRadius: 3,
                zIndex: 0,
                boxShadow: '0 0 16px 2px #2196f333',
              }} />
              {deneyimler.map((item, idx) => (
                <Box key={item.title} sx={{ position: 'relative', mb: 7, minHeight: 120, mt: idx === 1 ? 12 : 0 }}>
                  {/* Nokta ve başlık hizası */}
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: 0 }}>
                    <Box sx={{
                      width: 32,
                      height: 32,
                      bgcolor: '#181a20',
                      borderRadius: '50%',
                      border: '5px solid #2196f3',
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 16px 2px #2196f355',
                      mr: 2
                    }}>
                      <WorkIcon sx={{ color: '#2196f3', fontSize: 20 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, color: '#fff', mb: 0, textAlign: 'left' }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 6, textAlign: 'left' }}>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 400, fontSize: 17, mb: 0.5, textAlign: 'left' }}>
                      {item.company}
                    </Typography>
                    <Box sx={{ mb: 0.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.2 }}>
                        <CalendarMonthIcon sx={{ fontSize: 18, color: '#2196f3' }} />
                        <Typography sx={{ fontSize: 15, color: 'text.secondary', fontWeight: 700, textAlign: 'left' }}>
                          {item.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon sx={{ fontSize: 18, color: '#2196f3' }} />
                        <Typography sx={{ fontSize: 15, color: 'text.secondary', fontWeight: 700, textAlign: 'left' }}>
                          {item.location}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 15, fontWeight: 400, mt: 1, textAlign: 'left' }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
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
            {/* Timeline */}
            <Box sx={{ position: 'relative', pl: 6, mt: 2 }}>
              {/* Dikey çizgi */}
              <Box sx={{
                position: 'absolute',
                left: 28,
                top: 0,
                bottom: 0,
                width: 6,
                bgcolor: '#43a04755',
                borderRadius: 3,
                zIndex: 0,
                boxShadow: '0 0 16px 2px #43a04733',
              }} />
              {egitimler.map((item, idx) => (
                <Box key={item.title} sx={{ position: 'relative', mb: 7, minHeight: 120, mt: idx === 1 ? 7 : 0 }}>
                  {/* Nokta ve başlık hizası */}
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: 0 }}>
                    <Box sx={{
                      width: 32,
                      height: 32,
                      bgcolor: '#181a20',
                      borderRadius: '50%',
                      border: '5px solid #43a047',
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 16px 2px #43a04755',
                      mr: 2
                    }}>
                      <SchoolIcon sx={{ color: '#43a047', fontSize: 20 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, color: '#fff', mb: 0, textAlign: 'left' }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 6, textAlign: 'left' }}>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 400, fontSize: 17, mb: 0.5, textAlign: 'left' }}>
                      {item.degree}
                    </Typography>
                    <Box sx={{ mb: 0.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.2 }}>
                        <CalendarMonthIcon sx={{ fontSize: 18, color: '#43a047' }} />
                        <Typography sx={{ fontSize: 15, color: 'text.secondary', fontWeight: 700, textAlign: 'left' }}>
                          {item.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon sx={{ fontSize: 18, color: '#43a047' }} />
                        <Typography sx={{ fontSize: 15, color: 'text.secondary', fontWeight: 700, textAlign: 'left' }}>
                          {item.location}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 15, fontWeight: 400, mt: 1, textAlign: 'left' }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
} 