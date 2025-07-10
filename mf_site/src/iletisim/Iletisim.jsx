import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import SendIcon from '@mui/icons-material/Send';

export default function Iletisim() {
  const [form, setForm] = useState({
    adsoyad: "",
    konu: "",
    mesaj: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:muhammetfisek121@gmail.com?subject=${encodeURIComponent(form.konu)}&body=${encodeURIComponent(`Ad Soyad: ${form.adsoyad}\nMesaj: ${form.mesaj}`)}`;
    window.location.href = mailto;
  };

  const handleUnselect = (e) => {
    if (e.target.value) {
      const len = e.target.value.length;
      e.target.setSelectionRange(len, len);
    }
  };

  return (
    <Box sx={{ width: '100%', minHeight: '90vh', bgcolor: 'background.default', py: { xs: 4, md: 12 }, px: { xs: 1, md: 6 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          textAlign: "center",
          letterSpacing: 2,
          mb: 1,
          background: "linear-gradient(270deg, #00c6fb, #1de9b6, #00c6fb)",
          backgroundSize: "200% 200%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          animation: "waveGradient 4s ease-in-out infinite",
          textShadow: "0 4px 24px rgba(0,198,251,0.25)",
          '@keyframes waveGradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      >
        İLETİŞİME GEÇ
        <Box
          sx={{
            width: 180,
            height: 6,
            bgcolor: "secondary.main",
            borderRadius: 3,
            mx: "auto",
            mt: 1,
            boxShadow: "0 2px 12px 0 rgba(29,233,182,0.3)",
          }}
        />
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
        Proje teklifleri, iş birliği fırsatları veya herhangi bir sorunuz varsa benimle iletişime geçebilirsiniz.
      </Typography>
      <Paper elevation={8} sx={{
        maxWidth: 500,
        width: '100%',
        mx: 'auto',
        p: 4,
        borderRadius: 4,
        bgcolor: 'background.paper',
        boxShadow: '0 8px 32px 0 rgba(25,230,214,0.10)',
        border: '2px solid transparent',
        transition: 'border-color 0.4s, box-shadow 0.4s, transform 0.3s',
        position: 'relative',
        '&:hover': {
          borderColor: 'secondary.main',
          boxShadow: '0 0 16px 2px #00c6fb55, 0 0 0 4px #1de9b655',
          transform: 'scale(1.03)',
        },
      }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Ad Soyad"
            name="adsoyad"
            value={form.adsoyad}
            onChange={handleChange}
            onFocus={handleUnselect}
            onMouseUp={handleUnselect}
            onSelect={handleUnselect}
            inputProps={{
              autoComplete: 'off',
              spellCheck: false,
              style: { caretColor: '#00c6fb' }
            }}
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <TextField
            label="Konu"
            name="konu"
            value={form.konu}
            onChange={handleChange}
            onFocus={handleUnselect}
            onMouseUp={handleUnselect}
            onSelect={handleUnselect}
            inputProps={{
              autoComplete: 'off',
              spellCheck: false,
              style: { caretColor: '#00c6fb' }
            }}
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <TextField
            label="Mesaj"
            name="mesaj"
            value={form.mesaj}
            onChange={handleChange}
            onFocus={handleUnselect}
            onMouseUp={handleUnselect}
            onSelect={handleUnselect}
            inputProps={{
              autoComplete: 'off',
              spellCheck: false,
              style: { caretColor: '#00c6fb' }
            }}
            fullWidth
            required
            multiline
            minRows={5}
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            fullWidth
            sx={{ fontWeight: 700, fontSize: 18, py: 1.2, mt: 1, background: 'linear-gradient(90deg,#00c6fb,#1de9b6)', boxShadow: '0 2px 12px 0 rgba(29,233,182,0.15)' }}
          >
            Gönder
          </Button>
        </form>
      </Paper>
    </Box>
  );
} 