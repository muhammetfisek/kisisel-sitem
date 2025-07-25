// Etiketler: Proje kartında kullanılan teknolojileri/özellikleri gösteren component.
// Her etiket için renkli bir rozet gösterir.

import React, { memo } from "react";
import Box from "@mui/material/Box";

const Etiketler = memo(({ etiketler }) => (
  <Box className="proje-etiketler" sx={{ 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: { xs: 0.5, sm: 1 }, 
    mb: 0, 
    justifyContent: 'flex-start' 
  }}>
    {etiketler.map((etiket, i) => (
      <Box
        key={i}
        sx={{
          background: etiket.renk,
          color: '#fff',
          fontSize: { xs: 11, sm: 13 },
          fontWeight: 600,
          borderRadius: 999,
          px: { xs: 1.5, sm: 2 },
          py: 0.5,
          mr: { xs: 0.3, sm: 0.5 },
          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
          letterSpacing: 0.5,
        }}
      >
        {etiket.ad}
      </Box>
    ))}
  </Box>
));

export default Etiketler; 