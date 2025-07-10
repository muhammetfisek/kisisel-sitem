import React, { memo } from "react";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";

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

export default GithubIconButton; 