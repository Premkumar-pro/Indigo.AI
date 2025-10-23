import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  IconButton
} from '@mui/material';
import { AutoAwesome as GenerateIcon, AutoFixHigh as AutoFixHighIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from "@mui/icons-material";
import DashboardGallery from '../pages/DashboardGallery';


// Import your video files directly
import creativeUpscale from "../../../assets/image_gen_tools/creative-upscale.webm";
import facePortrait from "../../../assets/image_gen_tools/face-portrait.webm";
import imageEditor from "../../../assets/image_gen_tools/image-editor.webm";
import png from "../../../assets/image_gen_tools/png.webm";
import realtimeGeneration from "../../../assets/image_gen_tools/realtime-generation.webm";
import reimagine from "../../../assets/image_gen_tools/reimagine.webm";
import restructure from "../../../assets/image_gen_tools/restructure.webm";
import textToImageV2 from "../../../assets/image_gen_tools/text-to-image-v2.webm";
import trainModel from "../../../assets/image_gen_tools/trainmodel.webm";




const DashboardInput = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');

  // Prompt examples for auto-type
  const promptExamples = [
    "A serene mountain landscape at sunrise with misty valleys",
    "A futuristic city with flying cars and neon lights",
    "A cute cartoon character reading a book under a tree",
    "A beautiful underwater scene with colorful coral reefs",
    "A cozy cabin in the woods during autumn season",
    "A magical forest with glowing mushrooms and fairies",
    "A vintage coffee shop with warm lighting and books",
    "A space station orbiting around a distant planet",
    "A Japanese garden with koi pond and cherry blossoms",
    "A medieval castle on a hill during golden hour"
  ];

  const handleAutoType = () => {
    const randomPrompt = promptExamples[Math.floor(Math.random() * promptExamples.length)];
    setPrompt('');
    
    // Typewriter effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < randomPrompt.length) {
        setPrompt(prev => prev + randomPrompt.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
  };

  const handleGenerate = () => {
    if (prompt.trim()) {
      navigate('/dashboard/text-to-image', { state: { prompt } });
    }
  };

  // AI Models data with direct video imports
  const aiModels = [
    { 
      id: 1, 
      video: creativeUpscale,
      name: 'Creative Upscale',
      description: 'Enhance and upscale your images'
    },
    { 
      id: 2, 
      video: facePortrait,
      name: 'Face Portrait',
      description: 'Generate stunning portrait images'
    },
    { 
      id: 3, 
      video: imageEditor,
      name: 'Image Editor',
      description: 'Advanced image editing tools'
    },
    { 
      id: 4, 
      video: png,
      name: 'PNG Generator',
      description: 'Create transparent PNG images'
    },
    { 
      id: 5, 
      video: realtimeGeneration,
      name: 'Real-time Gen',
      description: 'Instant image generation'
    },
    { 
      id: 6, 
      video: reimagine,
      name: 'Reimagine',
      description: 'Transform existing images'
    },
    { 
      id: 7, 
      video: restructure,
      name: 'Restructure',
      description: 'Modify image composition'
    },
    { 
      id: 8, 
      video: textToImageV2,
      name: 'Text to Image V2',
      description: 'Advanced text-to-image model'
    },
    { 
      id: 9, 
      video: trainModel,
      name: 'Train Model',
      description: 'Custom model training'
    }
  ];

  return (
    <Box sx={{ 
      width: '100%',
      minHeight: '100vh',
      padding: { xs: 2, sm: 3, md: 4 },
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      {/* Main Heading Section */}
      <Box sx={{ 
        mb: 6, 
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#333333',
            mb: 2,
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            textAlign: 'center'
          }}
        >
          AI Image Generator
        </Typography>


        {/* Input Section */}
        <Box sx={{ 
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: '20px',
          padding: { xs: 3, md: 4 },
          mb: 4,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '100%',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxSizing: 'border-box'
        }}>
          
          {/* Subtle Background Animation */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            animation: 'shimmer 4s infinite linear',
            backgroundSize: '200% 100%',
            opacity: 0.5,
          }} />

          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#2d3748',
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2rem' },
                textAlign: 'center',
              }}
            >
              Describe your ideas and generate
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: '#4a5568',
                mb: 4,
                textAlign: 'center',
                fontWeight: 400,
                fontSize: { xs: '0.9rem', md: '1.1rem' }
              }}
            >
              Transform your words into visual masterpieces: Leverage AI technology to craft breathtaking images.
            </Typography>

            {/* Input Container with Integrated Button */}
            <Box sx={{ 
              position: 'relative',
              width: '100%'
            }}>
              {/* Input Field */}
              <TextField
                fullWidth
                multiline
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Write a prompt to generate..."
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    border: '2px solid #e2e8f0',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    paddingRight: { xs: '140px', md: '180px' },
                    '&:hover fieldset': {
                      borderColor: '#667eea',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#667eea',
                      boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#2d3748',
                    paddingLeft: '50px',
                    '&::placeholder': {
                      color: '#a0aec0',
                      fontWeight: 500,
                    }
                  },
                  '& .MuiOutlinedInput-inputMultiline': {
                    padding: '16px',
                    paddingLeft: '50px',
                    lineHeight: 1.6
                  }
                }}
              />

              {/* Auto-type Icon Button (Left Side) */}
              <IconButton
                onClick={handleAutoType}
                sx={{
                  position: 'absolute',
                  left: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  color: '#667eea',
                  borderRadius: '12px',
                  padding: '6px',
                  '&:hover': {
                    backgroundColor: 'rgba(102, 126, 234, 0.2)',
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                  zIndex: 3,
                }}
              >
                <AutoFixHighIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
              </IconButton>

              {/* Generate Button (Right Side) */}
              <Button
                variant="contained"
                size="large"
                onClick={handleGenerate}
                disabled={!prompt.trim() || prompt.trim().length < 3}
                sx={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  borderRadius: '12px',
                  px: { xs: 2, md: 3 },
                  py: 1.5,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 600,
                  background: prompt.trim().length >= 3 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'rgba(102, 126, 234, 0.3)',
                  color: '#ffffff',
                  textTransform: 'none',
                  minWidth: { xs: '100px', md: '120px' },
                  boxShadow: prompt.trim().length >= 3 
                    ? '0 4px 15px rgba(102, 126, 234, 0.3)'
                    : 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: prompt.trim().length >= 3 
                      ? 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
                      : 'rgba(102, 126, 234, 0.4)',
                    transform: prompt.trim().length >= 3 ? 'translateY(-50%) scale(1.05)' : 'translateY(-50%)',
                    boxShadow: prompt.trim().length >= 3 
                      ? '0 6px 20px rgba(102, 126, 234, 0.4)'
                      : 'none',
                  },
                }}
              >
                Generate
              </Button>
            </Box>
          </Box>

          {/* CSS Animations */}
          <style jsx>{`
            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}</style>
        </Box>
      </Box>

      {/* AI Models Section */}
      <Box sx={{ 
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 6,
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: '#333333',
              textAlign: 'left',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            AI Image Generation Models
          </Typography>
        </Box>

<Grid
  container
  spacing={2}
  sx={{
    flexWrap: { xs: "wrap", sm: "nowrap" },
    overflowX: { xs: "visible", sm: "auto" },
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
    position: "relative",
  }}
>
  {aiModels.map((model) => (
    <Grid
      item
      key={model.id}
      sx={{
        flex: { sm: "0 0 auto" },
        width: { xs: "48%", sm: "220px", md: "240px" },
      }}
    >
      <Card
        sx={{
          borderRadius: "16px",
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",
          height: "180px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
          },
        }}
      >
        {/* Video */}
        <Box sx={{ height: "120px", overflow: "hidden", background: "#f7f7f7" }}>
          <video
            muted
            loop
            preload="metadata"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              display: "block",
            }}
            onMouseEnter={(e) => e.target.play().catch(() => {})}
            onMouseLeave={(e) => {
              e.target.pause();
              e.target.currentTime = 0;
            }}
          >
            <source src={model.video} type="video/webm" />
          </video>
        </Box>

        {/* Model Info */}
        <Box sx={{ p: 1.2 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "0.9rem", mb: 0.3 }}
          >
            {model.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.75rem" }}
          >
            {model.description}
          </Typography>
        </Box>
      </Card>
    </Grid>
  ))}

  {/* Fixed View More Icon */}
  <IconButton
    sx={{
      position: "sticky",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
      color: "#fff",
      zIndex: 2,
      "&:hover": {
        background: "linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)",
      },
    }}
  >
    <ChevronRight />
  </IconButton>
</Grid>

<DashboardGallery>
  
</DashboardGallery>



      </Box>
    </Box>
  );
};

export default DashboardInput;


