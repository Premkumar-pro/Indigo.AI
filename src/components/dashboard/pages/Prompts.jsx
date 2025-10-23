import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
  InputAdornment,
  Divider,
  Container
} from '@mui/material';
import {
  Search as SearchIcon,
  ContentCopy as CopyIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  TrendingUp as TrendingIcon,
  AutoAwesome as MagicIcon,
  ArrowBack as BackIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Prompts = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  // Categories for filtering
  const categories = [
    'All', 'Art', 'Photography', 'Fantasy', 'Sci-Fi', 'Portrait', 
    'Landscape', 'Abstract', 'Animals', 'Architecture', 'Food',
    'Anime', 'Cyberpunk', 'Minimalist', 'Surreal', 'Vintage'
  ];

  // Sample prompts data
  const prompts = [
    {
      id: 1,
      text: "A majestic dragon soaring over a medieval castle at sunset, digital art, highly detailed, epic composition",
      category: 'Fantasy',
      usage: '12.4K',
      trending: true,
      tags: ['dragon', 'castle', 'sunset', 'digital art']
    },
    {
      id: 2,
      text: "Cyberpunk cityscape at night with neon lights, flying vehicles, and towering skyscrapers, futuristic aesthetic",
      category: 'Cyberpunk',
      usage: '8.7K',
      trending: true,
      tags: ['cyberpunk', 'city', 'neon', 'futuristic']
    },
    {
      id: 3,
      text: "Serene mountain landscape with crystal clear lake reflecting snow-capped peaks, golden hour lighting",
      category: 'Landscape',
      usage: '15.2K',
      trending: false,
      tags: ['mountains', 'lake', 'sunset', 'nature']
    },
    {
      id: 4,
      text: "Portrait of a wise old wizard with long white beard, intricate robes, holding a glowing crystal staff",
      category: 'Fantasy',
      usage: '6.3K',
      trending: true,
      tags: ['wizard', 'portrait', 'fantasy', 'magic']
    },
    {
      id: 5,
      text: "Abstract geometric patterns with vibrant colors and fluid shapes, modern art style",
      category: 'Abstract',
      usage: '9.1K',
      trending: false,
      tags: ['abstract', 'geometric', 'colorful', 'modern']
    },
    {
      id: 6,
      text: "Cute anime-style character with big expressive eyes, colorful hair, in a magical forest setting",
      category: 'Anime',
      usage: '14.8K',
      trending: true,
      tags: ['anime', 'character', 'magical', 'forest']
    },
    {
      id: 7,
      text: "Futuristic spaceship interior with holographic displays and sleek design, sci-fi aesthetic",
      category: 'Sci-Fi',
      usage: '7.2K',
      trending: false,
      tags: ['spaceship', 'futuristic', 'holographic', 'sci-fi']
    },
    {
      id: 8,
      text: "Minimalist Japanese garden with cherry blossoms, stone pathway, and tranquil pond",
      category: 'Minimalist',
      usage: '11.5K',
      trending: true,
      tags: ['japanese', 'garden', 'minimalist', 'cherry blossoms']
    },
    {
      id: 9,
      text: "Delicious gourmet burger with melted cheese, fresh vegetables, and golden fries, food photography",
      category: 'Food',
      usage: '5.9K',
      trending: false,
      tags: ['burger', 'food', 'gourmet', 'photography']
    },
    {
      id: 10,
      text: "Surreal landscape with floating islands and waterfalls in the sky, dreamlike atmosphere",
      category: 'Surreal',
      usage: '13.7K',
      trending: true,
      tags: ['surreal', 'floating islands', 'waterfalls', 'dream']
    },
    {
      id: 11,
      text: "Vintage 1950s diner with retro neon signs, classic cars, and nostalgic atmosphere",
      category: 'Vintage',
      usage: '4.2K',
      trending: false,
      tags: ['vintage', 'retro', 'diner', '1950s']
    },
    {
      id: 12,
      text: "Wild wolf howling at full moon in snowy forest, wildlife photography, dramatic lighting",
      category: 'Animals',
      usage: '8.9K',
      trending: true,
      tags: ['wolf', 'moon', 'forest', 'wildlife']
    }
  ];

  const toggleFavorite = (promptId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(promptId)) {
      newFavorites.delete(promptId);
    } else {
      newFavorites.add(promptId);
    }
    setFavorites(newFavorites);
  };

  const copyToClipboard = async (promptText, promptId) => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopiedPrompt(promptId);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const filteredPrompts = prompts.filter(prompt =>
    searchQuery === 'All' || searchQuery === '' ? true :
    prompt.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prompt.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh', 
      backgroundColor: '#ffffff', 
      padding: 3,
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      {/* Back to Dashboard Button */}
      <Box sx={{ maxWidth: '100%', boxSizing: 'border-box' }}>
        <Button
          startIcon={<BackIcon />}
          onClick={() => navigate('/dashboard')}
          sx={{
            mb: 4,
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
        mb: 6, 
        textAlign: 'center',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: '#333333',
            mb: 2,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.5rem', md: '3rem' },
            wordWrap: 'break-word'
          }}
        >
          Indigo Prompt Library
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#666666',
            mb: 4,
            maxWidth: '100%',
            margin: '0 auto',
            fontWeight: 400,
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            px: 2
          }}
        >
          Discover powerful prompts to create stunning AI-generated images. Copy, customize, and get inspired!
        </Typography>

        {/* Search Bar - Full Width */}
        <Box sx={{ width: '100%', maxWidth: '100%', px: { xs: 0, md: 2 } }}>
          <TextField
            fullWidth
            placeholder="Search prompts by keywords, categories, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              maxWidth: '100%',
              margin: '0 auto',
              mb: 4,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: '#f8f9fa',
                fontSize: '1.1rem',
                padding: '8px 16px',
                '&:hover fieldset': {
                  borderColor: '#6a11cb',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6a11cb',
                },
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#666666', fontSize: '1.5rem' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Categories Filter - Full Width */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 1, 
          flexWrap: 'wrap', 
          mb: 4,
          px: { xs: 1, md: 2 },
          maxWidth: '100%'
        }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              variant={searchQuery === category ? "filled" : "outlined"}
              onClick={() => setSearchQuery(category === 'All' ? '' : category)}
              sx={{
                backgroundColor: searchQuery === category ? '#6a11cb' : 'transparent',
                color: searchQuery === category ? 'white' : '#666666',
                borderColor: '#e0e0e0',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '8px 16px',
                height: 'auto',
                mb: 1,
                '&:hover': {
                  backgroundColor: searchQuery === category ? '#5a0db5' : 'rgba(106, 17, 203, 0.1)',
                  color: searchQuery === category ? 'white' : '#6a11cb',
                  borderColor: '#6a11cb'
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Prompts Grid - Full Width */}
      <Container 
        maxWidth={false} 
        sx={{ 
          px: { xs: 1, sm: 2, md: 3 },
          maxWidth: '100% !important',
          boxSizing: 'border-box'
        }}
      >
        <Grid container spacing={2}>
          {filteredPrompts.map((prompt) => (
            <Grid item xs={12} sm={6} md={4} key={prompt.id}>
              <Card 
                sx={{ 
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e0e0e0',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '100%',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 40px rgba(106, 17, 203, 0.15)',
                    borderColor: '#6a11cb'
                  }
                }}
              >
                <CardContent sx={{ 
                  p: { xs: 2, sm: 3 }, 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  width: '100%',
                  boxSizing: 'border-box'
                }}>
                  {/* Prompt Header */}
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    mb: 2,
                    gap: 1,
                    flexWrap: 'wrap'
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                      <Chip
                        label={prompt.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(106, 17, 203, 0.1)',
                          color: '#6a11cb',
                          fontWeight: 700,
                          fontSize: '0.75rem'
                        }}
                      />
                      {prompt.trending && (
                        <Chip
                          icon={<TrendingIcon sx={{ fontSize: '16px !important' }} />}
                          label="Trending"
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255, 107, 107, 0.1)',
                            color: '#ff6b6b',
                            fontWeight: 700,
                            fontSize: '0.75rem'
                          }}
                        />
                      )}
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <IconButton 
                        size="small" 
                        onClick={() => toggleFavorite(prompt.id)}
                        sx={{ 
                          color: favorites.has(prompt.id) ? '#ff6b6b' : '#cccccc',
                          '&:hover': { color: '#ff6b6b' }
                        }}
                      >
                        {favorites.has(prompt.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </IconButton>
                      <IconButton 
                        size="small" 
                        onClick={() => copyToClipboard(prompt.text, prompt.id)}
                        sx={{ 
                          color: copiedPrompt === prompt.id ? '#4caf50' : '#666666',
                          transition: 'all 0.3s ease',
                          '&:hover': { color: '#6a11cb' }
                        }}
                      >
                        <CopyIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Prompt Text */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#333333',
                      lineHeight: 1.6,
                      mb: 2,
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      fontStyle: 'italic',
                      flex: 1,
                      wordWrap: 'break-word'
                    }}
                  >
                    "{prompt.text}"
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 0.5, 
                    flexWrap: 'wrap', 
                    mb: 2 
                  }}>
                    {prompt.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={`#${tag}`}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: '0.7rem',
                          height: '24px',
                          borderColor: '#e0e0e0',
                          color: '#666666',
                          backgroundColor: '#f8f9fa'
                        }}
                      />
                    ))}
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  {/* Footer */}
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 1
                  }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                      {prompt.usage} uses
                    </Typography>
                    <Button
                      size="small"
                      startIcon={<MagicIcon />}
                      onClick={() => copyToClipboard(prompt.text, prompt.id)}
                      sx={{
                        textTransform: 'none',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: copiedPrompt === prompt.id ? '#4caf50' : '#6a11cb',
                        '&:hover': {
                          backgroundColor: 'rgba(106, 17, 203, 0.1)'
                        }
                      }}
                    >
                      {copiedPrompt === prompt.id ? 'Copied!' : 'Use Prompt'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {filteredPrompts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8, width: '100%' }}>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              No prompts found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Try searching with different keywords or browse all categories
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Prompts;