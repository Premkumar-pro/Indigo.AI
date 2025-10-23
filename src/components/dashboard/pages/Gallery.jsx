import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Chip,
  InputAdornment,
  Menu,
  MenuItem,
  useMediaQuery
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  Search as SearchIcon,
  Download as DownloadIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Sort as SortIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Import images - Update these paths with your actual images
import anime1 from "../../../assets/gallary/anime/anime1.webp";
import anime2 from "../../../assets/gallary/anime/anime2.webp";
import anime3 from "../../../assets/gallary/anime/anime3.webp";
import anime4 from "../../../assets/gallary/anime/anime4.webp";
import anime5 from "../../../assets/gallary/anime/anime5.webp";

import artistic1 from "../../../assets/gallary/artistic/artistic1.webp";
import artistic2 from "../../../assets/gallary/artistic/artistic2.webp";
import artistic3 from "../../../assets/gallary/artistic/artistic3.webp";
import artistic4 from "../../../assets/gallary/artistic/artistic4.webp";
import artistic5 from "../../../assets/gallary/artistic/artistic5.webp";

import logo1 from "../../../assets/gallary/logo/logo1.webp";
import logo2 from "../../../assets/gallary/logo/logo2.webp";
import logo3 from "../../../assets/gallary/logo/logo3.webp";
import logo4 from "../../../assets/gallary/logo/logo4.webp";
import logo5 from "../../../assets/gallary/logo/logo5.webp";

import realistic1 from "../../../assets/gallary/realistic/realistic1.webp";
import realistic2 from "../../../assets/gallary/realistic/realistic2.webp";
import realistic3 from "../../../assets/gallary/realistic/realistic3.webp";
import realistic4 from "../../../assets/gallary/realistic/realistic4.webp";
import realistic5 from "../../../assets/gallary/realistic/realistic5.webp";

const Gallery = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 900px)');
  
  // States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortAnchor, setSortAnchor] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [favorites, setFavorites] = useState(new Set());
  const [visibleImages, setVisibleImages] = useState(12);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Sample image data with categories and prompts
  const allImages = [
    // Anime Images
    { id: 1, src: anime1, category: 'Anime', prompt: 'Cute anime character with colorful hair', likes: 142, downloads: 89, date: '2024-01-15', size: 'large' },
    { id: 2, src: anime2, category: 'Anime', prompt: 'Magical girl transformation sequence', likes: 98, downloads: 67, date: '2024-01-14', size: 'small' },
    { id: 3, src: anime3, category: 'Anime', prompt: 'Cyberpunk anime cityscape at night', likes: 256, downloads: 134, date: '2024-01-13', size: 'medium' },
    { id: 4, src: anime4, category: 'Anime', prompt: 'Fantasy anime warrior in forest', likes: 187, downloads: 92, date: '2024-01-12', size: 'large' },
    { id: 5, src: anime5, category: 'Anime', prompt: 'School anime scene with cherry blossoms', likes: 76, downloads: 45, date: '2024-01-11', size: 'small' },

    // Artistic Images
    { id: 6, src: artistic1, category: 'Artistic', prompt: 'Abstract watercolor painting with vibrant colors', likes: 234, downloads: 156, date: '2024-01-15', size: 'medium' },
    { id: 7, src: artistic2, category: 'Artistic', prompt: 'Surreal landscape with floating objects', likes: 189, downloads: 112, date: '2024-01-14', size: 'large' },
    { id: 8, src: artistic3, category: 'Artistic', prompt: 'Digital art of cosmic energy patterns', likes: 312, downloads: 198, date: '2024-01-13', size: 'small' },
    { id: 9, src: artistic4, category: 'Artistic', prompt: 'Oil painting style portrait with dramatic lighting', likes: 167, downloads: 89, date: '2024-01-12', size: 'large' },
    { id: 10, src: artistic5, category: 'Artistic', prompt: 'Minimalist geometric art composition', likes: 143, downloads: 76, date: '2024-01-11', size: 'medium' },

    // Logo Images
    { id: 11, src: logo1, category: 'Logo', prompt: 'Modern tech company logo design', likes: 89, downloads: 167, date: '2024-01-15', size: 'small' },
    { id: 12, src: logo2, category: 'Logo', prompt: 'Vintage coffee shop emblem', likes: 67, downloads: 134, date: '2024-01-14', size: 'medium' },
    { id: 13, src: logo3, category: 'Logo', prompt: 'Gaming brand logo with dynamic shapes', likes: 156, downloads: 245, date: '2024-01-13', size: 'small' },
    { id: 14, src: logo4, category: 'Logo', prompt: 'Eco-friendly brand minimalist logo', likes: 134, downloads: 189, date: '2024-01-12', size: 'large' },
    { id: 15, src: logo5, category: 'Logo', prompt: 'Luxury brand elegant typography logo', likes: 98, downloads: 156, date: '2024-01-11', size: 'medium' },

    // Realistic Images
    { id: 16, src: realistic1, category: 'Realistic', prompt: 'Photorealistic mountain landscape at sunrise', likes: 278, downloads: 167, date: '2024-01-15', size: 'large' },
    { id: 17, src: realistic2, category: 'Realistic', prompt: 'Hyperrealistic portrait of elderly person', likes: 345, downloads: 234, date: '2024-01-14', size: 'medium' },
    { id: 18, src: realistic3, category: 'Realistic', prompt: 'Realistic urban cityscape photography', likes: 198, downloads: 145, date: '2024-01-13', size: 'small' },
    { id: 19, src: realistic4, category: 'Realistic', prompt: 'Wildlife photography of wolf in forest', likes: 267, downloads: 178, date: '2024-01-12', size: 'large' },
    { id: 20, src: realistic5, category: 'Realistic', prompt: 'Macro photography of water droplets', likes: 156, downloads: 112, date: '2024-01-11', size: 'medium' },
  ];

  const categories = ['All', 'Anime', 'Artistic', 'Logo', 'Realistic'];
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'downloads', label: 'Most Downloads' }
  ];

  // Filter and sort images
  const filteredImages = allImages
    .filter(image => 
      (selectedCategory === 'All' || image.category === selectedCategory) &&
      (image.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
       image.category.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'popular':
          return b.likes - a.likes;
        case 'downloads':
          return b.downloads - a.downloads;
        default:
          return 0;
      }
    })
    .slice(0, visibleImages);

  // Handlers
  const toggleFavorite = (imageId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(imageId)) {
      newFavorites.delete(imageId);
    } else {
      newFavorites.add(imageId);
    }
    setFavorites(newFavorites);
  };

  const downloadImage = async (imageSrc, imageName) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `indigo-ai-${imageName}-${Date.now()}.webp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if (visibleImages < allImages.length) {
      setVisibleImages(prev => prev + 8);
    }
  }, [visibleImages, allImages.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const getImageSizeClass = (size) => {
    const sizes = {
      small: { xs: 12, sm: 6, md: 4, lg: 3 },
      medium: { xs: 12, sm: 6, md: 4, lg: 4 },
      large: { xs: 12, sm: 6, md: 8, lg: 6 }
    };
    return sizes[size] || sizes.medium;
  };

  return (
    <Box sx={{ 
      width: '100vw', 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      overflow: 'hidden'
    }}>
      {/* Back to Dashboard Button */}
      <Box sx={{ px: 3, pt: 3 }}>
        <Button
          startIcon={<BackIcon />}
          onClick={() => navigate('/dashboard')}
          sx={{
            color: '#6a11cb',
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: 'rgba(106, 17, 203, 0.1)'
            }
          }}
        >
          Back to Dashboard
        </Button>
      </Box>

      {/* Header Section */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: 6, 
        px: 3,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8,
        borderRadius: '0 0 40px 40px',
        mx: 3,
        mt: 2
      }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: '3rem', md: '4.5rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Indigo.Ai Gallery
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: { xs: '1.1rem', md: '1.3rem' }
          }}
        >
          Explore stunning AI-generated masterpieces across all categories
        </Typography>
      </Box>

      {/* Controls Section */}
      <Box sx={{ px: 3, mb: 4, maxWidth: '1400px', margin: '0 auto' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: { xs: 'stretch', sm: 'center' }, justifyContent: 'space-between', mb: 3 }}>
          {/* Search */}
          <TextField
            placeholder="Search images by prompt or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              flex: 1,
              maxWidth: '400px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: '#f8f9fa',
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#666666' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Sort Button */}
          <Button
            startIcon={<SortIcon />}
            endIcon={<ExpandMoreIcon />}
            onClick={(e) => setSortAnchor(e.currentTarget)}
            sx={{
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
              color: '#333333',
              fontWeight: 600,
              textTransform: 'none',
              minWidth: '160px'
            }}
          >
            {sortOptions.find(opt => opt.value === sortBy)?.label}
          </Button>

          <Menu
            anchorEl={sortAnchor}
            open={Boolean(sortAnchor)}
            onClose={() => setSortAnchor(null)}
          >
            {sortOptions.map((option) => (
              <MenuItem
                key={option.value}
                onClick={() => {
                  setSortBy(option.value);
                  setSortAnchor(null);
                }}
                selected={sortBy === option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Category Filters */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              variant={selectedCategory === category ? "filled" : "outlined"}
              onClick={() => setSelectedCategory(category)}
              sx={{
                backgroundColor: selectedCategory === category ? '#6a11cb' : 'transparent',
                color: selectedCategory === category ? 'white' : '#666666',
                borderColor: '#e0e0e0',
                fontWeight: 600,
                fontSize: '0.9rem',
                '&:hover': {
                  backgroundColor: selectedCategory === category ? '#5a0db5' : 'rgba(106, 17, 203, 0.1)',
                  color: selectedCategory === category ? 'white' : '#6a11cb',
                  borderColor: '#6a11cb'
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Gallery Grid */}
      <Box sx={{ px: 3, maxWidth: '1400px', margin: '0 auto' }}>
        <Grid container spacing={2}>
          {filteredImages.map((image) => {
            const sizeClass = getImageSizeClass(image.size);
            return (
              <Grid item {...sizeClass} key={image.id}>
                <Card 
                  sx={{ 
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                    },
                    '&:hover .image-overlay': {
                      opacity: 1
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image.src}
                    alt={image.prompt}
                    sx={{
                      width: '100%',
                      height: image.size === 'large' ? 400 : image.size === 'medium' ? 300 : 250,
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />

                  {/* Hover Overlay */}
                  <Box 
                    className="image-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      p: 2,
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    {/* Top Actions */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Chip
                        label={image.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(106, 17, 203, 0.9)',
                          color: 'white',
                          fontWeight: 600
                        }}
                      />
                      <IconButton 
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(image.id);
                        }}
                        sx={{ 
                          color: favorites.has(image.id) ? '#ff6b6b' : 'rgba(255,255,255,0.8)',
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.7)'
                          }
                        }}
                      >
                        {favorites.has(image.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </IconButton>
                    </Box>

                    {/* Bottom Content */}
                    <Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'white',
                          fontWeight: 500,
                          mb: 1,
                          lineHeight: 1.3
                        }}
                      >
                        {image.prompt}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                            ❤️ {image.likes}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                            ⬇️ {image.downloads}
                          </Typography>
                        </Box>
                        
                        <IconButton 
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadImage(image.src, image.category.toLowerCase());
                          }}
                          sx={{ 
                            color: 'white',
                            backgroundColor: 'rgba(106, 17, 203, 0.9)',
                            '&:hover': {
                              backgroundColor: '#5a0db5'
                            }
                          }}
                        >
                          <DownloadIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Loading Indicator */}
        {visibleImages < allImages.length && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="body1" color="text.secondary">
              Loading more images...
            </Typography>
          </Box>
        )}
      </Box>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <Box
          onClick={() => setLightboxImage(null)}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            p: 2
          }}
        >
          <Box
            component="img"
            src={lightboxImage.src}
            alt={lightboxImage.prompt}
            sx={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Gallery;