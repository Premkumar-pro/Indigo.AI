import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Chip,
  useMediaQuery
} from '@mui/material';

// Import images
import anime1 from "../../../assets/gallary/anime/anime1.webp";
import anime2 from "../../../assets/gallary/anime/anime2.webp";
import anime3 from "../../../assets/gallary/anime/anime3.webp";
import anime4 from "../../../assets/gallary/anime/anime4.webp";
import anime5 from "../../../assets/gallary/anime/anime5.webp";
import anime6 from "../../../assets/gallary/anime/anime6.webp";
import anime7 from "../../../assets/gallary/anime/anime7.webp";
import anime8 from "../../../assets/gallary/anime/anime8.webp";
import anime9 from "../../../assets/gallary/anime/anime9.webp";
import anime10 from "../../../assets/gallary/anime/anime10.webp";
import anime11 from "../../../assets/gallary/anime/anime11.webp";
import anime12 from "../../../assets/gallary/anime/anime12.webp";
import anime13 from "../../../assets/gallary/anime/anime13.webp";
import anime14 from "../../../assets/gallary/anime/anime14.webp";
import anime15 from "../../../assets/gallary/anime/anime15.webp";
import anime16 from "../../../assets/gallary/anime/anime16.webp";
import anime17 from "../../../assets/gallary/anime/anime17.webp";
import anime18 from "../../../assets/gallary/anime/anime18.webp";
import anime19 from "../../../assets/gallary/anime/anime19.webp";
import anime20 from "../../../assets/gallary/anime/anime20.webp";

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

const DashboardGallery = () => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleImages, setVisibleImages] = useState(12);

  // Sample image data
  const allImages = [
    // Anime Images
    { id: 1, src: anime1, category: 'Anime', prompt: 'Cute anime character with colorful hair' },
    { id: 2, src: anime2, category: 'Anime', prompt: 'Magical girl transformation sequence' },
    { id: 3, src: anime3, category: 'Anime', prompt: 'Cyberpunk anime cityscape at night' },
    { id: 4, src: anime4, category: 'Anime', prompt: 'Fantasy anime warrior in forest' },
    { id: 5, src: anime5, category: 'Anime', prompt: 'School anime scene with cherry blossoms' },
    { id: 6, src: anime6, category: 'Anime', prompt: 'Cute anime character with colorful hair'},
    { id: 7, src: anime7, category: 'Anime', prompt: 'Magical girl transformation sequence'},
    { id: 8, src: anime8, category: 'Anime', prompt: 'Cyberpunk anime cityscape at night' },
    { id: 9, src: anime9, category: 'Anime', prompt: 'Fantasy anime warrior in forest'},
    { id: 10, src: anime10, category: 'Anime', prompt: 'School anime scene with cherry blossoms' },
    { id: 11, src: anime11, category: 'Anime', prompt: 'Cute anime character with colorful hair'},
    { id: 12, src: anime12, category: 'Anime', prompt: 'Magical girl transformation sequence'},
    { id: 13, src: anime13, category: 'Anime', prompt: 'Cyberpunk anime cityscape at night'},
    { id: 14, src: anime14, category: 'Anime', prompt: 'Fantasy anime warrior in forest'},
    { id: 15, src: anime15, category: 'Anime', prompt: 'School anime scene with cherry blossoms'},
    { id: 16, src: anime16, category: 'Anime', prompt: 'Cute anime character with colorful hair'},
    { id: 17, src: anime17, category: 'Anime', prompt: 'Magical girl transformation sequence'},
    { id: 18, src: anime18, category: 'Anime', prompt: 'Cyberpunk anime cityscape at night'},
    { id: 19, src: anime19, category: 'Anime', prompt: 'Fantasy anime warrior in forest'},
    { id: 20, src: anime20, category: 'Anime', prompt: 'School anime scene with cherry blossoms'},

    // Artistic Images
    { id: 6, src: artistic1, category: 'Artistic', prompt: 'Abstract watercolor painting with vibrant colors' },
    { id: 7, src: artistic2, category: 'Artistic', prompt: 'Surreal landscape with floating objects' },
    { id: 8, src: artistic3, category: 'Artistic', prompt: 'Digital art of cosmic energy patterns' },
    { id: 9, src: artistic4, category: 'Artistic', prompt: 'Oil painting style portrait with dramatic lighting' },
    { id: 10, src: artistic5, category: 'Artistic', prompt: 'Minimalist geometric art composition' },

    // Logo Images
    { id: 11, src: logo1, category: 'Logo', prompt: 'Modern tech company logo design' },
    { id: 12, src: logo2, category: 'Logo', prompt: 'Vintage coffee shop emblem' },
    { id: 13, src: logo3, category: 'Logo', prompt: 'Gaming brand logo with dynamic shapes' },
    { id: 14, src: logo4, category: 'Logo', prompt: 'Eco-friendly brand minimalist logo' },
    { id: 15, src: logo5, category: 'Logo', prompt: 'Luxury brand elegant typography logo' },

    // Realistic Images
    { id: 16, src: realistic1, category: 'Realistic', prompt: 'Photorealistic mountain landscape at sunrise' },
    { id: 17, src: realistic2, category: 'Realistic', prompt: 'Hyperrealistic portrait of elderly person' },
    { id: 18, src: realistic3, category: 'Realistic', prompt: 'Realistic urban cityscape photography' },
    { id: 19, src: realistic4, category: 'Realistic', prompt: 'Wildlife photography of wolf in forest' },
    { id: 20, src: realistic5, category: 'Realistic', prompt: 'Macro photography of water droplets' },
  ];

  const categories = ['All', 'Anime', 'Artistic', 'Logo', 'Realistic'];

  // Filter images
  const filteredImages = allImages
    .filter(image => selectedCategory === 'All' || image.category === selectedCategory)
    .slice(0, visibleImages);

  // Infinite scroll handler
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

  const getCategoryColor = (category) => {
    const colors = {
      'Anime': '#FF6B6B',
      'Artistic': '#4ECDC4',
      'Logo': '#45B7D1',
      'Realistic': '#96CEB4',
      'All': '#6a11cb'
    };
    return colors[category] || '#666666';
  };

  return (
    <Box sx={{ 
      width: '100%',
      mt: 2 // 10px margin from top
    }}>
      {/* Side Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          color: '#333333',
          mb: 2,
          fontSize: '1.5rem'
        }}
      >
        Explore more Indigo's here
      </Typography>

      {/* Categories */}
      <Box sx={{ 
        display: 'flex', 
        gap: 1, 
        flexWrap: 'wrap', 
        mb: 3 
      }}>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            clickable
            variant={selectedCategory === category ? "filled" : "outlined"}
            onClick={() => setSelectedCategory(category)}
            sx={{
              backgroundColor: selectedCategory === category ? getCategoryColor(category) : 'transparent',
              color: selectedCategory === category ? 'white' : '#666666',
              borderColor: selectedCategory === category ? getCategoryColor(category) : '#e0e0e0',
              fontWeight: 600,
              fontSize: '0.8rem',
              '&:hover': {
                backgroundColor: selectedCategory === category ? getCategoryColor(category) : 'rgba(106, 17, 203, 0.1)',
                color: selectedCategory === category ? 'white' : '#6a11cb',
                borderColor: selectedCategory === category ? getCategoryColor(category) : '#6a11cb'
              }
            }}
          />
        ))}
      </Box>

      {/* Images Grid */}
      <Grid container spacing={1}> {/* gap: 1 */}
        {filteredImages.map((image) => (
          <Grid item xs={6} sm={4} md={3} lg={2.4} key={image.id}>
            <Card 
              sx={{ 
                borderRadius: '10px', // 10px border radius
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <CardMedia
                component="img"
                image={image.src}
                alt={image.prompt}
                sx={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Loading Indicator for Infinite Scroll */}
      {visibleImages < allImages.length && (
        <Box sx={{ textAlign: 'center', py: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Loading more images...
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DashboardGallery;