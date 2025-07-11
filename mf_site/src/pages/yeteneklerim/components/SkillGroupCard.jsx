import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import SkillItem from "./SkillItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from "react-i18next";

// Bir yetenek grubunu (başlık, ikon, altındaki yetenekler ve gerekirse scroll okunu) gösteren kart componenti
export default function SkillGroupCard({ group, groupIdx }) {
  const { t } = useTranslation();
  const groupI18n = t(`skills.groups.${groupIdx}`, { returnObjects: true });
  // Kart içeriğine referans (scroll olup olmadığını kontrol etmek için)
  const contentRef = React.useRef(null);
  // Scroll bar gerektiğinde sağ altta ok göstermek için state
  const [showArrow, setShowArrow] = React.useState(false);

  // İçerik taşarsa ok göster, pencere boyutu değişince de kontrol et
  React.useEffect(() => {
    const checkScroll = () => {
      if (!contentRef.current) return;
      setShowArrow(contentRef.current.scrollHeight > contentRef.current.clientHeight);
    };
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [group.items]);

  return (
    // Ana kart
    <Paper
      elevation={8}
      sx={{
        p: 0,
        borderRadius: 4,
        minHeight: 450,
        height: 480,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        border: '2px solid transparent',
        transition: 'border-color 0.4s, box-shadow 0.4s, transform 0.3s',
        '&:hover': {
          borderColor: group.color,
          boxShadow: `0 0 16px 2px ${group.color}55, 0 0 0 4px ${group.color}33`,
          transform: 'scale(1.04)',
        },
      }}
    >
      {/* Kart başlığı ve ikon */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        justifyContent: 'flex-start',
        height: '20%',
        minHeight: 70,
        px: 3,
        pt: 3,
        pb: 1,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        background: 'transparent',
      }}>
        {group.icon}
        <Typography variant="h1" sx={{ fontWeight: 800, color: group.color, fontSize: { xs: 22, md: 26 } }}>
          {groupI18n.title}
        </Typography>
      </Box>
      <Box sx={{ height: '30px' }} />
      {/* Yetenekler listesi (scroll edilebilir) */}
      <Box
        ref={contentRef}
        sx={{
          width: '100%',
          flex: 1,
          minHeight: 0,
          overflowY: 'auto',
          pl: 1.5,
          pb: 3,
          px: 3,
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        {/* Her bir yetenek için SkillItem componenti */}
        {group.items.map((item, i) => (
          <SkillItem key={item.name} name={groupI18n.items[i] || item.name} level={item.level} color={group.color} />
        ))}
      </Box>
      {/* İçerik taşarsa sağ altta zıplayan ok göster */}
      {showArrow && (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right', mt: -2, pr: 2 }}>
          <KeyboardArrowDownIcon sx={{
            color: group.color,
            fontSize: 32,
            animation: 'bounceDown 1.2s infinite',
            '@keyframes bounceDown': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(10px)' },
            },
          }} />
        </Box>
      )}
    </Paper>
  );
} 