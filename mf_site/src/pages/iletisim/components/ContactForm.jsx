import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Paper from "@mui/material/Paper";

// İletişim formunu gösteren component
export default function ContactForm() {
  // Formun state'i: adsoyad, konu ve mesaj alanlarını tutar
  const [form, setForm] = useState({
    adsoyad: "",
    konu: "",
    mesaj: "",
  });

  // Form alanları değiştiğinde state'i günceller
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Form gönderildiğinde mailto linki ile mail uygulamasını açar
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:muhammetfisek121@gmail.com?subject=${encodeURIComponent(form.konu)}&body=${encodeURIComponent(`Ad Soyad: ${form.adsoyad}\nMesaj: ${form.mesaj}`)}`;
    window.location.href = mailto;
  };

  // Input alanına tıklandığında imleci sona alır
  const handleUnselect = (e) => {
    if (e.target.value) {
      const len = e.target.value.length;
      e.target.setSelectionRange(len, len);
    }
  };

  return (
    // Formu saran Paper kutusu
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
        {/* Ad Soyad alanı */}
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
        {/* Konu alanı */}
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
        {/* Mesaj alanı */}
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
        {/* Gönder butonu */}
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
  );
} 