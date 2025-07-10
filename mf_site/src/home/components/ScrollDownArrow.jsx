import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// Sayfanın altındaki aşağı ok componenti
export default function ScrollDownArrow({ show }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <IconButton
        sx={{ bgcolor: "primary.main", bottom: 30, color: "#fff", p: 2, "&:hover": { bgcolor: "secondary.main" } }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
      >
        <ArrowDownwardIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
} 