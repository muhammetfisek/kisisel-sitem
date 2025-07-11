import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@mui/material/styles";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "Merhaba! Ben FİŞEK'in kişisel asistanıyım. Size FİŞEK hakkında bilgi verebilir ve sorularınızı yanıtlayabilirim. Nasıl yardımcı olabilirim?",
    },
  ]);
  const theme = useTheme();
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const chatBoxRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  // Dışarı tıklanınca pencereyi kapat
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event) {
      if (
        chatBoxRef.current &&
        !chatBoxRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Sadece UI için sahte gönderme
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      {
        from: "bot",
        text:
          "Üzgünüm, ben sadece FİŞEK'in özgeçmişi hakkında bilgi verebilirim.",
      },
    ]);
    setInput("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Sabit buton: Her zaman görünür, pencereyi açıp kapatır */}
      <Box
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1300,
        }}
      >
        <IconButton
          ref={iconRef}
          color="primary"
          size="large"
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            color: "#fff",
            boxShadow: 6,
            animation: "ai-glow 2.5s ease-in-out infinite",
            border: `2px solid ${theme.palette.secondary.main}`,
            transition: "transform 0.2s, box-shadow 0.2s",
            '&:hover': {
              transform: 'scale(1.08) rotate(-6deg)',
              boxShadow: `0 0 24px 6px ${theme.palette.primary.main}`,
              background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
            },
            '@keyframes ai-glow': {
              '0%': { boxShadow: `0 0 0 0 ${theme.palette.primary.main}55` },
              '50%': { boxShadow: `0 0 16px 6px ${theme.palette.secondary.main}99` },
              '100%': { boxShadow: `0 0 0 0 ${theme.palette.primary.main}55` },
            },
          }}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="AI Asistanı Aç/Kapat"
        >
          <PsychologyIcon fontSize="inherit" />
        </IconButton>
      </Box>

      {/* Chat Penceresi: Sadece açıkken görünür */}
      {open && (
        <Box
          ref={chatBoxRef}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32 + 72, // ikon ile çakışmasın diye biraz sola kaydır
            width: 360,
            height: 520,
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 8,
            display: "flex",
            flexDirection: "column",
            zIndex: 1400,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "center", p: 2, background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, color: "#fff", fontWeight:700, fontSize: 50, letterSpacing: 0.5 }}>
            <Box sx={{ flex: 1, textAlign: 'center', fontWeight: 700, fontSize: 16 }}>
              FİŞEK AI ASİSTANI
            </Box>
            <IconButton size="small" sx={{ color: "#fff", position: 'absolute', right: 12 }} onClick={() => setOpen(false)} aria-label="Kapat">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          {/* Chat Alanı */}
          <Box sx={{ flex: 1, p: 2, bgcolor: "#181a20", color: "#fff", fontSize: 15, overflowY: "auto", display: 'flex', flexDirection: 'column', gap: 2 }}>
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                  maxWidth: '80%',
                  mb: 1,
                  borderRadius: 3,
                  px: 2,
                  py: 1.5,
                  bgcolor:
                    msg.from === "user"
                      ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                      : "#23272f",
                  color: msg.from === "user" ? "#fff" : "#e0e0e0",
                  boxShadow: msg.from === "user" ? 3 : 1,
                  fontSize: 16,
                  fontWeight: 400,
                  wordBreak: 'break-word',
                  borderTopRightRadius: msg.from === "user" ? 0 : 12,
                  borderTopLeftRadius: msg.from === "user" ? 12 : 0,
                }}
              >
                {msg.text}
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>
          {/* Mesaj Girişi */}
          <Box sx={{ display: "flex", alignItems: "center", p: 2, borderTop: "1px solid #222", bgcolor: "background.paper", gap: 1 }}>
            <input
              type="text"
              placeholder="Mesajınızı yazın..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              ref={inputRef}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 16,
                background: "transparent",
                color: theme.palette.mode === 'dark' ? '#fff' : '#222',
                padding: '8px 0',
              }}
            />
            <IconButton color="primary" onClick={handleSend} disabled={!input.trim()} sx={{ background: input.trim() ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : 'none', color: input.trim() ? '#fff' : '#888', transition: 'all 0.2s' }}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
} 