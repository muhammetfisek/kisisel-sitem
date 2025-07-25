import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import { sendMessage } from "../services/geminiService";
import { useTranslation } from "react-i18next";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "Merhaba! Ben FİŞEK'in kişisel asistanıyım. Size FİŞEK hakkında bilgi verebilir ve sorularınızı yanıtlayabilirim. Nasıl yardımcı olabilirim? 😊",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const chatBoxRef = useRef(null);
  const iconRef = useRef(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!isLoading && open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading, open]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  // İlk mesajı dile göre ayarla
  useEffect(() => {
    const lang = i18n.language || "tr";
    setMessages([
      {
        from: "bot",
        text:
          lang === "en"
            ? "Hello! I'm FİŞEK's personal assistant. I can provide information about FİŞEK and answer your questions. How can I help you? 😊"
            : "Merhaba! Ben FİŞEK'in kişisel asistanıyım. Size FİŞEK hakkında bilgi verebilir ve sorularınızı yanıtlayabilirim. Nasıl yardımcı olabilirim? 😊",
      },
    ]);
  }, [i18n.language]);

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

  // Gerçek API ile mesaj gönderme
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Kullanıcı mesajını ekle
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userMessage },
    ]);

    try {
      // API'ye mesaj gönder
      const response = await sendMessage(userMessage, i18n.language || "tr");
      
      // Bot yanıtını ekle
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: response.text },
      ]);
    } catch (error) {
      console.error("Mesaj gönderme hatası:", error);
      setMessages((prev) => [
        ...prev,
        { 
          from: "bot", 
          text:
            (i18n.language === "en"
              ? "Sorry, an error occurred. Please try again later."
              : "Üzgünüm, bir hata oluştu. Lütfen daha sonra tekrar deneyin."),
        },
      ]);
    } finally {
      setIsLoading(false);
      if (inputRef.current) inputRef.current.focus();
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Sabit buton: Her zaman görünür, pencereyi açıp kapatır */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 16, sm: 32 },
          right: { xs: 16, sm: 32 },
          zIndex: 1300,
          display: { xs: open ? 'none' : 'block', sm: 'block' },
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
            top: { xs: 0, sm: 'auto' },
            bottom: { xs: 0, sm: 32 },
            right: { xs: 0, sm: 32 },
            left: { xs: 0, sm: 'auto' },
            width: { xs: '100vw', sm: 360 },
            height: { xs: '100vh', sm: 520 },
            bgcolor: "background.paper",
            borderRadius: { xs: 0, sm: 4 },
            boxShadow: { xs: 0, sm: 8 },
            display: "flex",
            flexDirection: "column",
            zIndex: 1400,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            p: 2, 
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, 
            color: "#fff", 
            fontWeight: 700, 
            letterSpacing: 0.5,
            position: 'relative'
          }}>
            <Box sx={{ 
              flex: 1, 
              textAlign: 'center', 
              fontWeight: 700, 
              fontSize: { xs: 14, sm: 16 }
            }}>
              FİŞEK AI ASİSTANI
            </Box>
            <IconButton 
              size="small" 
              sx={{ 
                color: "#fff", 
                position: 'absolute', 
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)'
              }} 
              onClick={() => setOpen(false)} 
              aria-label="Kapat"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Chat Alanı */}
          <Box sx={{ 
            flex: 1, 
            p: 2, 
            bgcolor: "#181a20", 
            color: "#fff", 
            fontSize: 15, 
            overflowY: "auto", 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 2 
          }}>
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                  maxWidth: '85%',
                  mb: 1,
                  borderRadius: 3,
                  px: 2,
                  py: 1.5,
                  background: msg.from === "user"
                    ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                    : "#23272f",
                  color: msg.from === "user" ? "#fff" : "#e0e0e0",
                  boxShadow: msg.from === "user" ? 3 : 1,
                  fontSize: { xs: 14, sm: 16 },
                  fontWeight: 400,
                  wordBreak: 'break-word',
                  borderTopRightRadius: msg.from === "user" ? 0 : 12,
                  borderTopLeftRadius: msg.from === "user" ? 12 : 0,
                }}
              >
                {msg.text}
              </Box>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <Box
                sx={{
                  alignSelf: "flex-start",
                  maxWidth: '85%',
                  mb: 1,
                  borderRadius: 3,
                  px: 2,
                  py: 1.5,
                  bgcolor: "#23272f",
                  color: "#e0e0e0",
                  boxShadow: 1,
                  fontSize: { xs: 14, sm: 16 },
                  fontWeight: 400,
                  borderTopLeftRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <CircularProgress size={16} sx={{ color: theme.palette.secondary.main }} />
                Düşünüyor...
              </Box>
            )}
            
            <div ref={messagesEndRef} />
          </Box>
          
          {/* Mesaj Girişi */}
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            p: 2, 
            borderTop: "1px solid #222", 
            bgcolor: "background.paper", 
            gap: 1 
          }}>
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
                fontSize: { xs: 14, sm: 16 },
                background: "transparent",
                color: theme.palette.mode === 'dark' ? '#fff' : '#222',
                padding: '8px 0',
              }}
            />
            <IconButton 
              color="primary" 
              onClick={handleSend} 
              disabled={!input.trim() || isLoading}
              sx={{ 
                background: (input.trim() && !isLoading) ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : 'none', 
                color: (input.trim() && !isLoading) ? '#fff' : '#888', 
                transition: 'all 0.2s' 
              }}
            >
              {isLoading ? <CircularProgress size={20} sx={{ color: theme.palette.secondary.main }} /> : <SendIcon />}
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
} 