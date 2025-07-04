import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Avatar from "@mui/material/Avatar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ppPhoto from '../fotolar/pp.jpeg';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';

export default function Home() {
  const [hover, setHover] = React.useState(false);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      {/* Hoşgeldiniz başlığı */}
      <Fade in={show} timeout={900}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: { xs: 6, md: 8 },
            mb: 4,
          }}
        >
          <Box
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            {/* Sol gülücük */}
            <Box
              sx={{
                opacity: hover ? 1 : 0,
                transform: hover ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                fontSize: 36,
                mr: 1,
                userSelect: "none",
              }}
            >
              😊
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                textAlign: "center",
                letterSpacing: 2,
                position: "relative",
                mb: 1.5,
                cursor: "pointer",
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
              Hoşgeldiniz
              <Box
                sx={{
                  width: 120,
                  height: 6,
                  bgcolor: "secondary.main",
                  borderRadius: 3,
                  mx: "auto",
                  mt: 1,
                  boxShadow: "0 2px 12px 0 rgba(29,233,182,0.3)",
                }}
              />
            </Typography>
            {/* Sağ gülücük */}
            <Box
              sx={{
                opacity: hover ? 1 : 0,
                transform: hover ? "translateX(0)" : "translateX(20px)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                fontSize: 36,
                ml: 1,
                userSelect: "none",
              }}
            >
              😊
            </Box>
          </Box>
        </Box>
      </Fade>
      {/* Diğer içerikler */}
      <Slide in={show} direction="up" timeout={1000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            px: 3,
            width: "100%",
            maxWidth: "100vw",
          }}
        >
          {/* Sol Kısım */}
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "secondary.main",
                mb: 1,
                marginLeft: 7,
                letterSpacing: 1,
              }}
            >
              Muhammet FİŞEK
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "text.primary", marginLeft: 7,fontWeight: 400, mb: 2 }}
            >
              Bilgisayar Mühendisi & Backend Developer
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary",marginLeft: 7, mb: 3 }}>
            Java + Spring Boot tarafında backend geliştiriyorum. Temiz kod, iyi mimari ve performans odaklı sistemler ilgi alanım. Hobi olarak da modern web uygulamaları tasarlayıp frontend dünyasında kendimi geliştiriyorum.
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                href="https://github.com/muhammetfisek"
                target="_blank"
                sx={{ color: "text.primary",marginLeft: 7 }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com/muhammetfisekk"
                target="_blank"
                sx={{ color: "text.primary" }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://linkedin.com/in/muhammetfişek"
                target="_blank"
                sx={{ color: "text.primary" }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                color="inherit"
                href="mailto:muhammetfisek121@gmail.com"
                sx={{ color: "text.primary" }}
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
          {/* Sağ Kısım */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: 300,
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                p: "6px",
                borderRadius: "50%",
                background: "linear-gradient(270deg, #00c6fb, #1de9b6, #00c6fb)",
                backgroundSize: "200% 200%",
                animation: "waveGradient 4s ease-in-out infinite",
                '@keyframes waveGradient': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
                display: 'inline-block',
              }}
            >
              <Avatar
                alt="Muhammet Fişek"
                src={ppPhoto}
                sx={{ width: 300, height: 300, border: "4px solid #181a20", background: "#181a20" }}
              />
            </Box>
          </Box>
        </Box>
      </Slide>
      {/* Aşağı Ok */}
      <Fade in={show} timeout={1200}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <IconButton
            sx={{ bgcolor: "primary.main",bottom: 30, color: "#fff", p: 2, "&:hover": { bgcolor: "secondary.main" } }}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
          >
            <ArrowDownwardIcon fontSize="medium" />
          </IconButton>
        </Box>
      </Fade>
    </>
  );
} 