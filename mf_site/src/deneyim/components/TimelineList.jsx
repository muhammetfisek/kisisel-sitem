import React from "react";
import Box from "@mui/material/Box";
import TimelineItem from "./TimelineItem";

// Birden fazla deneyim veya eğitim satırını ve aradaki dikey çizgiyi gösteren component
export default function TimelineList({ items, icon, color }) {
  return (
    // Timeline'ın ana kutusu, sola boşluk bırakır
    <Box sx={{ position: 'relative', pl: 6, mt: 2 }}>
      {/* Dikey çizgi: Timeline boyunca uzanan renkli çizgi */}
      <Box sx={{
        position: 'absolute',
        left: 28,
        top: 0,
        bottom: 0,
        width: 6,
        bgcolor: color + '55',
        borderRadius: 3,
        zIndex: 0,
        boxShadow: `0 0 16px 2px ${color}33`,
      }} />
      {/* Her bir deneyim/egitim için TimelineItem componenti çağrılır */}
      {items.map((item, idx) => (
        <TimelineItem key={item.title} item={item} icon={icon} color={color} />
      ))}
    </Box>
  );
} 