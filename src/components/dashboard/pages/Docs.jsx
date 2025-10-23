import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  useMediaQuery
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  PlayArrow as PlayIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Import video assets
import creativeUpscale from "../../../assets/image_gen_tools/creative-upscale.webm";
import facePortrait from "../../../assets/image_gen_tools/face-portrait.webm";
import imageEditor from "../../../assets/image_gen_tools/image-editor.webm";
import png from "../../../assets/image_gen_tools/png.webm";
import realtimeGeneration from "../../../assets/image_gen_tools/realtime-generation.webm";
import reimagine from "../../../assets/image_gen_tools/reimagine.webm";
import restructure from "../../../assets/image_gen_tools/restructure.webm";
import textToImageV2 from "../../../assets/image_gen_tools/text-to-image-v2.webm";
import trainModel from "../../../assets/image_gen_tools/trainmodel.webm";

const Docs = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const videoTools = [
    {
      id: 1,
      title: "Text to Image V2",
      description: "Generate stunning images from text descriptions using our advanced AI model. Create anything from realistic photos to artistic illustrations.",
      video: textToImageV2,
      category: "Generation",
      difficulty: "Beginner",
      explanation: "Simply type your imagination and watch as our AI transforms text into beautiful, high-quality images. Perfect for content creators, designers, and anyone looking to bring ideas to life visually."
    },
    {
      id: 2,
      title: "Restructure Tool",
      description: "Modify image composition, rearrange elements, and change layouts while maintaining visual coherence.",
      video: restructure,
      category: "Editing",
      difficulty: "Advanced",
      explanation: "Rearrange objects, change compositions, and modify layouts without losing image quality. Ideal for designers who need to adapt existing images to new formats or compositions."
    },
    {
      id: 3,
      title: "Model Training",
      description: "Create custom AI models trained on your specific style or concept for personalized image generation.",
      video: trainModel,
      category: "Advanced",
      difficulty: "Expert",
      explanation: "Train your own AI models using your unique style, brand elements, or specific concepts. Upload your dataset and let our platform create a personalized model that understands your vision."
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Generation': '#4CAF50',
      'Enhancement': '#2196F3',
      'Portrait': '#FF9800',
      'Editing': '#9C27B0',
      'Export': '#607D8B',
      'Transformation': '#FF5722',
      'Advanced': '#F44336'
    };
    return colors[category] || '#666666';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': '#4CAF50',
      'Intermediate': '#FF9800',
      'Advanced': '#F44336',
      'Expert': '#9C27B0'
    };
    return colors[difficulty] || '#666666';
  };

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh', 
      backgroundColor: '#1a1a1a',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Back to Dashboard Button */}
      <Box sx={{ px: 3, pt: 3, maxWidth: '1200px', margin: '0 auto' }}>
        <Button
          startIcon={<BackIcon />}
          onClick={() => navigate('/dashboard')}
          sx={{
            color: '#ffffff',
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          Back to Dashboard
        </Button>
      </Box>

      {/* Main Content Container */}
      <Box sx={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        px: { xs: 2, md: 3 },
        py: 4,
        boxSizing: 'border-box'
      }}>
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: '#ffffff',
              mb: 2,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.2rem', md: '3rem' }
            }}
          >
            Indigo Documentation & Tutorials
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#cccccc',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.2rem' },
              mb: 2
            }}
          >
            Learn how to master Indigo.AI with our comprehensive video tutorials and documentation.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#999999',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Hover over any video to play the tutorial automatically
          </Typography>
        </Box>

        {/* Tools Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {videoTools.map((tool) => (
            <Grid item xs={12} lg={4} key={tool.id}>
              <Card 
                sx={{ 
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #333333',
                  backgroundColor: '#2d2d2d',
                  overflow: 'hidden',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(102, 17, 203, 0.3)',
                    borderColor: '#6a11cb'
                  }
                }}
              >
                {/* Video Container */}
                <Box 
                  sx={{ 
                    position: 'relative', 
                    backgroundColor: '#000',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => setHoveredVideo(tool.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <CardMedia
                    component="video"
                    src={tool.video}
                    muted
                    autoPlay={hoveredVideo === tool.id}
                    loop
                    controls={false}
                    sx={{
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover'
                    }}
                  />
                  
                  {/* Play Overlay */}
                  {hoveredVideo !== tool.id && (
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      <IconButton
                        sx={{
                          color: 'white',
                          backgroundColor: 'rgba(106, 17, 203, 0.8)',
                          width: 60,
                          height: 60,
                          '&:hover': {
                            backgroundColor: 'rgba(106, 17, 203, 1)'
                          }
                        }}
                      >
                        <PlayIcon sx={{ fontSize: '2rem' }} />
                      </IconButton>
                    </Box>
                  )}

                  {/* Category Badge */}
                  <Chip
                    label={tool.category}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      backgroundColor: getCategoryColor(tool.category),
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.7rem'
                    }}
                  />

                  {/* Difficulty Badge */}
                  <Chip
                    label={tool.difficulty}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      backgroundColor: getDifficultyColor(tool.difficulty),
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.7rem'
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Title */}
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700,
                      color: '#ffffff',
                      mb: 2
                    }}
                  >
                    {tool.title}
                  </Typography>

                  {/* Description */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.6,
                      mb: 2,
                      color: '#cccccc'
                    }}
                  >
                    {tool.description}
                  </Typography>

                  {/* Detailed Explanation */}
                  <Box sx={{ mb: 3, flex: 1 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#999999',
                        lineHeight: 1.6,
                        fontSize: '0.9rem'
                      }}
                    >
                      {tool.explanation}
                    </Typography>
                  </Box>

                  {/* Action Button */}
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<PlayIcon />}
                    onClick={() => setHoveredVideo(hoveredVideo === tool.id ? null : tool.id)}
                    sx={{
                      borderRadius: '8px',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      py: 1.2,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
                      }
                    }}
                  >
                    {hoveredVideo === tool.id ? 'Pause Tutorial' : 'Play Tutorial'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Quick Start Guide - Single Row */}
        <Box sx={{ mt: 6 }}>
          <Card sx={{ 
            borderRadius: '20px', 
            background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
            border: '1px solid #333333'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#ffffff', textAlign: 'center' }}>
                🚀 Quick Start Guide
              </Typography>
              <Typography variant="h6" sx={{ color: '#cccccc', mb: 4, fontWeight: 400, textAlign: 'center' }}>
                New to Indigo.AI? Follow these steps to get started:
              </Typography>
              
              <Grid container spacing={3} sx={{ maxWidth: '900px', margin: '0 auto' }}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Box sx={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px auto',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '1.5rem'
                    }}>
                      1
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#ffffff' }}>Describe Your Idea</Typography>
                    <Typography variant="body2" sx={{ color: '#999999', lineHeight: 1.5 }}>
                      Write a detailed prompt describing what you want to create in your mind
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Box sx={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px auto',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '1.5rem'
                    }}>
                      2
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#ffffff' }}>Choose Your Tool</Typography>
                    <Typography variant="body2" sx={{ color: '#999999', lineHeight: 1.5 }}>
                      Select the perfect AI tool that matches your creative needs
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Box sx={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px auto',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '1.5rem'
                    }}>
                      3
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#ffffff' }}>Generate & Refine</Typography>
                    <Typography variant="body2" sx={{ color: '#999999', lineHeight: 1.5 }}>
                      Create your masterpiece and use AI tools to perfect every detail
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/dashboard')}
                  sx={{
                    borderRadius: '12px',
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    textTransform: 'none',
                    color: 'white',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Start Creating Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Docs;