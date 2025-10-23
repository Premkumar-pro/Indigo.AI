import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  IconButton,
  Divider,
  Collapse,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Home as HomeIcon,
  FormatQuote as PromptsIcon,
  Build as ToolsIcon,
  SupportAgent as SupportIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  TextFields as TextToImageIcon,
  School as TrainDocsIcon,
  Edit as ImageEditorIcon,
  Collections as GalleryIcon,
  ContactMail as ContactUsIcon,
  Description as DocsIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(true);
  const [supportOpen, setSupportOpen] = useState(true);

  const menuItems = [
    {
      type: 'item',
      label: 'Back to Home',
      icon: <HomeIcon />,
      path: '/',
      color: '#6a11cb'
    },
    {
      type: 'item', 
      label: 'Prompts',
      icon: <PromptsIcon />,
      path: '/dashboard/prompts'
    },
    {
      type: 'category',
      label: 'Tools',
      icon: <ToolsIcon />,
      open: toolsOpen,
      onToggle: () => setToolsOpen(!toolsOpen),
      children: [
        {
          label: 'Text to Image',
          icon: <TextToImageIcon />,
          path: '/dashboard/text-to-image'
        },
        {
          label: 'Train Docs', 
          icon: <TrainDocsIcon />,
          path: '/dashboard/train-docs'
        },
        {
          label: 'Image Editor',
          icon: <ImageEditorIcon />,
          path: '/dashboard/image-editor'
        },
        {
          label: 'Gallery',
          icon: <GalleryIcon />,
          path: '/dashboard/gallery'
        }
      ]
    },
    {
      type: 'category',
      label: 'Support',
      icon: <SupportIcon />,
      open: supportOpen,
      onToggle: () => setSupportOpen(!supportOpen),
      children: [
        {
          label: 'Contact Us',
          icon: <ContactUsIcon />,
          path: '/dashboard/contact-us'
        },
        {
          label: 'Docs',
          icon: <DocsIcon />,
          path: '/dashboard/docs'
        }
      ]
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const renderMenuItems = (items, level = 0) => {
    return items.map((item, index) => {
      if (item.type === 'category') {
        return (
          <Box key={item.label}>
            <ListItemButton 
              onClick={item.onToggle}
              sx={{
                pl: 2 + level * 2,
                '&:hover': {
                  backgroundColor: 'rgba(106, 17, 203, 0.04)'
                }
              }}
            >
              <ListItemIcon sx={{ color: '#666666', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#333333'
                }}
              />
              {item.open ? <ExpandLessIcon sx={{ color: '#666666' }} /> : <ExpandMoreIcon sx={{ color: '#666666' }} />}
            </ListItemButton>
            <Collapse in={item.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenuItems(item.children, level + 1)}
              </List>
            </Collapse>
          </Box>
        );
      }

      return (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            onClick={() => handleNavigation(item.path)}
            selected={isActive(item.path)}
            sx={{
              pl: 2 + level * 2,
              backgroundColor: isActive(item.path) ? 'rgba(106, 17, 203, 0.1)' : 'transparent',
              borderRight: isActive(item.path) ? '3px solid #6a11cb' : 'none',
              '&:hover': {
                backgroundColor: isActive(item.path) 
                  ? 'rgba(106, 17, 203, 0.15)' 
                  : 'rgba(106, 17, 203, 0.04)'
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(106, 17, 203, 0.1)',
              }
            }}
          >
            <ListItemIcon sx={{ 
              color: isActive(item.path) ? '#6a11cb' : '#666666',
              minWidth: 40 
            }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '0.95rem',
                fontWeight: isActive(item.path) ? 600 : 500,
                color: isActive(item.path) ? '#6a11cb' : '#333333'
              }}
            />
          </ListItemButton>
        </ListItem>
      );
    });
  };

  const drawer = (
    <Box sx={{ 
      width: 320, 
      height: '100vh',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #e0e0e0',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <Box sx={{ 
        p: 2, 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: '#fafafa'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 800,
            background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Indigo.AI
        </Typography>
        
        {/* Only show close button on mobile */}
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(false)} size="small">
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Box>

      {/* Navigation */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <List sx={{ py: 1 }}>
          {renderMenuItems(menuItems)}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Hamburger Button - Only show on mobile */}
      {isMobile && (
        <IconButton
          onClick={() => setMobileOpen(true)}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1300,
            backgroundColor: '#ffffff',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: '#f5f5f5'
            }
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        ModalProps={isMobile ? { keepMounted: true } : {}}
        sx={{
          width: 320,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            position: 'relative'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;