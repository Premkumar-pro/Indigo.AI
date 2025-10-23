import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField, IconButton, AppBar, Toolbar, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import imageSrc from "../assets/download.jpeg";
import { useNavigate } from 'react-router-dom';
import { 
  AutoAwesome as AutoAwesomeIcon, 
  LinkedIn, GitHub, Facebook, Twitter, Instagram, 
  SupportAgent as SupportIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

const HeroSection = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 900px)');
  
  // Navbar states
  const [isScrolled, setIsScrolled] = useState(false);
  const [modelsAnchor, setModelsAnchor] = useState(null);

  // Social and stats data
  const socialIcons = [
    { icon: <LinkedIn />, url: "#", name: "LinkedIn" },
    { icon: <GitHub />, url: "#", name: "GitHub" },
    { icon: <Facebook />, url: "#", name: "Facebook" },
    { icon: <Twitter />, url: "#", name: "Twitter" },
    { icon: <Instagram />, url: "#", name: "Instagram" }
  ];

  const stats = [
    { number: "30M+", label: "Active Users" },
    { number: "63K+", label: "Discord Community" },
    { number: "1B+", label: "Images Processed" }
  ];

  const models = [
    { name: 'Nano', description: 'Fast & Lightweight' },
    { name: 'Banana', description: 'Creative & Artistic' },
    { name: 'Quantum', description: 'High Precision' },
    { name: 'Fusion', description: 'Mixed Style' },
    { name: 'Neo', description: 'Next Generation' }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Models', hasDropdown: true },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Support', path: '/contact' }
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleModelsOpen = (event) => {
    setModelsAnchor(event.currentTarget);
  };

  const handleModelsClose = () => {
    setModelsAnchor(null);
  };

  const handleGenerateClick = () => {
    navigate('/dashboard');
  };

  // Models Dropdown Menu
  const renderModelsMenu = (
    <Menu
      anchorEl={modelsAnchor}
      open={Boolean(modelsAnchor)}
      onClose={handleModelsClose}
      sx={{
        '& .MuiPaper-root': {
          background: "linear-gradient(135deg, #000000 0%, #0d0d0d 100%)",
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          marginTop: '8px'
        }
      }}
    >
      {models.map((model, index) => (
        <MenuItem 
          key={model.name}
          onClick={handleModelsClose}
          sx={{
            color: '#e2e8f0',
            padding: '12px 16px',
            borderBottom: index < models.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
            '&:hover': {
              backgroundColor: 'rgba(106, 17, 203, 0.2)'
            }
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600, color: '#ffffff' }}>
              {model.name}
            </Typography>
            <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              {model.description}
            </Typography>
          </Box>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      
      {/* NAVBAR */}
      <AppBar 
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          px: { xs: 2, md: 4 }
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/')}
          >
            Indigo.AI
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <Button
                    key={item.name}
                    endIcon={<ExpandMoreIcon />}
                    onClick={handleModelsOpen}
                    sx={{
                      color: '#e2e8f0',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      '&:hover': {
                        color: '#6a11cb',
                        backgroundColor: 'rgba(106, 17, 203, 0.1)'
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ) : (
                  <Button
                    key={item.name}
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: '#e2e8f0',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      '&:hover': {
                        color: '#6a11cb',
                        backgroundColor: 'rgba(106, 17, 203, 0.1)'
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                )
              ))}

              {/* Generate Button */}
              <Button
                variant="contained"
                startIcon={<AutoAwesomeIcon />}
                onClick={handleGenerateClick}
                sx={{
                  background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  px: 3,
                  py: 1,
                  borderRadius: '8px',
                  textTransform: 'none',
                  ml: 1,
                  fontSize: '0.9rem',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Generate Image
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          background: "linear-gradient(135deg, #000000 0%, #0d0d0d 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          px: { xs: 3, md: 6 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Animated Dots Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          {[...Array(25)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: `rgba(${50 + Math.random() * 100}, ${50 + Math.random() * 100}, 255, 0.7)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float 10s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </Box>

        {/* Hero Content */}
        <Box sx={{ position: "relative", zIndex: 1, flex: 1, maxWidth: "700px" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Title */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "#ffffff",
                mb: 2,
                fontSize: { xs: "2.2rem", md: "4rem" },
                letterSpacing: "1px",
              }}
            >
              Indigo.Ai <span style={{ color: "#6a11cb" }}>AI Image Generator</span>
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.85)",
                mb: 3,
                fontWeight: 500,
                fontSize: { xs: "1.1rem", md: "1.8rem" },
              }}
            >
              Online Text To Image
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.75)",
                mb: 4,
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.3rem" },
                maxWidth: "90%",
              }}
            >
              Transform your ideas into <strong>AI images</strong> with the best text-to-image generator. 
              Just describe what you want and watch the best AI image generator bring your imagination 
              to life. <strong>ImagineArt</strong> can create stunning visuals in seconds.
            </Typography>

            {/* Input and Button Container */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'stretch', maxWidth: '600px', mb: 4 }}>
              <TextField
                variant="outlined"
                placeholder="Describe your image idea..."
                fullWidth
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  input: { color: "#fff" },
                  borderRadius: "10px",
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                    "&:hover fieldset": { borderColor: "#6a11cb" },
                    "&.Mui-focused fieldset": { borderColor: "#2575fc" },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255,255,255,0.6)",
                  }
                }}
                onClick={() => navigate('/dashboard')}
              />

              <Button
                variant="contained"
                startIcon={<AutoAwesomeIcon />}
                onClick={() => navigate('/dashboard')}
                sx={{
                  background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  fontSize: "1.1rem",
                  borderRadius: "10px",
                  textTransform: "none",
                  transition: "0.3s",
                  boxShadow: "0px 0px 20px rgba(101, 76, 255, 0.3)",
                  minWidth: { xs: '100%', sm: '180px' },
                  whiteSpace: 'nowrap',
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 0px 25px rgba(101, 76, 255, 0.5)",
                    background: "linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)",
                  },
                }}
              >
                Generate
              </Button>
            </Box>

            {/* Stats Section */}
            <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4 }, flexWrap: 'wrap' }}>
              {stats.map((stat, index) => (
                <Box key={index} sx={{ textAlign: 'left' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "#6a11cb",
                      fontSize: { xs: "1.5rem", sm: "2rem" },
                      lineHeight: 1.2
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      fontWeight: 500
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Hero Image */}
        <motion.img
          src={imageSrc}
          alt="AI Generated Art"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            width: "500px",
            borderRadius: "20px",
            zIndex: 1,
            boxShadow: "none",
            marginRight: "40px"
          }}
        />

        {/* Social Icons */}
        <Box sx={{ 
          position: "absolute", 
          zIndex: 2, 
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          right: 40,
          bottom: 40
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
            {socialIcons.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <IconButton
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#6a11cb",
                      backgroundColor: "rgba(106, 17, 203, 0.2)",
                      transform: "scale(1.1)"
                    }
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ 
            width: "1px", 
            height: "40px", 
            background: "linear-gradient(to bottom, transparent, rgba(106, 17, 203, 0.5), transparent)" 
          }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <IconButton
              sx={{
                color: "rgba(255,255,255,0.7)",
                backgroundColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#2575fc",
                  backgroundColor: "rgba(37, 117, 252, 0.2)",
                  transform: "scale(1.1)"
                }
              }}
              aria-label="Customer Support"
            >
              <SupportIcon />
            </IconButton>
          </motion.div>
        </Box>

        {/* Dots Animation Keyframes */}
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
              50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
              100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
            }
          `}
        </style>
      </Box>

      {/* Models Dropdown */}
      {renderModelsMenu}
    </Box>
  );
};

export default HeroSection;