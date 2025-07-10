import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

// Tek bir yeteneği ve seviyesini gösteren component
export default function SkillItem({ name, level, color }) {
  return (
    // Yetenek ismi ve seviye barı
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 500, mb: 0.5, fontSize: '16px' }}>
        {name}
      </Typography>
      {/* Seviye barı, rengi gruptan alınır */}
      <LinearProgress
        variant="determinate"
        value={level}
        sx={{
          height: 8,
          borderRadius: 5,
          background: '#222',
          '& .MuiLinearProgress-bar': {
            background: color,
          },
        }}
      />
    </Box>
  );
} 