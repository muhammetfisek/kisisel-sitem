import React from "react";
import Box from "@mui/material/Box";

import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import WelcomeHeader from "./components/WelcomeHeader";
import ProfileInfo from "./components/ProfileInfo";
import ProfileAvatar from "./components/ProfileAvatar";
import ScrollDownArrow from "./components/ScrollDownArrow";

export default function Home() {
  // Gülücük animasyonu için hover state'i
  const [hover, setHover] = React.useState(false);
  // Sayfa animasyonları için show state'i
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      {/* Hoşgeldiniz başlığı ve gülücük animasyonu */}
      <Fade in={show} timeout={900}>
        <Box>
          <WelcomeHeader hover={hover} setHover={setHover} show={show} />
        </Box>
      </Fade>
      {/* Profil bilgileri ve fotoğrafı */}
      <Slide in={show} direction="up" timeout={1000}>
        <Box>
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
            {/* Sol kısım: İsim, unvan, açıklama, sosyal medya */}
            <ProfileInfo />
            {/* Sağ kısım: Profil fotoğrafı */}
            <ProfileAvatar />
          </Box>
        </Box>
      </Slide>
      {/* Aşağı ok animasyonu */}
      <Fade in={show} timeout={1200}>
        <Box>
          <ScrollDownArrow show={show} />
        </Box>
      </Fade>
    </>
  );
} 