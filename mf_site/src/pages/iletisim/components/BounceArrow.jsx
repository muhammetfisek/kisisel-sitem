import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function BounceArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        bgcolor: "primary.main",
        color: "#fff",
        p: 1.2, // padding küçültüldü
        mt: 2,
        marginTop:5,
        display: "flex",
        mx: "auto",
        animation: "bounce 1.2s infinite",
        "@keyframes bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        "&:hover": { bgcolor: "secondary.main" }
      }}
    >
      <ArrowDownwardIcon fontSize="medium" />
    </IconButton>
  );
} 