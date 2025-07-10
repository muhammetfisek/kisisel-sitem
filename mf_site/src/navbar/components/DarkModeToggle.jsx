import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Brightness2Icon from "@mui/icons-material/Brightness2";

// Dark mode aç/kapa butonu componenti
export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <Tooltip 
      title="Dark modda kullanmanız tavsiye edilir" 
      placement="bottom"
      arrow
    >
      <IconButton
        onClick={() => setDarkMode((prev) => !prev)}
        color="inherit"
        aria-label="dark mode toggle"
        size="large"
      >
        <Brightness2Icon sx={{ color: darkMode ? '#fff' : '#222' }} />
      </IconButton>
    </Tooltip>
  );
} 