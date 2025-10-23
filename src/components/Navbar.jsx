import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
  useMediaQuery,
  Collapse
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Collections as GalleryIcon,
  ModelTraining as ModelsIcon,
  Help as HowItWorksIcon,
  ContactSupport as ContactIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  AutoAwesome as GenerateIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modelsAnchor, setModelsAnchor] = useState(null);
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [mobileModelsOpen, setMobileModelsOpen] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  // Models list
  const models = [
    { name: 'Nano', description: 'Fast & Lightweight' },
    { name: 'Banana', description: 'Creative & Artistic' },
    { name: 'Quantum', description: 'High Precision' },
    { name: 'Fusion', description: 'Mixed Style' },
    { name: 'Neo', description: 'Next Generation' }
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle models menu
  const handleModelsOpen = (event) => {
    setModelsAnchor(event.currentTarget);
  };

  const handleModelsClose = () => {
    setModelsAnchor(null);
  };

  const handleGenerateClick = () => {
    navigate('/dashboard');
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileDrawer(false);
  };

  // Navbar items
  const navItems = [
    { name: 'Home', icon: <HomeIcon />, path: '/' },
    { name: 'Gallery', icon: <GalleryIcon />, path: '/gallery' },
    { 
      name: 'Models', 
      icon: <ModelsIcon />, 
      hasDropdown: true,
      items: models
    },
    { name: 'How It Works', icon: <HowItWorksIcon />, path: '/how-it-works' },
    { name: 'FAQ', icon: <ContactIcon />, path: '/faq' },
    { name: 'Contact Support', icon: <ContactIcon />, path: '/contact' }
  ];

  // Desktop Models Dropdown
  const renderModelsMenu = (
    <Menu
      anchorEl={modelsAnchor}
      open={Boolean(modelsAnchor)}
      onClose={handleModelsClose}
      sx={{
        '& .MuiPaper-root': {
          // backgroundColor: 'rgba(0, 0, 0, 0.95)',
                  // background: "linear-gradient(135deg, #000000 0%, #0d0d0d 100%)", // Black background
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

  // Mobile Drawer
  const renderMobileDrawer = (
    <Drawer
      anchor="right"
      open={mobileDrawer}
      onClose={() => setMobileDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': {
          // backgroundColor: 'rgba(0, 0, 0, 0.98)', // Black background
                  background: "linear-gradient(135deg, #000000 0%, #0d0d0d 100%)",
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          width: 280
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            // background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                    background: "linear-gradient(135deg, #000000 0%, #0d0d0d 100%)",
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 3,
            textAlign: 'center'
          }}
        >
          Indigo.AI
        </Typography>

        {/* Navigation Items */}
        <List>
          {navItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <>
                  <ListItem 
                    button 
                    onClick={() => setMobileModelsOpen(!mobileModelsOpen)}
                    sx={{
                      color: '#e2e8f0',
                      borderRadius: '8px',
                      mb: 1
                    }}
                  >
                    <ListItemIcon sx={{ color: '#6a11cb', minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                    {mobileModelsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={mobileModelsOpen}>
                    <List sx={{ pl: 4 }}>
                      {item.items.map((model) => (
                        <ListItem 
                          key={model.name}
                          button
                          sx={{
                            color: '#94a3b8',
                            borderRadius: '6px',
                            mb: 0.5
                          }}
                        >
                          <ListItemText 
                            primary={
                              <Box>
                                <Typography sx={{ fontWeight: 600, color: '#ffffff' }}>
                                  {model.name}
                                </Typography>
                                <Typography sx={{ fontSize: '0.8rem' }}>
                                  {model.description}
                                </Typography>
                              </Box>
                            } 
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem 
                  button 
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    color: '#e2e8f0',
                    borderRadius: '8px',
                    mb: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(106, 17, 203, 0.2)'
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: '#6a11cb', minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              )}
            </div>
          ))}
        </List>

        {/* Generate Button in Mobile */}
        <Button
          fullWidth
          variant="contained"
          startIcon={<GenerateIcon />}
          onClick={handleGenerateClick}
          sx={{
            // background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
            background: "linear-gradient(135deg, #000000 0%, #0d0d0d 100%)",
            color: '#fff',
            fontWeight: 700,
            py: 1.5,
            borderRadius: '8px',
            textTransform: 'none',
            mt: 2
          }}
        >
          Generate Image
        </Button>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar 
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)', // Black background
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          boxShadow: 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                      // background: "linear-gradient(135deg, #000000 0%, #0d0d0d 100%)",
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Regular Nav Items */}
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <Button
                    key={item.name}
                    endIcon={<ExpandMoreIcon />}
                    onClick={handleModelsOpen}
                    sx={{
                      color: '#e2e8f0',
                      fontWeight: 500,
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
                startIcon={<GenerateIcon />}
                onClick={handleGenerateClick}
                sx={{
                  background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                          // background: "linear-gradient(135deg, #000000 0%, #0d0d0d 100%)",
                  color: '#fff',
                  fontWeight: 700,
                  px: 3,
                  py: 1,
                  borderRadius: '8px',
                  textTransform: 'none',
                  ml: 2,
                  '&:hover': {
                    // background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)',
                            background: "linear-gradient(135deg, #000000 0%, #0d0d0d 100%)",
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Generate Image
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileDrawer(true)}
              sx={{ color: '#e2e8f0' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Models Dropdown */}
      {renderModelsMenu}

      {/* Mobile Drawer */}
      {renderMobileDrawer}

      {/* Spacer for fixed navbar */}
      {/* <Toolbar /> */}
    </>
  );
};

export default Navbar;