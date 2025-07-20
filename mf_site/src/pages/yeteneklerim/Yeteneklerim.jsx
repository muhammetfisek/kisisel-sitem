import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from '@mui/material/Fade';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import TranslateIcon from '@mui/icons-material/Translate';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SkillGroupCard from "./components/SkillGroupCard";
import BounceArrow from "../iletisim/components/BounceArrow";
import { useTranslation } from "react-i18next";

// Yetenek gruplarını ve her grubun altındaki yetenekleri tanımlayan sabit dizi
const skills = [
  {
    icon: <CodeIcon sx={{ fontSize: 50, color: '#2196f3', bgcolor: '#16213e', borderRadius: 2, p: 1 }} />, 
    title: "Programlama & Geliştirme",
    color: "#2196f3",
    items: [
      { name: "Java - Spring Boot", level: 80 },
      { name: "React.js", level: 70 },
      { name: "Android Geliştirme(Java)", level: 70 },
      { name: "C#", level: 70 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 78 },
      { name: "HTML/CSS", level: 95 },
      { name: "MS-SQL", level: 70 },
      { name: "PostgreSQL", level: 50 },
      { name: "Veri Yapıları ve Algoritmalar", level: 75 },
      { name: "Nesne Yönelimli Programlama (OOP)", level: 75 },
      { name: "Redis", level: 50 },
      { name: "Yapay Zeka Temelleri", level: 50 },
    ],
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 50, color: '#ab47bc', bgcolor: '#2d193e', borderRadius: 2, p: 1 }} />, 
    title: "Tasarım",
    color: "#ab47bc",
    items: [
      { name: "Mobile Android UI/UX", level: 40 },
      { name: "Web UI/UX", level: 85 },
      { name: "Adobe Photoshop", level: 50 },
    ],
  },
  {
    icon: <TranslateIcon sx={{ fontSize: 50, color: '#26a69a', bgcolor: '#193e2d', borderRadius: 2, p: 1 }} />, 
    title: "Diller",
    color: "#26a69a",
    items: [
      { name: "Türkçe (Anadil)", level: 100 },
      { name: "İngilizce (Orta)", level: 60 },
      { name: "Fransızca (Başlangıç)", level: 30 },
    ],
  },
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: 50, color: '#ffa726', bgcolor: '#3e2d19', borderRadius: 2, p: 1 }} />, 
    title: "Kişisel Beceriler",
    color: "#ffa726",
    items: [
      { name: "Problem Çözme", level: 90 },
      { name: "Analitik Düşünme", level: 85 },
      { name: "Takım Çalışması", level: 80 },
      { name: "Zaman Yönetimi", level: 75 },
    ],
  },
];

// Yeteneklerim ana sayfa componenti
export default function Yeteneklerim() {
  const { t } = useTranslation();
  const groups = t('skills.groups', { returnObjects: true });
  // Sayfa animasyonunu başlatmak için kullanılan state
  const [show, setShow] = React.useState(false);
  // Component mount olduğunda animasyonu başlat
  React.useEffect(() => { setShow(true); }, []);

  return (
    // Sayfanın ana kutusu, responsive padding ve arka plan rengi ile
    <Box sx={{ width: '100%', minHeight: '90vh', bgcolor: 'background.default', px: { xs: 1, md: 6 }, mt: { xs: 3, md: 10 } }}>
      <Box sx={{ height: '10px' }} />
      {/* Başlık ve alt başlık animasyonlu şekilde */}
      <Fade in={show} timeout={900}>
        <Box>
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
            {t('yeteneklerim.baslik')}
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
            {t('yeteneklerim.altBaslik')}
          </Typography>
        </Box>
      </Fade>
      {/* Yetenek gruplarını grid olarak sırala */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {skills.map((group, idx) => (
          <Grid item xs={12} sm={6} md={3} key={group.title} sx={{ display: 'flex', flex: 1, minWidth: 250, maxWidth: 350, height: '100%', justifyContent: 'center' }}>
            <Fade in={show} timeout={1000}>
              <Box sx={{ width: '100%' }}>
                <SkillGroupCard group={group} groupIdx={idx} />
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 