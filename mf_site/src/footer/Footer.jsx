import React from "react";
import Box from "@mui/material/Box";
import FooterInfo from "./components/FooterInfo";
import FooterSocials from "./components/FooterSocials";
import FireworksBackground from "./components/FireworksBackground";

export default function Footer() {
  const footerRef = React.useRef(null);

  return (
    <Box
      ref={footerRef}
      sx={{
        width: '100%',
        minHeight: 200,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 8,
        py: 5,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        zIndex: 10,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Havai fişek animasyonu için ayrı component */}
      <FireworksBackground triggerRef={footerRef} />
      {/* İsim, unvan ve copyright */}
      <FooterInfo />
      {/* Sosyal medya ikonları */}
      <FooterSocials />
    </Box>
  );
} 