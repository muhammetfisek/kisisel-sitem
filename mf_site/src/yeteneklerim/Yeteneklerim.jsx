import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import TranslateIcon from '@mui/icons-material/Translate';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const skills = [
  {
    icon: <CodeIcon sx={{ fontSize: 50, color: '#2196f3', bgcolor: '#16213e', borderRadius: 2, p: 1 }} />,
    title: "Programlama & Geliştirme",
    color: "#2196f3",
    items: [
      { name: "Java - Spring Framework ", level: 80 },
      { name: "Mobil - Android(Java)", level: 70 },
      { name: "C#", level: 70 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 78 },
      { name: "HTML/CSS", level: 95 },
      { name: "MS-SQL", level: 70 },
      { name: "PostgreSQL", level: 50 },
      { name: "Veri Yapıları ve Algoritmalar", level: 75 },
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

export default function Yeteneklerim() {
  return (
    <Box sx={{ width: '100%', minHeight: '90vh', bgcolor: 'background.default', px: { xs: 1, md: 6 } }}>
      <Box sx={{ height: '10px' }} />
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
        YETENEKLERİM
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
        Kariyerim boyunca edindiğim teknik ve kişisel becerilerim
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {skills.map((group, idx) => (
          <Grid item xs={12} sm={6} md={3} key={group.title} sx={{ display: 'flex', flex: 1, minWidth: 0, maxWidth: '100%', height: '100%' }}>
            <Paper
              elevation={8}
              sx={{
                p: 0,
                borderRadius: 4,
                minHeight: 450,
                height: 480,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                border: '2px solid transparent',
                transition: 'border-color 0.4s, box-shadow 0.4s, transform 0.3s',
                '&:hover': {
                  borderColor: group.color,
                  boxShadow: `0 0 16px 2px ${group.color}55, 0 0 0 4px ${group.color}33`,
                  transform: 'scale(1.04)',
                },
              }}
            >
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                justifyContent: 'flex-start',
                height: '20%',
                minHeight: 70,
                px: 3,
                pt: 3,
                pb: 1,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                background: 'transparent',
              }}>
                {group.icon}
                <Typography variant="h1" sx={{ fontWeight: 800, color: group.color, fontSize: { xs: 22, md: 26 } }}>
                  {group.title}
                </Typography>
              </Box>
              <Box sx={{ height: '30px' }} />
              <Box sx={{
                width: '100%',
                flex: 1,
                minHeight: 0,
                overflowY: 'auto',
                pl: 1.5,
                pb: 3,
                px: 3,
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
                ref={el => group.scrollRef = el}
              >
                {group.items.map((item) => (
                  <Box key={item.name} sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 500, mb: 0.5, fontSize: '16px' }}>
                      {item.name}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={item.level}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        background: '#222',
                        '& .MuiLinearProgress-bar': {
                          background: group.color,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
              <ShowScrollArrow group={group} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function ShowScrollArrow({ group }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const el = group.scrollRef;
    if (!el) return;
    const checkScroll = () => {
      setShow(el.scrollHeight > el.clientHeight);
    };
    checkScroll();
    el.addEventListener('resize', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el && el.removeEventListener('resize', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [group.scrollRef]);
  if (!show) return null;
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right', mt: -2 }}>
      <KeyboardArrowDownIcon sx={{
        color: group.color,
        fontSize: 32,
        animation: 'bounceDown 1.2s infinite',
        '@keyframes bounceDown': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      }} />
    </Box>
  );
} 