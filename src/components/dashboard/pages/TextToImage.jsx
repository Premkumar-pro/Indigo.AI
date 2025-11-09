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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Switch,
  FormControlLabel,
  IconButton,
  Divider,
  Paper
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  AutoAwesome as GenerateIcon,
  AutoAwesome,
  Download as DownloadIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ContentCopy as CopyIcon,
  Shuffle as ShuffleIcon,
  Settings as SettingsIcon,
  Style as StyleIcon,
  Storage as ModelIcon,
  AspectRatio as SizeIcon,
  Collections as CountIcon,
  Grade as QualityIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const TextToImage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialPrompt = location.state?.prompt || '';

  // State management
  const [prompt, setPrompt] = useState(initialPrompt);
  const [negativePrompt, setNegativePrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('realistic');
  const [selectedModel, setSelectedModel] = useState('nano');
  const [imageSize, setImageSize] = useState(512);
  const [numImages, setNumImages] = useState(1);
  const [quality, setQuality] = useState(75);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [favorites, setFavorites] = useState(new Set());

  // Sample data
  const styles = [
    { value: 'realistic', label: 'Realistic', description: 'Photorealistic images' },
    { value: 'artistic', label: 'Artistic', description: 'Painting and artistic styles' },
    { value: 'anime', label: 'Anime', description: 'Japanese anime and manga style' },
    { value: 'cyberpunk', label: 'Cyberpunk', description: 'Futuristic neon aesthetics' },
    { value: 'fantasy', label: 'Fantasy', description: 'Magical and mythical themes' },
    { value: 'minimalist', label: 'Minimalist', description: 'Clean and simple designs' },
    { value: 'vintage', label: 'Vintage', description: 'Retro and classic styles' },
    { value: 'abstract', label: 'Abstract', description: 'Non-representational art' }
  ];

  const models = [
    { value: 'nano', label: 'Nano', description: 'Fast generation, good for concepts' },
    { value: 'banana', label: 'Banana', description: 'Balanced speed and quality' },
    { value: 'quantum', label: 'Quantum', description: 'High detail, slower generation' },
    { value: 'fusion', label: 'Fusion', description: 'Mixed style capabilities' },
    { value: 'neo', label: 'Neo', description: 'Latest model with advanced features' }
  ];

  const promptExamples = [
    "Detailed portrait of a noble feline warrior in armor, kneeling pose, elaborate craftsmanship, silver-toned, luxurious fabric, cinematic illumination, 4K resolution",
    "A dramatic point-of-view shot from inside a Ferrari 296 GTB racing through an illuminated cityscape, captured in the adrenaline-fueled atmosphere of a street race. The racecar driver's hands tightly grip the intricately designed steering wheel, which scintillates with vibrant LED lights. The horizon blurs as the car speeds forward, emphasizing the sensation of velocity, while the driver's hands visually merge with the steering wheel, creating a seamless fusion of man and machine. Neon lights from the surrounding buildings reflect off the car's sleek exterior, enhancing the dynamic racing scene.",
    "The night sky over the city, with stars twinkling in the dark blue background. The lights of tall buildings glow softly against the starry backdrop, creating an enchanting and dreamy atmosphere. High angle perspective with a wideangle lens captures the vastness of space above Tokyo's skyline in high resolution photography style. . high resolution high detail.",
    "Detailed, ethereal, sci-fi, steampunk, intricate, lifelike, representational artist, fine art, canvas oil painting, stunning artwork by Daniel F Gerhartz",
    "A majestic dragon soaring over a medieval castle during golden hour",
    "A minimalist interior design with natural light and modern furniture",
    "The night sky over the city, with stars twinkling in the dark blue background. The lights of tall buildings glow softly against the starry backdrop, creating an enchanting and dreamy atmosphere. High angle perspective with a wideangle lens captures the vastness of space above Tokyo's skyline in high resolution photography style. . high resolution high detail.",
    "A vintage coffee shop with warm lighting, books, and cozy atmosphere"
  ];

  // Handlers
  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const newImages = Array.from({ length: numImages }, (_, index) => ({
        id: Date.now() + index,
        url: `https://picsum.photos/${imageSize}?random=${Date.now() + index}`,
        prompt,
        negativePrompt,
        style: selectedStyle,
        model: selectedModel,
        size: imageSize,
        timestamp: new Date().toISOString()
      }));
      
      setGeneratedImages(newImages);
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (imageUrl, imageId) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `ai-generated-${imageId}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFavorite = (imageId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(imageId)) {
      newFavorites.delete(imageId);
    } else {
      newFavorites.add(imageId);
    }
    setFavorites(newFavorites);
  };

  const handleRandomPrompt = () => {
    const randomPrompt = promptExamples[Math.floor(Math.random() * promptExamples.length)];
    setPrompt(randomPrompt);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
  };

  // Rainbow loading ball component
  const RainbowLoader = () => (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center',
      height: '400px'
    }}>
      <Box sx={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #0000ff, #8000ff)',
        backgroundSize: '400% 400%',
        animation: 'rainbowRotate 2s ease-in-out infinite, pulse 1.5s ease-in-out infinite alternate',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3
      }}>
        <Box sx={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'white',
          opacity: 0.9
        }} />
      </Box>
      <Typography variant="h6" color="text.secondary">
        AI is generating your images...
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        This may take a few moments
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ 
      width: '100vw', 
      height: '100vh',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      display: 'flex'
    }}>
      {/* Left Sidebar - Advanced Features */}
      <Paper 
        elevation={0}
        sx={{ 
          width: '350px',
          height: '100vh',
          backgroundColor: '#f8fafc',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Sidebar Header */}
        <Box sx={{ 
          p: 3, 
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: 'white'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Button
              startIcon={<BackIcon />}
              onClick={() => navigate('/dashboard')}
              sx={{
                color: '#6a11cb',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '0.9rem',
                '&:hover': {
                  backgroundColor: 'rgba(106, 17, 203, 0.1)'
                }
              }}
            >
              Dashboard
            </Button>
            <Chip 
              label="Advanced"
              size="small"
              sx={{ 
                backgroundColor: 'rgba(106, 17, 203, 0.1)', 
                color: '#6a11cb', 
                fontWeight: 600 
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AI Studio
          </Typography>
        </Box>

        {/* Sidebar Content */}
        <Box sx={{ 
          flex: 1, 
          overflow: 'auto',
          p: 3 
        }}>
          {/* Style Selection */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <StyleIcon sx={{ color: '#6a11cb', mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#334155' }}>
                Art Style
              </Typography>
            </Box>
            <FormControl fullWidth size="small">
              <Select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                sx={{ 
                  borderRadius: '8px', 
                  backgroundColor: 'white',
                  '& .MuiSelect-select': { py: 1.5 }
                }}
              >
                {styles.map((style) => (
                  <MenuItem key={style.value} value={style.value}>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {style.label}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {style.description}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Model Selection */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <ModelIcon sx={{ color: '#6a11cb', mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#334155' }}>
                AI Model
              </Typography>
            </Box>
            <FormControl fullWidth size="small">
              <Select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                sx={{ 
                  borderRadius: '8px', 
                  backgroundColor: 'white',
                  '& .MuiSelect-select': { py: 1.5 }
                }}
              >
                {models.map((model) => (
                  <MenuItem key={model.value} value={model.value}>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {model.label}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {model.description}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Image Size */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SizeIcon sx={{ color: '#6a11cb', mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#334155' }}>
                Image Size
              </Typography>
            </Box>
            <Box sx={{ px: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#6a11cb', mb: 1 }}>
                {imageSize}px
              </Typography>
              <Slider
                value={imageSize}
                onChange={(e, newValue) => setImageSize(newValue)}
                min={256}
                max={1024}
                step={128}
                sx={{ color: '#6a11cb' }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                <Typography variant="caption" color="text.secondary">256px</Typography>
                <Typography variant="caption" color="text.secondary">1024px</Typography>
              </Box>
            </Box>
          </Box>

          {/* Number of Images */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CountIcon sx={{ color: '#6a11cb', mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#334155' }}>
                Image Count
              </Typography>
            </Box>
            <Box sx={{ px: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#6a11cb', mb: 1 }}>
                {numImages} {numImages === 1 ? 'Image' : 'Images'}
              </Typography>
              <Slider
                value={numImages}
                onChange={(e, newValue) => setNumImages(newValue)}
                min={1}
                max={4}
                step={1}
                sx={{ color: '#6a11cb' }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                <Typography variant="caption" color="text.secondary">1</Typography>
                <Typography variant="caption" color="text.secondary">4</Typography>
              </Box>
            </Box>
          </Box>

          {/* Quality */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <QualityIcon sx={{ color: '#6a11cb', mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#334155' }}>
                Quality
              </Typography>
            </Box>
            <Box sx={{ px: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#6a11cb', mb: 1 }}>
                {quality}%
              </Typography>
              <Slider
                value={quality}
                onChange={(e, newValue) => setQuality(newValue)}
                min={25}
                max={100}
                step={5}
                sx={{ color: '#6a11cb' }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                <Typography variant="caption" color="text.secondary">25%</Typography>
                <Typography variant="caption" color="text.secondary">100%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Main Content Area */}
      <Box sx={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Main Header */}
<Box sx={{ 
  p: 4, 
  borderBottom: '1px solid #e2e8f0',
  backgroundColor: 'white',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #faf5ff 0%, #f0f9ff 50%, #fef7ff 100%)'
}}>
  {/* Animated Border */}
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #6366f1, #8b5cf6, #a855f7, #c4b5fd, #4f46e5)',
    backgroundSize: '400% 100%',
    animation: 'borderFlow 3s linear infinite',
    zIndex: 2
  }} />
  
  {/* Pulsing Background Orbs */}
  <Box sx={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0) 70%)',
    borderRadius: '50%',
    animation: 'pulseOrb 8s ease-in-out infinite',
    zIndex: 0
  }} />
  
  {/* Main Title with Enhanced Animation */}
  <Box sx={{ position: 'relative', zIndex: 1 }}>
    <Typography
      variant="h2"
      sx={{
        fontWeight: 900,
        fontSize: { xs: '1.5rem', md: '3rem' },
        textAlign: 'center',
        background: 'linear-gradient(45deg, #4f46e5, #7c3aed, #6366f1, #8b5cf6, #a855f7, #c4b5fd, #4f46e5)',
        backgroundSize: '400% 400%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'rainbowFlow 3s ease infinite',
        textShadow: '0 8px 32px rgba(79, 70, 229, 0.4)',
        letterSpacing: '-0.03em',
        mb: 2,
        position: 'relative',
        display: 'inline-block',
        left: '50%',
        transform: 'translateX(-50%)',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -8,
          left: '10%',
          width: '60%',
          height: 2,
          background: 'linear-gradient(90deg, transparent, #4f46e5, #7c3aed, transparent)',
          animation: 'underlineFlow 4s ease infinite'
        }
      }}
    >
      indigo AI Studio
    </Typography>
    
    <Typography
      variant="h5"
      sx={{
        fontWeight: 300,
        textAlign: 'center',
        background: 'linear-gradient(45deg, #6b7280, #9ca3af, #d1d5db, #9ca3af, #6b7280)',
        backgroundSize: '300% 300%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'subtleFlow 6s ease infinite',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        opacity: 0.8
      }}
    >
      Create Magic with AI
    </Typography>
  </Box>

  {/* Enhanced Floating Particles */}
  <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    pointerEvents: 'none'
  }}>
    {[...Array(12)].map((_, i) => (
      <Box
        key={i}
        sx={{
          position: 'absolute',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${
            ['#4f46e5', '#7c3aed', '#6366f1', '#8b5cf6'][i % 4]
          } 0%, ${
            ['#7c3aed', '#a855f7', '#c4b5fd', '#6366f1'][i % 4]
          } 100%)`,
          animation: `magicFloat ${10 + i * 1.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`,
          left: `${5 + (i * 8) % 90}%`,
          top: `${15 + (i * 7) % 70}%`,
          filter: 'blur(0.5px)',
          boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)'
        }}
      />
    ))}
  </Box>

  {/* Add Enhanced CSS Animations */}
  <style>
    {`
      @keyframes rainbowFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes subtleFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes borderFlow {
        0% { background-position: 0% 0%; }
        100% { background-position: 400% 0%; }
      }
      
      @keyframes pulseOrb {
        0%, 100% { 
          opacity: 0.3;
          transform: translate(-50%, -50%) scale(1);
        }
        50% { 
          opacity: 0.6;
          transform: translate(-50%, -50%) scale(1.2);
        }
      }
      
      @keyframes underlineFlow {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      
      @keyframes magicFloat {
        0%, 100% { 
          transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
          opacity: 0.4;
        }
        25% { 
          transform: translateY(-30px) translateX(15px) rotate(90deg) scale(1.3);
          opacity: 0.8;
        }
        50% { 
          transform: translateY(-15px) translateX(25px) rotate(180deg) scale(0.7);
          opacity: 0.5;
        }
        75% { 
          transform: translateY(-25px) translateX(-15px) rotate(270deg) scale(1.2);
          opacity: 0.9;
        }
      }
    `}
  </style>
</Box>

{/* Main Content Area */}
{/* Main Content Area */}
<Box sx={{ 
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
}}>
  {/* Results Section - ABOVE Input */}
  <Box sx={{ 
    flex: 1,
    overflow: 'auto',
    p: 4
  }}>
    {isGenerating ? (
      <RainbowLoader />
    ) : generatedImages.length > 0 ? (
      <Box sx={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#334155' }}>
            Generated Images ({generatedImages.length})
          </Typography>
          <Chip 
            label={`${selectedModel.toUpperCase()} • ${selectedStyle} • ${imageSize}px`}
            sx={{ 
              backgroundColor: 'rgba(79, 70, 229, 0.1)', 
              color: '#4f46e5', 
              fontWeight: 600,
              fontSize: '0.9rem'
            }}
          />
        </Box>

        {/* Single Row Grid for Images */}
        <Box sx={{
          display: 'flex',
          gap: 3,
          overflowX: 'auto',
          pb: 2,
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            height: 8,
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f5f9',
            borderRadius: 4,
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#cbd5e1',
            borderRadius: 4,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#94a3b8',
          }
        }}>
          {generatedImages.map((image) => (
            <Box 
              key={image.id}
              sx={{ 
                minWidth: '300px',
                width: '300px',
                flexShrink: 0
              }}
            >
              <Card sx={{ 
                borderRadius: '16px', 
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                }
              }}>
                <Box sx={{ 
                  position: 'relative', 
                  flex: 1,
                  '&:hover .download-overlay': {
                    opacity: 1
                  }
                }}>
                  <img
                    src={image.url}
                    alt="Generated AI art"
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  
                  {/* Download Overlay - Only shows on hover */}
                  <Box 
                    className="download-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleDownload(image.url, image.id)}
                  >
                    <Box sx={{ textAlign: 'center', color: 'white' }}>
                      <DownloadIcon sx={{ fontSize: '3rem', mb: 1 }} />
                      <Typography variant="body2" fontWeight={600}>
                        Click to Download
                      </Typography>
                    </Box>
                  </Box>

                  {/* Favorite Button - Always visible */}
                  <IconButton 
                    size="small"
                    onClick={() => toggleFavorite(image.id)}
                    sx={{ 
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      '&:hover': { backgroundColor: 'white' },
                      boxShadow: '0 2px 12px rgba(0,0,0,0.2)'
                    }}
                  >
                    {favorites.has(image.id) ? 
                      <FavoriteIcon sx={{ color: '#ff6b6b', fontSize: '1.2rem' }} /> : 
                      <FavoriteBorderIcon sx={{ fontSize: '1.2rem' }} />
                    }
                  </IconButton>
                </Box>
                
                <CardContent sx={{ p: 3, flex: 0 }}>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      fontStyle: 'italic', 
                      mb: 2,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: 1.5
                    }}
                  >
                    "{image.prompt}"
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip 
                      label={image.model}
                      size="small"
                      variant="outlined"
                      sx={{ fontWeight: 600 }}
                    />
                    <Typography variant="caption" color="text.secondary" fontWeight={600}>
                      {image.size}px
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    ) : (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        color: 'text.secondary',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <AutoAwesome sx={{ fontSize: 120, mb: 3, opacity: 0.2 }} />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2, color: '#334155' }}>
          Your AI Art Gallery Awaits
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, color: '#64748b', fontWeight: 400 }}>
          Enter your creative prompt below to generate stunning images
        </Typography>
        <Box sx={{ 
          backgroundColor: '#f1f5f9', 
          borderRadius: '12px', 
          p: 3,
          textAlign: 'left',
          maxWidth: '400px'
        }}>
        </Box>
      </Box>
    )}
  </Box>

  {/* Input Section - BELOW Results */}
  <Box sx={{ 
    p: 4,
    backgroundColor: '#f8fafc',
    borderTop: '1px solid #e2e8f0',
    boxShadow: '0 -4px 20px rgba(0,0,0,0.05)'
  }}>
    <Box sx={{ 
      maxWidth: '1000px', 
      margin: '0 auto',
      display: 'flex',
      gap: 2,
      alignItems: 'flex-start'
    }}>
      {/* Main Input Field with Both Icons Inside */}
      <Box sx={{ 
        flex: 1, 
        position: 'relative'
      }}>
        <TextField
          fullWidth
          multiline
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your vision in detail... 🌟 Example: 'A majestic dragon flying over a medieval castle at sunset, fantasy art style, highly detailed, dramatic lighting'"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              backgroundColor: 'white',
              fontSize: '1rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              paddingLeft: '50px', // Space for random icon
              paddingRight: '140px', // Space for generate button
              '&:hover': {
                boxShadow: '0 4px 15px rgba(0,0,0,0.17)'
              },
              '&.Mui-focused': {
                boxShadow: '0 6px 20px rgba(79, 70, 229, 0.27)'
              }
            }
          }}
        />
        
        {/* Random Icon Inside Input Field - LEFT SIDE */}
        <IconButton 
          onClick={handleRandomPrompt} 
          size="medium"
          sx={{ 
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#64748b',
            backgroundColor: 'transparent',
            '&:hover': { 
              backgroundColor: 'rgba(79, 70, 229, 0.1)',
              color: '#4f46e5'
            },
            transition: 'all 0.2s ease',
            zIndex: 1
          }}
        >
          <ShuffleIcon />
        </IconButton>

        {/* Generate Button Inside Input Field - RIGHT SIDE */}
        <Button
          variant="contained"
          onClick={handleGenerate}
          disabled={!prompt.trim() || isGenerating}
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            borderRadius: '8px',
            px: 2,
            py: 1,
            fontWeight: 600,
            fontSize: '0.875rem',
            background: !prompt.trim() 
              ? 'linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%)' 
              : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            textTransform: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            minWidth: '100px',
            animation: !prompt.trim() ? 'pulse 2s ease-in-out infinite' : 'none',
            '&:hover': {
              background: !prompt.trim() 
                ? 'linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%)' 
                : 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
              transform: !prompt.trim() ? 'translateY(-50%)' : 'translateY(-50%) scale(1.05)',
              boxShadow: !prompt.trim() 
                ? '0 2px 8px rgba(0,0,0,0.1)' 
                : '0 4px 15px rgba(79, 70, 229, 0.3)'
            },
            '&.Mui-disabled': {
              background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
              transform: 'translateY(-50%)',
              boxShadow: 'none'
            }
          }}
        >
          {isGenerating ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{
                width: 12,
                height: 12,
                border: '2px solid transparent',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              Wait
            </Box>
          ) : (
            'Generate'
          )}
        </Button>
      </Box>
    </Box>
  </Box>
</Box>

{/* Add CSS animations */}
<style>
  {`
    @keyframes rainbowRotate {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes pulse {
      0% { transform: translateY(-50%) scale(1); }
      50% { transform: translateY(-50%) scale(1.05); }
      100% { transform: translateY(-50%) scale(1); }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}
</style>
    </Box>
    </Box>
  );
};

export default TextToImage;