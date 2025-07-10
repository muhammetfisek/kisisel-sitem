import React from "react";
import Box from "@mui/material/Box";
import { Fireworks } from "fireworks-js";

// Footer arka planında havai fişek animasyonu gösteren component
export default function FireworksBackground({ triggerRef }) {
  const canvasContainerRef = React.useRef(null);
  const fireworksRef = React.useRef(null);

  // Mouse ile triggerRef'in üstüne gelince animasyonu başlat
  React.useEffect(() => {
    if (!triggerRef?.current) return;
    const handleMouseEnter = () => {
      if (!canvasContainerRef.current) return;
      // Önce eski canvas'ı temizle
      const oldCanvas = canvasContainerRef.current.querySelector('canvas');
      if (oldCanvas) oldCanvas.remove();
      fireworksRef.current = new Fireworks(canvasContainerRef.current, {
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        rocketsPoint: { min: 0, max: 100 },
        speed: 2,
        acceleration: 1.02,
        friction: 0.98,
        gravity: 1.5,
        particles: 60,
        trace: 3,
        explosion: 6,
        autoresize: true,
        brightness: { min: 50, max: 80 },
        decay: { min: 0.015, max: 0.03 },
        mouse: { click: true, move: true, max: 2 },
      });
      fireworksRef.current.start();
      setTimeout(() => {
        const canvas = canvasContainerRef.current.querySelector('canvas');
        if (canvas) {
          canvas.style.position = 'absolute';
          canvas.style.top = 0;
          canvas.style.left = 0;
          canvas.style.width = '100%';
          canvas.style.height = '100%';
          canvas.style.zIndex = 1;
          canvas.style.pointerEvents = 'none';
        }
      }, 100);
    };
    const handleMouseLeave = () => {
      if (fireworksRef.current) {
        fireworksRef.current.stop();
        const canvas = canvasContainerRef.current?.querySelector('canvas');
        if (canvas) canvas.remove();
        fireworksRef.current = null;
      }
    };
    const node = triggerRef.current;
    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
      if (fireworksRef.current) {
        fireworksRef.current.stop();
        const canvas = canvasContainerRef.current?.querySelector('canvas');
        if (canvas) canvas.remove();
        fireworksRef.current = null;
      }
    };
  }, [triggerRef]);

  return (
    // Havai fişek animasyonu için container (canvas burada, layout'u bozmaz)
    <Box
      ref={canvasContainerRef}
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
} 